import type { MenuCategory, MenuItem as MenuItemType } from "@/lib/menu-data";

function MenuItem({ item }: { item: MenuItemType }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 py-3 border-b border-[#E8DED4] last:border-0">
      <div className="flex-1 min-w-0">
        <p className="text-[#4a1a1a] font-semibold">
          {item.nameEn}
        </p>
        <p className="font-urdu text-[#6B2D2D] text-sm mt-0.5" dir="rtl">
          {item.nameUr}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 justify-end">
        {item.prices.map((opt) => (
          <span
            key={opt.label + opt.price}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#6B2D2D] text-[#FDF8F0] text-sm font-medium"
          >
            {opt.label && <span className="text-[#E8D48B] text-xs">{opt.label}</span>}
            <span>Rs. {opt.price.toLocaleString()}/-</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function MenuSection({ category }: { category: MenuCategory }) {
  return (
    <section className="bg-white rounded-2xl shadow-lg shadow-[#6B2D2D]/10 overflow-hidden border border-[#E8DED4]">
      <div className="bg-[#6B2D2D] px-6 py-4 text-center">
        <h2 className="text-2xl md:text-3xl text-[#C9A227] font-script inline-block">
          {category.titleEn}
        </h2>
        <span className="font-urdu text-[#E8D48B] text-lg mr-2" dir="rtl">
          {category.titleUr}
        </span>
      </div>
      <div className="px-6 py-5">
        {category.items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
