import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { menuCategories } from "@/lib/menu-data";
import { WHATSAPP_ORDER_URL, whatsappOrderUrl } from "@/lib/contact";
import type { MenuCategory, MenuItem } from "@/lib/menu-data";

export const metadata = {
  title: "Menu | Ghani Shinwari Restaurant",
  description: "Full menu: Karahi, Kabab, Barbeque, Rosh, Pulao, Qeema, Roti, Kehwa, Drinks & more. Authentic Shinwari taste in Lahore.",
};

function MenuItemCard({ item, category }: { item: MenuItem; category: MenuCategory }) {
  const imagePath = item.image ? `/${item.image}` : category.image || "/Restaurant.jpg";

  return (
    <article className="group rounded-2xl overflow-hidden transition-all duration-300 flex flex-col border-2 border-[#C9A227]/40 shadow-lg shadow-[#6B2D2D]/10 hover:shadow-xl hover:shadow-[#6B2D2D]/20 hover:border-[#C9A227] bg-white">
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={imagePath}
          alt={item.nameEn}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#4a1a1a]/80 via-[#6B2D2D]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="text-sm md:text-base font-bold text-white drop-shadow-lg leading-tight">{item.nameEn}</h3>
          <p className="font-urdu text-[#E8D48B] text-xs mt-0.5" dir="rtl">
            {item.nameUr}
          </p>
        </div>
      </div>
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

export default function MenuPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FDF8F0]">
        {/* Menu header */}
        <section className="relative py-8 md:py-12 px-4 border-b border-[#E8DED4] bg-[#F5EDE4] pt-24 md:pt-28">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-urdu text-[#6B2D2D] text-xl md:text-2xl mb-2" dir="rtl">
              مکمل مینو
            </p>
            <h1 className="font-script text-4xl sm:text-5xl md:text-6xl text-[#6B2D2D]">
              Our Menu
            </h1>
            <p className="text-[#4a1a1a] text-lg mt-4 max-w-xl mx-auto">
              Karahi, kabab, rosh, pulao, qeema, roti, kehwa & more — fresh, bold, and authentically Shinwari.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <a
                href={WHATSAPP_ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#20BD5A] transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.865 9.865 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Order on WhatsApp
              </a>
              <Link
                href="/#locations"
                className="inline-block px-6 py-3 rounded-full bg-[#C9A227] text-[#4a1a1a] font-semibold hover:bg-[#E8D48B] transition-colors"
              >
                Find our branches
              </Link>
            </div>
            {/* Single row of category links — no duplicate section */}
            <div className="max-w-6xl mx-auto mt-6 pb-2 flex gap-2 justify-center flex-wrap">
              {menuCategories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="shrink-0 px-4 py-2 rounded-full bg-white text-[#6B2D2D] font-medium text-sm border border-[#E8DED4] hover:bg-[#6B2D2D] hover:text-white hover:border-[#6B2D2D] transition-colors"
                >
                  {cat.titleEn}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* All menu items in a grid with images */}
        <section className="py-12 md:py-16 px-4">
          <div className="max-w-6xl mx-auto">
            {menuCategories.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-32 mb-14 md:mb-16 last:mb-0">
                <h2 className="font-script text-3xl md:text-4xl text-[#6B2D2D] mb-2">
                  {category.titleEn}
                </h2>
                <p className="font-urdu text-[#4a1a1a] text-lg mb-6" dir="rtl">
                  {category.titleUr}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item) => (
                    <MenuItemCard key={item.id} item={item} category={category} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-[#6B2D2D] text-center">
          <h2 className="font-script text-3xl md:text-4xl text-[#E8D48B]">
            Visit us today
          </h2>
          <p className="text-[#F5EDE4] mt-2 mb-6">Three branches across Lahore · Order on WhatsApp</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP_ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#20BD5A] transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.865 9.865 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Order on WhatsApp
            </a>
            <Link
              href="/#locations"
              className="inline-block px-8 py-3 rounded-full bg-[#C9A227] text-[#4a1a1a] font-semibold hover:bg-[#E8D48B] transition-colors"
            >
              View locations
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
