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
      { value: "softbank", label: "ソフトバンク / ワイモバイル", emoji: "🟡" },
      { value: "other", label: "その他 / 格安SIM", emoji: "⚪" },
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
  {
    id: "budget",
    question: "月額料金の目安はどのくらいですか？",
    emoji: "💰",
    options: [
      { value: "low", label: "できるだけ安く（〜4,000円）", emoji: "💚" },
      { value: "mid", label: "標準的でOK（4,000〜5,500円）", emoji: "💛" },
      { value: "high", label: "品質重視なら気にしない", emoji: "❤️" },
    ],
  },
  {
    id: "priority",
    question: "回線を選ぶ際の最優先事項は？",
    emoji: "🎯",
    options: [
      { value: "speed", label: "とにかく速度が速い", emoji: "⚡" },
      { value: "price", label: "月額料金が安い", emoji: "💴" },
      { value: "campaign", label: "キャッシュバックが多い", emoji: "🎁" },
      { value: "stability", label: "安定して繋がる", emoji: "🛡️" },
    ],
  },
];

function getRecommendation(answers: Record<string, Answer>) {
  const { smartphone, usage, budget, priority } = answers;

  // スマホキャリアとのセット割を最優先
  if (smartphone === "au") return { item: rankingItems[1], reason: "auスマホとのセット割で毎月最大1,100円お得になります。" };
  if (smartphone === "docomo") return { item: rankingItems[2], reason: "ドコモスマホとのセット割＋dポイントがたまります。" };
  if (smartphone === "softbank") return { item: rankingItems[4], reason: "ソフトバンクスマホとのセット割で毎月最大1,100円割引されます。" };

  // 速度・ゲーム重視
  if (usage === "game" || priority === "speed") return { item: rankingItems[0], reason: "実測平均897Mbpsと業界トップクラスの速度でゲームや配信に最適です。" };

  // コスパ重視
  if (budget === "low" || priority === "price") return { item: rankingItems[5], reason: "月額3,610円〜と業界最安水準でコスパ重視の方に最適です。" };

  // キャッシュバック重視
  if (priority === "campaign") return { item: rankingItems[0], reason: "戸建て最大90,000円・マンション最大60,000円のキャッシュバックが受け取れます。" };

  // テレワーク・安定性重視
  if (usage === "work" || priority === "stability") return { item: rankingItems[0], reason: "独自回線で混雑しにくく、テレワークのビデオ会議も安定して快適です。" };

  // デフォルト
  return { item: rankingItems[0], reason: "速度・キャンペーン・安定性のすべてにおいてトップクラスでおすすめです。" };
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
              ✨ 無料・5問だけ
            </p>
            <h1 className="text-3xl font-black mb-2">
              🔍 あなたにぴったりの回線診断
            </h1>
            <p className="text-sm opacity-90">
              5つの質問に答えるだけで最適な回線がわかります
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
                  <>
                    <div className="mb-4">
                      <RankingCard item={result.item} />
                    </div>
                    {/* おすすめ理由 */}
                    <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 mb-6">
                      <p className="text-sm font-bold text-purple-700 mb-1">💡 おすすめの理由</p>
                      <p className="text-sm text-gray-700">{result.reason}</p>
                    </div>
                    {/* 直接アフィリエイトCTA */}
                    <Link
                      href={result.item.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className={`block text-white font-black text-center py-4 rounded-2xl pop-btn text-lg shadow-md mb-4 transition-colors ${result.item.ctaColor}`}
                    >
                      {result.item.name}の公式サイトを見る →
                    </Link>
                  </>
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
