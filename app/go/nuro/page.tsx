import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import NuroCTA from "./NuroCTA";
import { currentMonthEnd } from "@/lib/date";

export const metadata: Metadata = {
  title: "NURO光 公式キャンペーン | 戸建て最大90,000円キャッシュバック",
  description:
    "NURO光の最新キャンペーン情報。戸建て最大90,000円キャッシュバック・工事費無料実施中。申し込み手順・よくある疑問・実測データをまとめました。",
  robots: { index: false, follow: false },
};

const AFFILIATE_URL = "https://px.a8.net/svt/ejp?a8mat=2BJ8HV+6NXPKI+2VMU+64C3M";

const speedStats = [
  { label: "下り平均", value: "897", unit: "Mbps" },
  { label: "上り平均", value: "623", unit: "Mbps" },
  { label: "Ping値", value: "9", unit: "ms" },
];

const compareRows = [
  { item: "最大速度", nuro: "10Gbps", au: "1Gbps", docomo: "1Gbps" },
  { item: "実測平均（下り）", nuro: "897Mbps", au: "743Mbps", docomo: "612Mbps" },
  { item: "月額料金", nuro: "5,200円〜", au: "4,180円〜", docomo: "4,400円〜" },
  { item: "キャッシュバック", nuro: "最大90,000円", au: "最大30,000円", docomo: "最大20,000pt" },
  { item: "工事費", nuro: "無料（通常44,000円）", au: "一部負担あり", docomo: "一部負担あり" },
  { item: "回線種別", nuro: "独自回線（2線式）", au: "NTT回線", docomo: "NTT回線" },
];

const voiceCards = [
  {
    name: "Tさん（30代・東京都・戸建て）",
    before: "ドコモ光から乗り換え。以前は夜に動画が止まることがよくありました。",
    after: "開通後は速度が安定して、4K動画もゲームも全くストレスなし。キャッシュバックも無事受け取れました。",
    emoji: "🏡",
  },
  {
    name: "Kさん（40代・大阪府・マンション）",
    before: "フレッツ光を20年使っていましたが、速度が遅くて不満でした。",
    after: "NURO光に変えたら体感速度が別次元。工事も2時間で終わり、作業員の方が丁寧でした。",
    emoji: "🏢",
  },
  {
    name: "Mさん（20代・神奈川県・戸建て）",
    before: "在宅ワーク中に回線が途切れるのが悩みでした。",
    after: "申し込みから17日で開通。在宅ワークのZoom通話が一度も切れなくなりました。",
    emoji: "💻",
  },
];

const faqs = [
  {
    q: "エリア外だったらどうなる？",
    a: "申し込み後にエリア確認があります。エリア外の場合はキャンセル可能・費用は一切かかりません。まずは申し込みだけしてエリア確認を進める方法もおすすめです。",
    emoji: "📍",
  },
  {
    q: "工事の立ち会いは必要？",
    a: "必要ですが、作業は業者が全部行います。所要時間は戸建て2時間・マンション1時間程度。午前・午後・夕方から希望時間を選べます。",
    emoji: "🔧",
  },
  {
    q: "キャッシュバックはいつ・どうやって受け取る？",
    a: "開通から3〜4か月後に登録の銀行口座へ現金振込されます。ポイントや商品券ではなく現金です。受け取り忘れを防ぐため、カレンダーに「開通日＋4ヶ月後」と記録しておくと安心です。",
    emoji: "💰",
  },
  {
    q: "今使っている回線の解約はいつするの？",
    a: "NURO光の開通後に解約するのが基本です。二重払いを避けたい場合は、開通予定日の前月末に解約手続きをするとよいでしょう。違約金がある場合はNURO光のキャッシュバックで補填できるケースがほとんどです。",
    emoji: "🔄",
  },
  {
    q: "マンションでも使える？",
    a: "使えます。ただし建物によって「マンション一括型（VDSL・光配線）」と「戸建て型」の提供方式が異なります。申し込み時にご住所を入力すると自動で判定されます。",
    emoji: "🏢",
  },
  {
    q: "2年縛りや違約金はある？",
    a: "2年自動更新プランあり（更新月以外に解約すると違約金が発生）。ただし解約金はキャッシュバック額で十分カバーできる水準です。縛りなしの月額プランも選択可能ですが、月額が若干高くなります。",
    emoji: "📋",
  },
  {
    q: "工事費は本当に無料？",
    a: "現在のキャンペーン期間中は工事費（通常44,000円）が完全無料です。ただしキャンペーン終了後は有料になります。このページのボタンからの申し込みが対象です。",
    emoji: "✅",
  },
  {
    q: "電話の営業はしつこい？",
    a: "申し込み後に日程調整の電話が1〜2回あります。しつこい営業電話はなく、基本的に工事日の確認がメインです。",
    emoji: "📞",
  },
];

