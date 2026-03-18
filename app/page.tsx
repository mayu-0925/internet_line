import AlertBar from "@/components/AlertBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowToChoose from "@/components/HowToChoose";
import RankingSection from "@/components/RankingSection";
import LatestArticles from "@/components/LatestArticles";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";

import {
  siteAlert,
  heroStats,
  howToSteps,
  rankingItems,
  latestArticles,
} from "@/lib/data";

export default function Home() {
  const featuredItem = rankingItems[0];

  return (
    <>
      <Header />
      <AlertBar alert={siteAlert} />
      <main>
        <HeroSection stats={heroStats} featuredItem={featuredItem} />
        <HowToChoose steps={howToSteps} />
        <RankingSection items={rankingItems} />
        <LatestArticles articles={latestArticles} />
      </main>
      <Footer />
      <StickyBottomCTA featuredItem={featuredItem} />
    </>
  );
}
