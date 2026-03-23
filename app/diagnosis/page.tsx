"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RankingCard from "@/components/RankingCard";
import { rankingItems } from "@/lib/data";

type Answer = string | null;

const questions = [
  {
    id: "building",
    question: "住んでいる建物はどちらですか？",
    emoji: "🏠",
    options: [
      { value: "house", label: "一戸建て", emoji: "🏡" },
      { value: "mansion", label: "マンション・アパート", emoji: "🏢" },
    ],
  },
  {
    id: "smartphone",
    question: "今使っているスマホはどこですか？",
    emoji: "📱",
    options: [
      { value: "au", label: "au / UQモバイル", emoji: "🟠" },
      { value: "docomo", label: "ドコモ / ahamo", emoji: "🔴" },
      { value: "softbank", label: "ソフトバンク / ワイモバ", emoji: "🟡" },
      { value: "other", label: "その他 / 気にしない", emoji: "⚪" },
    ],
  },
  {
    id: "usage",
    question: "インターネットの主な使い方は？",
    emoji: "💻",
    options: [
      { value: "game", label: "ゲーム・配信", emoji: "🎮" },
      { value: "video", label: "動画視聴（YouTube等）", emoji: "🎬" },
      { value: "work", label: "テレワーク・ビデオ会議", emoji: "💼" },
      { value: "basic", label: "メール・SNS・検索", emoji: "📧" },
    ],
  },
];

function getRecommendation(answers: Record<string, Answer>) {
  const { smartphone, usage } = answers;

  if (smartphone === "au") return rankingItems[1]; // auひかり
  if (smartphone === "docomo") return rankingItems[2]; // ドコモ光
  if (usage === "game") return rankingItems[0]; // NURO光（速度重視）
  return rankingItems[0]; // デフォルト NURO光
}

export default function DiagnosisPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [done, setDone] = useState(false);

  const currentQ = questions[step];
  const progress = Math.round((step / questions.length) * 100);

  function handleAnswer(value: string) {
    const newAnswers = { ...answers, [currentQ.id]: value };
    setAnswers(newAnswers);

    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  }

  function reset() {
    setStep(0);
    setAnswers({});
    setDone(false);
  }

  const result = done ? getRecommendation(answers) : null;

  return (
    <>
      <Header />
      <main>
        {/* Page Hero */}
        <section className="bg-gradient-to-br from-purple-500 to-pink-400 text-white py-10 px-4 text-center">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm font-bold bg-white/20 inline-block px-3 py-1 rounded-full mb-3">
              ✨ 無料・3問だけ
            </p>
            <h1 className="text-3xl font-black mb-2">
              🔍 あなたにぴったりの回線診断
            </h1>
            <p className="text-sm opacity-90">
              3つの質問に答えるだけで最適な回線がわかります
            </p>
          </div>
        </section>

        <section className="py-10 px-4 bg-purple-50 min-h-[60vh]">
          <div className="max-w-xl mx-auto">
            {!done ? (
              <>
                {/* Progress bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>質問 {step + 1} / {questions.length}</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-400 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* Question card */}
                <div className="bg-white rounded-3xl shadow-md p-8 text-center">
                  <div className="text-5xl mb-4">{currentQ.emoji}</div>
                  <h2 className="text-xl font-black text-gray-800 mb-6">
                    {currentQ.question}
                  </h2>
                  <div className="space-y-3">
                    {currentQ.options.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => handleAnswer(opt.value)}
                        className="w-full flex items-center gap-3 px-5 py-4 rounded-2xl border-2 border-gray-200 hover:border-purple-400 hover:bg-purple-50 font-bold text-gray-700 transition-all pop-btn text-left"
                      >
                        <span className="text-2xl">{opt.emoji}</span>
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {step > 0 && (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="mt-4 text-sm text-gray-400 hover:text-gray-600 transition-colors mx-auto block"
                  >
                    ← 前の質問に戻る
                  </button>
                )}
              </>
            ) : (
              /* Result */
              <div>
                <div className="text-center mb-6">
                  <div className="text-5xl mb-3">🎉</div>
                  <h2 className="text-2xl font-black text-gray-800 mb-1">
                    診断結果
                  </h2>
                  <p className="text-gray-500 text-sm">
                    あなたにいちばんおすすめの回線はこちらです
                  </p>
                </div>

                {result && (
                  <div className="mb-6">
                    <RankingCard item={result} />
                  </div>
                )}

                <div className="bg-white rounded-2xl p-5 border border-gray-200 mb-6 text-sm text-gray-600">
                  <p className="font-bold text-gray-700 mb-2">📋 診断の根拠</p>
                  <ul className="space-y-1">
                    {Object.entries(answers).map(([key, val]) => {
                      const q = questions.find((q) => q.id === key);
                      const opt = q?.options.find((o) => o.value === val);
                      return (
                        <li key={key} className="flex items-center gap-2">
                          <span>{q?.emoji}</span>
                          <span>{q?.question}</span>
                          <span className="font-bold text-purple-600">
                            → {opt?.label}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={reset}
                    className="flex-1 border-2 border-gray-300 text-gray-600 font-bold py-3 rounded-2xl hover:bg-gray-50 transition-colors"
                  >
                    もう一度診断する
                  </button>
                  <Link
                    href="/ranking"
                    className="flex-1 bg-orange-400 hover:bg-orange-500 text-white font-black py-3 rounded-2xl text-center pop-btn transition-colors"
                  >
                    全ランキングを見る
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
