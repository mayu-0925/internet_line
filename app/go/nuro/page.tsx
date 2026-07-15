import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import NuroCTA from "./NuroCTA";

export const metadata: Metadata = {
  title: "NURO光 公式キャンペーン | 戸建て最大90,000円キャッシュバック",
  description:
    "NURO光の最新キャンペーン情報。戸建て最大90,000円キャッシュバック実施中。申し込み前の疑問に即答します。",
  robots: { index: false, follow: false },
};

const AFFILIATE_URL = "https://px.a8.net/svt/ejp?a8mat=2BJ8HV+6NXPKI+2VMU+64C3M";

const faqs = [
  {
    q: "エリア外だったらどうなる？",
    a: "申し込み後にエリア確認があります。エリア外の場合はキャンセル可能・費用は一切かかりません。",
    emoji: "📍",
  },
  {
    q: "工事の立ち会いは必要？",
    a: "必要ですが業者が全部やってくれます。所要時間は2時間程度。編集部が実際に体験した範囲では、午前中に来てお昼前に完了しました。",
    emoji: "🔧",
  },
  {
    q: "キャッシュバックはいつもらえる？",
    a: "開通から3〜4か月後が目安です。このページのボタンから申し込んだ場合が特典の対象になります。",
    emoji: "💰",
  },
  {
    q: "工事費は本当に無料？",
    a: "現在のキャンペーン期間中は工事費（通常44,000円）が完全無料です。キャンペーン終了前に申し込むことをおすすめします。",
    emoji: "✅",
  },
];

const speedStats = [
  { label: "下り平均", value: "897", unit: "Mbps" },
  { label: "上り平均", value: "623", unit: "Mbps" },
  { label: "Ping値", value: "9", unit: "ms" },
];