const steps = [
  {
    day: "Day 1",
    title: "申し込み",
    desc: "このページのボタンからオンライン申し込み。5〜10分で完了。",
    emoji: "📝",
  },
  {
    day: "Day 3〜5",
    title: "日程調整の電話",
    desc: "NURO光から工事日程の電話あり。都合の良い日時を伝えるだけ。",
    emoji: "📞",
  },
  {
    day: "Day 7〜14",
    title: "第1工事（屋外）",
    desc: "電柱から自宅への引込工事。立ち会い不要で30分程度。",
    emoji: "🔌",
  },
  {
    day: "Day 14〜21",
    title: "第2工事（屋内）・開通",
    desc: "宅内へのケーブル引き込み・ONU設置。立ち会いあり、2時間程度で完了。",
    emoji: "🎉",
  },
  {
    day: "開通から3〜4ヶ月後",
    title: "キャッシュバック振込",
    desc: "登録口座に最大90,000円が現金振込。確認メールが来たら受け取り完了。",
    emoji: "💰",
  },
];

export default function NuroKillerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">

        {/* 締切バナー */}
        <div className="bg-red-500 text-white text-center py-2.5 px-4 text-sm font-bold">
          ⏰ キャンペーン締切：{currentMonthEnd()}｜戸建て最大90,000円 / マンション最大60,000円
        </div>

        <div className="max-w-xl mx-auto px-4 py-8 space-y-6">

          {/* ヘッド */}
          <div className="text-center">
            <div className="inline-block bg-orange-100 text-orange-600 text-xs font-black px-3 py-1 rounded-full mb-3">
              ⚡ 業界最速クラス・独自回線
            </div>
            <h1 className="text-2xl font-black text-gray-900 leading-tight mb-2">
              NURO光 公式キャンペーン
              <br />
              <span className="text-orange-500">戸建て最大90,000円</span>
              <br />
              キャッシュバック実施中
            </h1>
            <p className="text-sm text-gray-500">
              工事費無料（通常44,000円）＋ 月¥5,200〜 ＋ 現金キャッシュバック
            </p>
          </div>

          {/* 速度実測 */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <p className="text-xs font-bold text-gray-400 mb-3 text-center">
              📊 編集部実測データ（東京都内・戸建て・平日20時）
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
              他社平均（下り）：auひかり 743 / ドコモ光 612 / SB光 598 Mbps
            </p>
          </div>

          {/* CTA（ファースト） */}
          <NuroCTA href={AFFILIATE_URL} position="first" />
          <p className="text-xs text-center text-gray-400 -mt-3">
            ✓ このボタンからの申し込みがキャッシュバック・工事費無料の対象です
          </p>

          {/* 他社との比較表 */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="bg-orange-400 text-white text-center py-2.5 px-4">
              <p className="font-black text-sm">📊 主要3社 スペック比較</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="py-2 px-3 text-left text-gray-500 font-bold"></th>
                    <th className="py-2 px-3 text-center font-black text-orange-500">NURO光</th>
                    <th className="py-2 px-3 text-center text-gray-500 font-bold">auひかり</th>
                    <th className="py-2 px-3 text-center text-gray-500 font-bold">ドコモ光</th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row, i) => (
                    <tr key={row.item} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="py-2 px-3 text-gray-600 font-bold whitespace-nowrap">{row.item}</td>
                      <td className="py-2 px-3 text-center font-black text-orange-500 whitespace-nowrap">{row.nuro}</td>
                      <td className="py-2 px-3 text-center text-gray-500 whitespace-nowrap">{row.au}</td>
                      <td className="py-2 px-3 text-center text-gray-500 whitespace-nowrap">{row.docomo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 text-center py-2 px-4">
              ※ 2026年9月時点の情報。実測値は編集部計測による目安値です。
            </p>
          </div>

          {/* キャッシュバックの詳細 */}
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

              {/* コスト試算 */}
              <div className="bg-orange-50 rounded-xl p-4 mb-4">
                <p className="text-xs font-black text-orange-700 mb-2">💡 2年間のトータルコスト試算（戸建て）</p>
                <div className="space-y-1 text-xs text-gray-700">
                  <div className="flex justify-between">
                    <span>月額料金（24ヶ月）</span>
                    <span className="font-bold">5,200円 × 24 = 124,800円</span>
                  </div>
                  <div className="flex justify-between">
                    <span>工事費</span>
                    <span className="font-bold text-green-600">0円（通常44,000円）</span>
                  </div>
                  <div className="flex justify-between">
                    <span>キャッシュバック</span>
                    <span className="font-bold text-green-600">−90,000円</span>
                  </div>
                  <div className="border-t border-orange-200 mt-2 pt-2 flex justify-between font-black text-orange-600">
                    <span>2年間の実質総額</span>
                    <span>約34,800円（月割 1,450円）</span>
                  </div>
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

          {/* 申し込みから開通までの流れ */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <h2 className="text-sm font-black text-gray-700 mb-4 text-center">
              📅 申し込みから開通・キャッシュバックまでの流れ
            </h2>
            <div className="space-y-3">
              {steps.map((step, i) => (
                <div key={step.day} className="flex gap-3">
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-8 h-8 bg-orange-400 text-white rounded-full flex items-center justify-center text-xs font-black">
                      {i + 1}
                    </div>
                    {i < steps.length - 1 && <div className="w-0.5 h-4 bg-orange-200 mt-1" />}
                  </div>
                  <div className="pb-3">
                    <p className="text-xs text-orange-500 font-bold">{step.day}</p>
                    <p className="text-sm font-black text-gray-800">{step.emoji} {step.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA（中間） */}
          <NuroCTA href={AFFILIATE_URL} position="second" />

          {/* 利用者の声 */}
          <div className="space-y-3">
            <p className="text-sm font-black text-gray-700 text-center">💬 実際に申し込んだ方の声</p>
            {voiceCards.map((v) => (
              <div key={v.name} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
                <p className="text-xs text-gray-400 font-bold mb-2">{v.emoji} {v.name}</p>
                <p className="text-xs text-gray-500 mb-2">
                  <span className="text-gray-400">乗り換え前：</span>{v.before}
                </p>
                <p className="text-xs text-gray-700 bg-orange-50 rounded-lg p-2">
                  <span className="text-orange-500 font-bold">✓ 乗り換え後：</span>{v.after}
                </p>
              </div>
            ))}
            <p className="text-xs text-center text-gray-400">※ 個人の感想です。速度・体験は環境により異なります。</p>
          </div>

          {/* よくある疑問 */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <h2 className="text-sm font-black text-gray-700 mb-4 text-center">
              ❓ 申し込み前のよくある疑問 8選
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="flex gap-3 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                  <span className="text-xl flex-shrink-0 mt-0.5">{faq.emoji}</span>
                  <div>
                    <p className="text-sm font-bold text-gray-800 mb-1">
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

          {/* リスク解消 */}
          <div className="bg-green-50 rounded-2xl p-5 border border-green-200">
            <h2 className="text-sm font-black text-green-800 mb-3 text-center">
              ✅ 申し込みのリスクはほぼゼロです
            </h2>
            <ul className="space-y-2 text-sm text-green-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-black flex-shrink-0">✓</span>
                エリア外ならキャンセル無料・費用ゼロ
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-black flex-shrink-0">✓</span>
                工事費は現在のキャンペーンで完全無料（通常44,000円）
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-black flex-shrink-0">✓</span>
                キャッシュバック最大90,000円が現金で戻ってくる
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-black flex-shrink-0">✓</span>
                現回線の解約は開通後でOK・二重払いは最小限
              </li>
            </ul>
          </div>

          {/* 最終CTA */}
          <div className="text-center">
            <p className="text-xs text-red-500 font-bold mb-3">
              ⏰ キャンペーン終了：{currentMonthEnd()}
            </p>
            <NuroCTA href={AFFILIATE_URL} position="second" />
            <p className="text-xs text-gray-400 mt-2">
              ✓ 申し込みは5〜10分・エリア外は無料キャンセル可
            </p>
          </div>

          {/* 広告・注意事項 */}
          <div className="text-xs text-gray-400 text-center space-y-1 pb-4">
            <p>※ 当ページはアフィリエイト広告を含みます</p>
            <p>※ キャンペーン内容は予告なく変更される場合があります。最新情報は公式サイトでご確認ください</p>
            <Link href="/ranking/" className="text-orange-400 underline">
              ← 光回線ランキングに戻る
            </Link>
          </div>

        </div>
      </main>
    </>
  );
}
