import Image from "next/image";
import type { MenuCategory, MenuItem as MenuItemType } from "@/lib/menu-data";

function MenuItemRow({ item }: { item: MenuItemType }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 py-4 border-b border-[#E8DED4]/80 last:border-0">
      <div className="flex-1 min-w-0">
        <p className="text-[#4a1a1a] font-semibold text-lg">
          {item.nameEn}
        </p>
        <p className="font-urdu text-[#6B2D2D] text-sm mt-1" dir="rtl">
          {item.nameUr}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 justify-end">
        {item.prices.map((opt) => (
          <span
            key={opt.label + opt.price}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#6B2D2D] text-[#FDF8F0] text-sm font-medium shadow-md"
          >
            {opt.label && (
              <span className="text-[#E8D48B] text-xs font-medium">{opt.label}</span>
            )}
            <span>Rs. {opt.price.toLocaleString()}/-</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function MenuCategoryCard({ category }: { category: MenuCategory }) {
  const hasImage = category.image?.startsWith("http") || category.image?.startsWith("/");

  return (
    <section
      id={category.id}
      className="scroll-mt-24 bg-white rounded-3xl shadow-xl shadow-[#6B2D2D]/12 overflow-hidden border border-[#E8DED4] hover:shadow-2xl hover:shadow-[#6B2D2D]/15 transition-shadow duration-300"
    >
      <div className="grid md:grid-cols-2 min-h-[280px]">
        <div className="relative h-64 md:h-auto md:min-h-[320px]">
          {hasImage ? (
            <Image
              src={category.image!}
              alt={`${category.titleEn} - Ghani Shinwari`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={category.id === "karahi"}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#6B2D2D] to-[#4a1a1a] flex items-center justify-center">
              <span className="font-script text-4xl text-[#E8D48B]">{category.titleEn}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:from-black/40" />
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
            <h2 className="text-2xl md:text-3xl text-white font-script drop-shadow-lg">
              {category.titleEn}
            </h2>
            <p className="font-urdu text-[#E8D48B] text-lg mt-0.5" dir="rtl">
              {category.titleUr}
            </p>
          </div>
        </div>
        <div className="p-6 md:p-8 flex flex-col justify-center">
          {category.items.map((item) => (
            <MenuItemRow key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