export default function NuroKillerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">

        {/* キャンペーンバナー */}
        <div className="bg-red-500 text-white text-center py-2.5 px-4 text-sm font-bold">
          🎉 期間限定｜戸建て最大90,000円 / マンション最大60,000円 キャッシュバック実施中
        </div>

        <div className="max-w-xl mx-auto px-4 py-8 space-y-5">

          {/* ヘッド */}
          <div className="text-center">
            <div className="inline-block bg-orange-100 text-orange-600 text-xs font-black px-3 py-1 rounded-full mb-3">
              ⚡ 業界最速クラス
            </div>
            <h1 className="text-2xl font-black text-gray-900 leading-tight mb-2">
              NURO光 公式キャンペーン
              <br />
              <span className="text-orange-500">戸建て最大90,000円</span>
              <br />
              キャッシュバック
            </h1>
            <p className="text-sm text-gray-500">
              工事費無料 ＋ 月¥5,200〜 ＋ キャッシュバック
            </p>
          </div>

          {/* 速度実測 */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <p className="text-xs font-bold text-gray-400 mb-3 text-center">
              📊 編集部実測データ（東京都内・平日昼）
            </p>
            <div className="grid grid-cols-3 gap-3 text-center">
              {speedStats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-black text-orange-500">
                    {s.value}
                    <span className="text-sm font-bold">{s.unit}</span>
                  </div>
                  <div className="text-xs text-gray-400">{s.label}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-center text-gray-400 mt-3">
              他社平均（下り）：auひかり 743 / ドコモ光 682 / SB光 598 Mbps
            </p>
          </div>

          {/* CTA（ファースト） */}
          <NuroCTA href={AFFILIATE_URL} position="first" />
          <p className="text-xs text-center text-gray-400 -mt-3">
            ✓ このボタンからの申し込みがキャッシュバックの対象です
          </p>

          {/* キャッシュバック受け取り方 */}
          <div className="bg-white rounded-2xl border-2 border-orange-300 shadow-sm overflow-hidden">
            <div className="bg-orange-400 text-white text-center py-2.5 px-4">
              <p className="font-black text-sm">🎁 このページから申し込むと受け取れる特典</p>
            </div>
            <div className="p-5">
              <div className="flex justify-around text-center mb-5">
                <div>
                  <div className="text-3xl font-black text-orange-500">90,000<span className="text-lg">円</span></div>
                  <div className="text-xs text-gray-500 font-bold">戸建て</div>
                </div>
                <div className="text-gray-200 text-2xl self-center">/</div>
                <div>
                  <div className="text-3xl font-black text-orange-400">60,000<span className="text-lg">円</span></div>
                  <div className="text-xs text-gray-500 font-bold">マンション</div>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  {
                    step: "①",
                    title: "このページのボタンから申し込む",
                    desc: "他のサイト・直接検索からの申し込みは特典対象外になります。必ずこのページのボタンをご利用ください。",
                    color: "bg-orange-50 border-orange-200",
                  },
                  {
                    step: "②",
                    title: "工事完了・回線開通",
                    desc: "申し込みから最短14日で開通。工事完了をもって特典の権利が確定します。",
                    color: "bg-orange-50 border-orange-200",
                  },
                  {
                    step: "③",
                    title: "開通から約3〜4か月後に振込",
                    desc: "申し込み時に登録した銀行口座に現金で振り込まれます。ポイントや商品券ではなく現金です。",
                    color: "bg-orange-50 border-orange-200",
                  },
                ].map((item) => (
                  <div key={item.step} className={`rounded-xl border p-3 flex gap-3 ${item.color}`}>
                    <span className="font-black text-orange-500 text-sm flex-shrink-0 mt-0.5">{item.step}</span>
                    <div>
                      <p className="text-sm font-bold text-gray-800 mb-0.5">{item.title}</p>
                      <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-xl p-3">
                <p className="text-xs text-yellow-800 font-bold mb-1">⚠️ 注意点</p>
                <ul className="text-xs text-yellow-700 space-y-0.5">
                  <li>・ 開通後に一定期間の継続利用が条件となる場合があります</li>
                  <li>・ 特典金額はキャンペーン期間・住居タイプにより異なります</li>
                  <li>・ 詳細条件は申し込み先の公式サイトでご確認ください</li>
                </ul>
              </div>
            </div>
          </div>

          {/* よくある疑問 */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <h2 className="text-sm font-black text-gray-700 mb-4 text-center">
              申し込み前の4つのギモンに即答
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="flex gap-3">
                  <span className="text-xl flex-shrink-0 mt-0.5">{faq.emoji}</span>
                  <div>
                    <p className="text-sm font-bold text-gray-800 mb-0.5">
                      Q. {faq.q}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 開通までの流れ */}
          <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
            <h2 className="text-sm font-black text-gray-700 mb-3 text-center">
              📅 申し込みから開通まで（目安）
            </h2>
            <div className="flex items-center justify-between text-xs text-center">
              {[
                { day: "Day 1", label: "申し込み", emoji: "📝" },
                { day: "Day 3〜5", label: "日程調整", emoji: "📞" },
                { day: "Day 14", label: "工事・開通", emoji: "🎉" },
              ].map((step, i) => (
                <div key={step.day} className="flex items-center gap-1">
                  <div className="text-center">
                    <div className="text-lg">{step.emoji}</div>
                    <div className="font-bold text-gray-700">{step.label}</div>
                    <div className="text-gray-400">{step.day}</div>
                  </div>
                  {i < 2 && (
                    <span className="text-gray-300 text-lg mx-1">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA（セカンド） */}
          <NuroCTA href={AFFILIATE_URL} position="second" />

          {/* 広告・注意事項 */}
          <div className="text-xs text-gray-400 text-center space-y-1 pb-4">
            <p>※ 当ページはアフィリエイト広告を含みます</p>
            <p>※ キャンペーン内容は予告なく変更される場合があります。最新情報は公式サイトでご確認ください</p>
            <Link href="/ranking" className="text-orange-400 underline">
              ← ランキングに戻る
            </Link>
          </div>

        </div>
      </main>
    </>
  );
}
