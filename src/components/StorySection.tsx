import Image from "next/image";
import Link from "next/link";

export default function StorySection() {
  return (
    <section className="py-14 md:py-24 px-4 bg-[#FDF8F0]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div className="relative aspect-[4/3] md:aspect-square rounded-2xl overflow-hidden shadow-xl border-2 border-[#C9A227]/30 order-2 md:order-1">
            <Image
              src="/Restaurantimg.jpg"
              alt="Ghani Shinwari restaurant — authentic Shinwari dining in Lahore"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#4a1a1a]/40 via-transparent to-transparent" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl text-[#6B2D2D] font-script mb-4">
              Our Story
            </h2>
            <p className="text-[#4a1a1a] leading-relaxed mb-4">
              Ghani Shinwari brings authentic Shinwari taste to Lahore — slow fire, bold flavours, and recipes passed down through generations. From karahi and kabab to rosh and pulao, we serve real desi cuisine in a family-friendly setting.
            </p>
            <p className="text-[#4a1a1a]/90 leading-relaxed mb-6">
              Three branches across the city: Truck Adda, Bedian Road, and Bahria Town. Dine in or order on WhatsApp — we&apos;re here to make every meal memorable.
            </p>
            <Link
              href="/about"
              className="inline-block rounded-full bg-[#6B2D2D] px-6 py-3 text-white font-semibold hover:bg-[#4a1a1a] transition-colors"
            >
              Learn more about us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
