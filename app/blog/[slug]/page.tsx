import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import AlertBar from "@/components/AlertBar";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import ArticleBody from "@/components/ArticleBody";
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";
import {
  siteAlert,
  latestArticles,
  rankingItems,
  articleContents,
} from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

// 静的パス生成（ビルド時に全記事ページを生成）
export function generateStaticParams() {
  return latestArticles.map((a) => ({ slug: a.slug }));
}

// メタデータ生成
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = latestArticles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

const categoryColorClass = {
  orange: "bg-orange-100 text-orange-600",
  blue: "bg-blue-100 text-blue-600",
  green: "bg-green-100 text-green-600",
} as const;

const cardGradient = {
  orange: "from-orange-100 to-red-100",
  blue: "from-blue-100 to-indigo-100",
  green: "from-green-100 to-teal-100",
} as const;

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const article = latestArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  const content = articleContents[slug] ?? null;
  const relatedArticles = latestArticles.filter((a) => a.slug !== slug).slice(0, 2);
  const featuredItem = rankingItems[0];

  return (
    <>
      <Header />
      <AlertBar alert={siteAlert} />
      <main className="pb-20 md:pb-0">
        {/* Article hero */}
        <div
          className={`bg-gradient-to-br ${cardGradient[article.categoryColor]} py-12 px-4`}
        >
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-6xl block mb-4">{article.emoji}</span>
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColorClass[article.categoryColor]}`}
            >
              {article.category}
            </span>
            <h1 className="text-2xl font-black text-gray-800 mt-3 leading-tight">
              {article.title}
            </h1>
            <p className="text-gray-500 text-sm mt-3">{article.excerpt}</p>
            <div className="flex items-center justify-center gap-3 mt-4 text-xs text-gray-400">
              <span>📅 {article.publishedAt}</span>
              <span>·</span>
              <span>🔄 自動更新</span>
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="max-w-2xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-1 text-xs text-gray-400">
            <Link href="/" className="hover:text-orange-500 transition-colors">
              トップ
            </Link>
            <span>›</span>
            <Link
              href="/blog"
              className="hover:text-orange-500 transition-colors"
            >
              記事一覧
            </Link>
            <span>›</span>
            <span className="text-gray-600 truncate">{article.title}</span>
          </nav>
        </div>

        {/* Article body */}
        <div className="max-w-2xl mx-auto px-4 py-6">
          {content ? (
            <ArticleBody blocks={content} rankingItems={rankingItems} />
          ) : (
            <div className="bg-yellow-50 border-2 border-dashed border-yellow-300 rounded-2xl p-8 text-center">
              <span className="text-4xl block mb-3">🚧</span>
              <p className="text-gray-600 font-bold">この記事は準備中です</p>
              <p className="text-sm text-gray-400 mt-1">
                もうしばらくお待ちください
              </p>
            </div>
          )}
        </div>

        {/* Ranking CTA banner */}
        <div className="bg-orange-50 py-10 px-4 mt-4">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-bold text-gray-500 mb-2">
              📡 今月のおすすめ回線
            </p>
            <div className="bg-white rounded-3xl p-5 border-2 border-orange-200 inline-block w-full text-left">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <div className="text-lg font-black text-gray-800">
                    🥇 {featuredItem.name}
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {featuredItem.tags.map((tag) => (
                      <span
                        key={tag.text}
                        className="text-xs bg-orange-50 border border-orange-200 text-orange-700 px-2 py-0.5 rounded-full"
                      >
                        {tag.text}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={featuredItem.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="bg-orange-400 hover:bg-orange-500 text-white font-black px-6 py-3 rounded-2xl pop-btn text-sm whitespace-nowrap transition-colors"
                >
                  公式サイトを見る →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related articles */}
        {relatedArticles.length > 0 && (
          <div className="max-w-2xl mx-auto px-4 py-10">
            <h2 className="text-lg font-black text-gray-800 mb-4">
              📰 関連記事
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedArticles.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                href="/blog"
                className="text-orange-500 font-bold text-sm hover:underline"
              >
                記事一覧をもっと見る →
              </Link>
            </div>
          </div>
        )}
      </main>
      <Footer />
      <StickyBottomCTA featuredItem={featuredItem} />
    </>
  );
}
