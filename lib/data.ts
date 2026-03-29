import type { RankingItem, Article, SiteAlert, HeroStat, HowToStep, ContentBlock } from "./types";

// 記事本文データ（slug をキーとして管理）
// 自動生成パイプラインからはここに ContentBlock[] を流し込む
export const articleContents: Record<string, ContentBlock[]> = {
  "nuro-vs-au": [
    { type: "callout", emoji: "📌", text: "この記事は2026年3月時点の情報をもとに作成しています。最新のキャンペーン情報は各公式サイトをご確認ください。" },
    { type: "heading2", text: "NURO光とauひかり、結局どっちがいいの？" },
    { type: "paragraph", text: "光回線えらびで迷う組み合わせといえば「NURO光 vs auひかり」。どちらも人気が高く、甲乙つけがたいと感じる方も多いはず。この記事では料金・速度・サポートの3つの視点で徹底的に比較します。" },
    { type: "heading2", text: "料金比較" },
    { type: "paragraph", text: "月額料金だけで見るとauひかりがやや安め。ただしNURO光は工事費が無料になるキャンペーンを常時実施しており、初期費用を抑えられます。" },
    { type: "list", items: ["NURO光：月額5,200円〜（工事費無料キャンペーン中）", "auひかり：月額4,180円〜（auユーザーはさらに割引）", "2年間トータルで比較すると差額は数千円程度"] },
    { type: "ranking_cta", rankIndex: 0 },
    { type: "heading2", text: "速度比較" },
    { type: "paragraph", text: "速度面では NURO光が圧倒的。独自の2Gbps・10Gbpsプランを持ち、実測値でも他社を大きく上回るデータが出ています。auひかりも十分高速ですが、混雑時間帯に速度が落ちる報告が一部あります。" },
    { type: "list", items: ["NURO光 実測平均：897Mbps（下り）", "auひかり 実測平均：743Mbps（下り）", "動画・ゲームなど速度重視ならNURO光が有利"] },
    { type: "heading2", text: "こんな人にはNURO光がおすすめ" },
    { type: "list", items: ["とにかく速度を重視したい", "ゲームや4K動画を楽しむ", "ソニー系のサービスをよく使う"] },
    { type: "ranking_cta", rankIndex: 0 },
    { type: "heading2", text: "こんな人にはauひかりがおすすめ" },
    { type: "list", items: ["auまたはUQモバイルユーザー", "月額料金をできるだけ抑えたい", "スマホとのセット割を最大限活用したい"] },
    { type: "ranking_cta", rankIndex: 1 },
    { type: "callout", emoji: "✅", text: "迷ったらNURO光！速度・キャンペーン両面でトップクラス。auユーザーならauひかりも要チェックです。" },
  ],

  "hikari-beginners-guide": [
    { type: "callout", emoji: "👋", text: "光回線は初めて？難しい言葉は一切使わずに解説します。5分で読めます！" },
    { type: "heading2", text: "光回線ってそもそも何？" },
    { type: "paragraph", text: "光回線とは、光ファイバーというガラスでできた細いケーブルを使ってインターネットに接続する方法です。電気信号ではなく光の信号でデータを送るため、とても高速で安定しています。" },
    { type: "heading2", text: "光回線のメリット" },
    { type: "list", items: ["速度が速い（動画・ゲームもサクサク）", "通信が安定している（雨天でも速度が落ちにくい）", "データ容量が無制限（使い放題）", "月額料金が固定（使いすぎても料金が増えない）"] },
    { type: "heading2", text: "光回線のデメリット" },
    { type: "list", items: ["工事が必要（開通まで1〜2週間かかる）", "引越しのたびに手続きが必要", "エリア外だと使えない場合がある"] },
    { type: "heading2", text: "光回線の選び方 3つのポイント" },
    { type: "heading3", text: "① 住んでいる建物タイプを確認する" },
    { type: "paragraph", text: "一戸建てとマンションでは使える回線の種類が違います。マンションは建物に引かれている回線の種類に左右されることがあります。" },
    { type: "heading3", text: "② エリアを確認する" },
    { type: "paragraph", text: "光回線はエリア外だと使えません。各社の公式サイトで住所を入力してエリア確認ができます。" },
    { type: "heading3", text: "③ キャンペーンを活用する" },
    { type: "paragraph", text: "申し込みのタイミングでキャッシュバックや工事費無料などのキャンペーンが適用されることが多いです。今月のおすすめはこちら。" },
    { type: "ranking_cta", rankIndex: 0 },
    { type: "callout", emoji: "💡", text: "まずはエリア確認から！使えるかどうかを確かめてから申し込みましょう。" },
  ],

  "campaign-march-2026": [
    { type: "callout", emoji: "⏰", text: "このキャンペーン情報は2026年3月時点のものです。期間限定のため、お早めにご確認ください。" },
    { type: "heading2", text: "3月の光回線キャンペーンまとめ" },
    { type: "paragraph", text: "引越しシーズンには各社がお得なキャンペーンを実施しています。NURO光なら戸建て最大90,000円・マンション最大60,000円のキャッシュバックが受け取れます。" },
    { type: "heading2", text: "第1位：NURO光 キャッシュバック戸建て最大90,000円" },
    { type: "list", items: ["キャッシュバック：戸建て最大90,000円・マンション最大60,000円", "工事費：無料（通常44,000円）", "対象エリア：関東・関西・東海・九州など"] },
    { type: "ranking_cta", rankIndex: 0 },
    { type: "heading2", text: "第2位：auひかり 最大30,000円還元" },
    { type: "list", items: ["au PAY残高還元：最大30,000円", "auユーザーは毎月最大1,100円割引", "スマホとのセット申し込みでさらにお得", "キャンペーン期間：2026年3月末まで"] },
    { type: "ranking_cta", rankIndex: 1 },
    { type: "heading2", text: "第3位：ドコモ光 dポイント最大20,000pt" },
    { type: "list", items: ["dポイント付与：最大20,000pt", "ドコモユーザーはセット割で月額最大1,100円割引", "全国47都道府県で利用可能", "キャンペーン期間：2026年3月末まで"] },
    { type: "ranking_cta", rankIndex: 2 },
    { type: "callout", emoji: "🎁", text: "引越しが決まったら早めに申し込みを！工事の予約が混み合うため、最低2週間前の手続きをおすすめします。" },
  ],
};

