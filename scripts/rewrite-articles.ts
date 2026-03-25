/**
 * 既存記事リライトスクリプト
 * 使い方: npx tsx scripts/rewrite-articles.ts
 * 特定の記事のみ: npx tsx scripts/rewrite-articles.ts nuro-vs-au
 */

import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const ARTICLES_DIR = path.join(process.cwd(), "content/articles");

const SYSTEM_PROMPT = `あなたはインターネット回線業界に10年以上携わる専門家です。
光回線・home5G・モバイルWiFiの技術仕様・料金体系・各社の強み弱みを熟知しており、
読者が最適な回線を選べるよう、正確でわかりやすい情報を提供します。

【ターゲット読者】
インターネット回線の新規契約・乗り換えを具体的に検討しているユーザー。
すでに「契約しよう」という意思があり、「どの回線にするか」を決める段階にある。

【ライティング方針】
- 読者はすでに契約意思がある前提で書く
- 専門用語には必ずわかりやすい補足を入れる
- 断定的な表現で背中を押す（「〜と思います」ではなく「〜です」「〜をおすすめします」）
- 「申し込まない理由をなくす」構成にする
- 事実と根拠をセットで書く（「速い」ではなく「実測平均897Mbpsで業界トップクラス」）
- 緊急性・限定性を自然に盛り込む（「今月のキャンペーン」「期間限定」など）
- 「〜しましょう！」「〜ですね！」など過剰なフレンドリー表現を避ける
- 「この記事では〜」「筆者が〜」などAIらしい前置きを使わない
- 自然な人間のライターが書いたような、読みやすく簡潔な文体にする
- 箇条書きの先頭に「・」「•」「-」などの記号を使わない（itemsの配列に入れるだけでよい）

【テキスト装飾ルール】
- paragraph と list の text で以下の記法を積極的に使い、読みやすさを高める
  - **テキスト** → 太字（重要な数値・サービス名・結論などに使う。1段落に1〜3箇所）
  - ==テキスト== → 黄色マーカー（最も強調したいキーフレーズに使う。1段落に0〜1箇所）
- heading2 / heading3 / callout / table / bar_chart のテキストには装飾記法を使わない

【SEO・LLMO方針】
- 記事タイトルと各見出しにターゲットキーワードを自然に含める
- 「結論→理由→根拠→補足」の順で書く
- 各セクションの冒頭1〜2文で要点をまとめる
- 数値・固有名詞・比較データを積極的に使う
- FAQは「Q:〜 A:〜」形式で明確に書く

【アフィリエイト方針】
- 記事全体を通じてNURO光が最良の選択であることを自然かつ力強く訴求する
- CTAは記事の序盤・中盤・末尾の3箇所に配置する
- 「今月限定のキャンペーンを見逃すな」という緊急性をCTA付近に必ず入れる
- まとめでは「迷っているならNURO光一択」と明確にクロージングする`;

