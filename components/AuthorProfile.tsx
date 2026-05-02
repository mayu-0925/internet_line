export default function AuthorProfile() {
  return (
    <div className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-2xl p-4 mt-8">
      <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-2xl">
        📡
      </div>
      <div>
        <p className="text-sm font-black text-gray-800">ネットえらびナビ編集部</p>
        <p className="text-xs text-gray-500 mt-0.5">
          光回線の調査・比較を専門とする編集チーム。実際に各サービスへの申し込み・速度計測・問い合わせ検証を行い、リアルな体験に基づいた情報を発信しています。監修にはインターネット回線業界10年以上の専門家が参加しています。
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {["実際に申し込み済み", "速度実測あり", "毎月情報更新"].map((badge) => (
            <span key={badge} className="text-xs bg-orange-50 border border-orange-200 text-orange-600 px-2 py-0.5 rounded-full font-bold">
              ✓ {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