// -------------------------------------------------------
// サイト全体のアラートバー
// -------------------------------------------------------
export const siteAlert: SiteAlert = {
  message: "🎉 今なら戸建て最大90,000円・マンション最大60,000円キャッシュバック実施中！",
  linkText: "詳細を見る",
  linkHref: "https://px.a8.net/svt/ejp?a8mat=2BJ8HV+6NXPKI+2VMU+64C3M",
};

// -------------------------------------------------------
// Heroセクション 統計情報
// -------------------------------------------------------
export const heroStats: HeroStat[] = [
  { value: "7", label: "比較回線", color: "text-blue-500" },
  { value: "毎月", label: "情報更新", color: "text-green-500" },
  { value: "無料", label: "診断サービス", color: "text-orange-500" },
];

// -------------------------------------------------------
// 回線のえらびかた ステップ
// -------------------------------------------------------
export const howToSteps: HowToStep[] = [
  {
    step: 1,
    emoji: "🏠",
    title: "住居タイプを確認",
    description: "一戸建て・マンションで使える回線が変わります",
    bgColor: "bg-orange-50",
    stepColor: "bg-orange-400",
  },
  {
    step: 2,
    emoji: "📍",
    title: "エリアをチェック",
    description: "お住まいのエリアで使える回線を絞り込みます",
    bgColor: "bg-blue-50",
    stepColor: "bg-blue-400",
  },
  {
    step: 3,
    emoji: "💰",
    title: "料金を比べる",
    description: "月額・工事費・キャンペーンを総合比較します",
    bgColor: "bg-green-50",
    stepColor: "bg-green-400",
  },
];

