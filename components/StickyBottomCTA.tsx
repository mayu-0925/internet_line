import Link from "next/link";
import type { RankingItem } from "@/lib/types";

type Props = {
  featuredItem: RankingItem;
};

export default function StickyBottomCTA({ featuredItem }: Props) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-orange-200 py-3 px-4 md:hidden">
      <Link
        href={featuredItem.affiliateUrl}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="block bg-orange-400 hover:bg-orange-500 text-white text-center font-black py-3 rounded-2xl pop-btn transition-colors"
      >
        無料で回線診断する ✨
      </Link>
    </div>
  );
}