function buildRewritePrompt(article: Record<string, unknown>, today: string): string {
  return `以下の既存記事を、最新のライティング方針に従ってリライトしてください。

【既存記事のslug・title・excerptを参考にして、同じテーマで書き直す】
slug: ${article.slug}
title: ${article.title}
excerpt: ${article.excerpt}
category: ${article.category}

【リライトの重点事項】
- paragraph と list に **太字** と ==マーカー== を積極的に使い、読みやすさを高める
- AIっぽい表現・Markdown記法の誤使用を排除する
- 「結論→理由→根拠→補足」の構成で書き直す
- CTAを序盤・中盤・末尾の3箇所に配置する
- 必要な場合のみ table または bar_chart を使う（すべての記事に入れる必要はない）

【推奨する回線（アフィリエイト誘導先）】
- 第1位：NURO光（最優先で推奨・rankIndex: 0）
- 第2位：auひかり（rankIndex: 1）
- 第3位：ドコモ光（rankIndex: 2）

【記事構成の必須要件】
1. 冒頭に「この記事でわかること」をcalloutブロックで提示
2. 序盤（導入後）に ranking_cta（rankIndex: 0）を1回挿入
3. 本文中盤に ranking_cta（rankIndex: 0 or 1）を1〜2回挿入
4. 末尾のまとめの直前に ranking_cta（rankIndex: 0）を挿入
5. まとめセクションでNURO光への申し込みを自然にクロージング

【出力形式】
以下のJSON形式のみで出力してください。コードブロック(\`\`\`json)で囲むこと。

{
  "slug": "${article.slug}",
  "title": "記事タイトル（32文字以内・キーワードを含む）",
  "excerpt": "記事の要約（60文字以内）",
  "category": "${article.category}",
  "categoryColor": "${article.categoryColor}",
  "emoji": "${article.emoji}",
  "publishedAt": "${today}",
  "content": [
    { "type": "callout", "emoji": "絵文字", "text": "この記事でわかること" },
    { "type": "heading2", "text": "見出し" },
    { "type": "paragraph", "text": "本文（**太字** や ==マーカー== を活用）" },
    { "type": "list", "items": ["箇条書き（**太字** や ==マーカー== を活用）"] },
    { "type": "ranking_cta", "rankIndex": 0 },
    { "type": "table", "headers": ["項目", "NURO光", "auひかり", "ドコモ光"], "rows": [["月額料金", "5,200円〜", "4,180円〜", "4,400円〜"]] },
    { "type": "bar_chart", "title": "速度比較", "items": [{ "label": "NURO光", "value": 897, "unit": "Mbps", "color": "bg-orange-400" }] }
  ]
}

【表・グラフの使用ガイドライン】
- table と bar_chart は必要な記事にだけ使う（すべての記事に入れる必要はない）
- 複数の回線を料金・速度・エリアなどで比較する記事には table が効果的
- 数値の大小を視覚的に見せたい場合のみ bar_chart を使う
- bar_chart の color には bg-orange-400 / bg-blue-400 / bg-red-400 / bg-green-400 / bg-gray-400 を使う
- 使う場合は1記事につき合計1〜2個まで`;
}

async function rewriteArticle(filePath: string): Promise<void> {
  const raw = fs.readFileSync(filePath, "utf-8");
  const article = JSON.parse(raw);
  const today = new Date().toISOString().split("T")[0];

  console.log(`✏️  リライト中: ${article.title}`);

  const response = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 8192,
    system: SYSTEM_PROMPT,
    messages: [{ role: "user", content: buildRewritePrompt(article, today) }],
  });

  const text = response.content[0].type === "text" ? response.content[0].text : "";
  const match = text.match(/```json\n([\s\S]*?)\n```/);
  if (!match) {
    console.error(`  ❌ JSONの抽出に失敗: ${article.slug}\n`, text.slice(0, 200));
    return;
  }

  const rewritten = JSON.parse(match[1]);
  // slugは変えない
  rewritten.slug = article.slug;

  fs.writeFileSync(filePath, JSON.stringify(rewritten, null, 2), "utf-8");
  console.log(`  ✅ 完了: ${rewritten.title}`);
}

async function main(): Promise<void> {
  const targetSlug = process.argv[2];

  const files = fs.readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => path.join(ARTICLES_DIR, f));

  const targets = targetSlug
    ? files.filter((f) => path.basename(f, ".json") === targetSlug)
    : files;

  if (targets.length === 0) {
    console.error(`対象記事が見つかりません: ${targetSlug}`);
    process.exit(1);
  }

  console.log(`📚 ${targets.length}件の記事をリライトします\n`);

  for (const file of targets) {
    await rewriteArticle(file);
    // API レート制限対策
    if (targets.length > 1) await new Promise((r) => setTimeout(r, 2000));
  }

  console.log("\n🎉 全記事のリライトが完了しました");
}

main().catch((err) => {
  console.error("エラー:", err);
  process.exit(1);
});
