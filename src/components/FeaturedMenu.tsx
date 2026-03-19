import Link from "next/link";
import Image from "next/image";
import { menuCategories } from "@/lib/menu-data";
import { whatsappOrderUrl } from "@/lib/contact";
import type { MenuCategory, MenuItem } from "@/lib/menu-data";

function FeaturedCard({ item, category }: { item: MenuItem; category: MenuCategory }) {
  const imagePath = item.image ? `/${item.image}` : category.image || "/Restaurant.jpg";

  return (
    <article className="group rounded-2xl overflow-hidden transition-all duration-300 flex flex-col border-2 border-[#C9A227]/40 shadow-lg shadow-[#6B2D2D]/10 hover:shadow-xl hover:shadow-[#6B2D2D]/20 hover:border-[#C9A227] bg-white">
      {/* Image - smaller height (square) */}
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={imagePath}
          alt={item.nameEn}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#4a1a1a]/80 via-[#6B2D2D]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="text-sm md:text-base font-bold text-white drop-shadow-lg leading-tight">
            {item.nameEn}
          </h3>
          <p className="font-urdu text-[#E8D48B] text-xs mt-0.5" dir="rtl">
            {item.nameUr}
          </p>
        </div>
      </div>

      {/* Content - colored background */}
      <div className="p-3 flex flex-col flex-1 bg-gradient-to-b from-[#F5EDE4] to-[#FDF8F0] border-t-2 border-[#C9A227]/30">
        <div
          className={`flex gap-1.5 mb-2 min-h-[1.75rem] items-center ${
            item.prices.length === 2 ? "grid grid-cols-2" : "flex flex-nowrap"
          }`}
        >
          {item.prices.map((opt) => (
            <span
              key={opt.label + opt.price}
              className="inline-flex items-center justify-center gap-1 rounded-full bg-[#6B2D2D] text-[#FDF8F0] px-2 py-1 text-xs font-medium whitespace-nowrap overflow-hidden border border-[#C9A227]/50"
            >
              {opt.label && <span className="text-[#E8D48B] shrink-0">{opt.label}</span>}
              <span className="truncate">Rs. {opt.price.toLocaleString()}/-</span>
            </span>
          ))}
        </div>

        <a
          href={whatsappOrderUrl(item.nameEn)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-full bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20BD5A] transition-colors shadow-md border border-[#1da851]/50"
        >
          <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.865 9.865 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Order on WhatsApp
        </a>
      </div>
    </article>
  );
}

export default function FeaturedMenu() {
  const featured = menuCategories.slice(0, 4).map((cat) => ({
    category: cat,
    item: cat.items[0],
  }));

  return (
    <section id="menu" className="py-14 md:py-20 px-4 bg-gradient-to-b from-[#F5EDE4] via-[#FDF8F0] to-[#F5EDE4]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-[#6B2D2D] font-script text-center mb-2">
          Our Menu
        </h2>
        <p className="text-center text-[#4a1a1a] text-base md:text-lg mb-10 max-w-xl mx-auto">
          Karahi, kabab, rosh, pulao, qeema, roti, kehwa & more — all with authentic Shinwari taste.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {featured.map(({ category, item }) => (
            <FeaturedCard key={item.id} item={item} category={category} />
          ))}
        </div>
        <p className="text-center mt-10">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 rounded-full bg-[#6B2D2D] px-5 py-2.5 text-[#E8D48B] font-semibold hover:bg-[#4a1a1a] transition-colors"
          >
            View full menu with images →
          </Link>
        </p>
      </div>
    </section>
  );
}
