import type { Metadata } from "next";
import Header from "@/components/Header";
import AlertBar from "@/components/AlertBar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { siteAlert, latestArticles } from "@/lib/data";

export const metadata: Metadata = {
  title: "記事一覧",
  description:
    "光回線の比較・ランキング・お得情報・初心者向け解説など、インターネット回線に関する記事をまとめています。",
};

const allCategories = ["すべて", ...Array.from(new Set(latestArticles.map((a) => a.category)))];

export default function BlogPage() {
  return (
    <>
      <Header />
      <AlertBar alert={siteAlert} />
      <main>
        {/* Page Hero */}
        <section className="bg-gradient-to-br from-gray-700 to-gray-900 text-white py-10 px-4 text-center">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm font-bold bg-white/20 inline-block px-3 py-1 rounded-full mb-3">
              📰 全記事
            </p>
            <h1 className="text-3xl font-black mb-2">記事一覧</h1>
            <p className="text-sm opacity-75">
              光回線の比較・お得情報・初心者ガイドをまとめています
            </p>
          </div>
        </section>

        <section className="py-10 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            {/* Category filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {allCategories.map((cat) => (
                <span
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-bold cursor-pointer transition-colors ${
                    cat === "すべて"
                      ? "bg-gray-800 text-white"
                      : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>

            {/* Article grid */}
            {latestArticles.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {latestArticles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-gray-400">
                <span className="text-5xl block mb-3">📭</span>
                <p className="font-bold">記事はまだありません</p>
              </div>
            )}

            <p className="text-center text-xs text-gray-400 mt-10">
              全 {latestArticles.length} 件
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