// -------------------------------------------------------
// ランキングデータ
// -------------------------------------------------------
export const rankingItems: RankingItem[] = [
  {
    rank: 1,
    name: "NURO光",
    label: "いちばんおすすめ！",
    description:
      "速度・価格・安定性ともにトップクラス。10Gbpsプランも選べます。",
    speed: "最大10Gbps",
    price: "月¥5,200〜",
    tags: [
      { text: "⚡ 最大10Gbps", variant: "cool" },
      { text: "💰 月¥5,200〜", variant: "green" },
      { text: "🎁 工事費無料", variant: "warm" },
    ],
    reward: { label: "戸建て最大", value: "90,000円" },
    affiliateUrl: "https://px.a8.net/svt/ejp?a8mat=2BJ8HV+6NXPKI+2VMU+64C3M",
    ctaColor: "bg-orange-400 hover:bg-orange-500",
    badgeGradient: "bg-yellow-400",
  },
  {
    rank: 2,
    name: "auひかり",
    label: "コスパ最強",
    description: "auユーザーなら毎月割引でさらにお得。全国エリアで安定した速度。",
    speed: "最大1Gbps",
    price: "月¥4,180〜",
    tags: [
      { text: "⚡ 最大1Gbps", variant: "cool" },
      { text: "💰 月¥4,180〜", variant: "green" },
      { text: "📱 au割引あり", variant: "warm" },
    ],
    reward: { label: "最大還元", value: "30,000円" },
    affiliateUrl: "https://px.a8.net/svt/ejp?a8mat=4AZQGO+12PAYI+50+64C3K1",
    ctaColor: "bg-blue-500 hover:bg-blue-600",
    badgeGradient: "bg-gray-500",
  },
  {
    rank: 3,
    name: "ドコモ光",
    label: "全国どこでも",
    description:
      "全国47都道府県対応。ドコモユーザーはセット割でさらにお得に。",
    speed: "最大1Gbps",
    price: "月¥4,400〜",
    tags: [
      { text: "⚡ 最大1Gbps", variant: "cool" },
      { text: "💰 月¥4,400〜", variant: "green" },
      { text: "🔴 dポイント付与", variant: "warm" },
    ],
    reward: { label: "dポイント", value: "20,000pt" },
    affiliateUrl: "https://px.a8.net/svt/ejp?a8mat=35HG13+B8UV82+50+556VPT",
    ctaColor: "bg-red-500 hover:bg-red-600",
    badgeGradient: "bg-amber-700",
  },
  {
    rank: 4,
    name: "J:COM光",
    label: "テレビもまとめて",
    description: "J:COM TVとのセット契約でさらにお得。ケーブルテレビ利用者におすすめ。",
    speed: "最大1Gbps",
    price: "月¥4,180〜",
    tags: [
      { text: "⚡ 最大1Gbps", variant: "cool" },
      { text: "💰 月¥4,180〜", variant: "green" },
      { text: "📺 TV同時契約割引", variant: "warm" },
    ],
    reward: { label: "工事費", value: "無料" },
    affiliateUrl: "#",
    ctaColor: "bg-purple-500 hover:bg-purple-600",
    badgeGradient: "bg-purple-500",
  },
  {
    rank: 5,
    name: "ソフトバンク光",
    label: "SBユーザーに最適",
    description: "ソフトバンク・ワイモバイルユーザーはセット割で毎月最大1,100円割引。",
    speed: "最大1Gbps",
    price: "月¥5,720〜",
    tags: [
      { text: "⚡ 最大1Gbps", variant: "cool" },
      { text: "💰 月¥5,720〜", variant: "green" },
      { text: "📱 SB/Y!mobile割引", variant: "warm" },
    ],
    reward: { label: "キャッシュバック", value: "最大40,000円" },
    affiliateUrl: "https://px.a8.net/svt/ejp?a8mat=4AZQGO+1U38SA+50+7418ZL",
    ctaColor: "bg-emerald-500 hover:bg-emerald-600",
    badgeGradient: "bg-emerald-500",
  },
  {
    rank: 6,
    name: "Biglobe光",
    label: "コスパ重視に",
    description: "月額料金が抑えめで初期費用も安い。シンプルに安く使いたい方向け。",
    speed: "最大1Gbps",
    price: "月¥3,610〜",
    tags: [
      { text: "⚡ 最大1Gbps", variant: "cool" },
      { text: "💰 月¥3,610〜", variant: "green" },
      { text: "🔵 低コスト", variant: "warm" },
    ],
    reward: { label: "キャッシュバック", value: "最大20,000円" },
    affiliateUrl: "https://px.a8.net/svt/ejp?a8mat=4AZR8P+CONLMI+B4+2NBPO2",
    ctaColor: "bg-cyan-500 hover:bg-cyan-600",
    badgeGradient: "bg-cyan-600",
  },
  {
    rank: 7,
    name: "フレッツ光",
    label: "NTT直営で安心",
    description: "NTT東日本・西日本が提供する回線。全国対応でプロバイダを自由に選べる。",
    speed: "最大10Gbps",
    price: "月¥3,410〜",
    tags: [
      { text: "⚡ 最大10Gbps", variant: "cool" },
      { text: "💰 月¥3,410〜", variant: "green" },
      { text: "🏢 NTT直営", variant: "warm" },
    ],
    reward: { label: "工事費", value: "無料キャンペーン有" },
    affiliateUrl: "https://px.a8.net/svt/ejp?a8mat=4AZR8P+D2CKJE+348K+1TLJFL",
    ctaColor: "bg-indigo-500 hover:bg-indigo-600",
    badgeGradient: "bg-indigo-500",
  },
];

// -------------------------------------------------------
// 最新記事
// -------------------------------------------------------
export const latestArticles: Article[] = [
  {
    slug: "nuro-vs-au",
    title: "NURO光とauひかり どっちがいい？2026年最新版",
    excerpt: "料金・速度・サポートの3項目で徹底比較！",
    category: "比較",
    categoryColor: "orange",
    emoji: "🔍",
    publishedAt: "2026-03-15",
  },
  {
    slug: "hikari-beginners-guide",
    title: "光回線って何？わかりやすく解説【2026年版】",
    excerpt: "はじめての方でも5分で理解できます",
    category: "初心者",
    categoryColor: "blue",
    emoji: "📚",
    publishedAt: "2026-03-14",
  },
  {
    slug: "campaign-march-2026",
    title: "【3月限定】光回線キャンペーンまとめ 2026",
    excerpt: "期間限定のお得情報をまとめました！",
    category: "お得情報",
    categoryColor: "green",
    emoji: "💸",
    publishedAt: "2026-03-13",
  },
];
