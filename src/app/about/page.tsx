import Link from "next/link";
import Header from "@/components/Header";
import AboutHighlights from "@/components/AboutHighlights";
import Locations from "@/components/Locations";
import FeaturedMenu from "@/components/FeaturedMenu";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About | Ghani Shinwari Restaurant",
  description: "Learn about Ghani Shinwari — authentic Shinwari cuisine in Lahore. Our story, tradition, and commitment to bold, fresh flavours.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FDF8F0]">
        <section className="pt-24 md:pt-28 pb-12 md:pb-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-script text-4xl sm:text-5xl md:text-6xl text-[#6B2D2D] mb-4">
              About Us
            </h1>
            <p className="text-lg text-[#4a1a1a] leading-relaxed mb-6">
              Ghani Shinwari brings authentic Shinwari taste to Lahore — slow fire, bold flavours, and recipes passed down through generations. From karahi and kabab to rosh and pulao, we serve real desi cuisine in a family-friendly setting.
            </p>
            <p className="text-[#4a1a1a]/90 leading-relaxed mb-8">
              Three branches across the city: Truck Adda, Bedian Road, and Bahria Town. Dine in or order on WhatsApp — we&apos;re here to make every meal memorable.
            </p>
            <Link
              href="/menu"
              className="inline-block rounded-full bg-[#801416] px-6 py-3 text-white font-semibold hover:bg-[#601010] transition-colors"
            >
              View our menu
            </Link>
          </div>
        </section>
        <AboutHighlights />
        <Locations />
        <section className="py-14 md:py-20 px-4 bg-[#FDF8F0]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-[#6B2D2D] font-script text-center mb-3">
              Our Specialties
            </h2>
            <p className="text-center text-[#4a1a1a] mb-10">
              A taste of what we serve — order any dish on WhatsApp.
            </p>
            <FeaturedMenu />
            <div className="text-center mt-8">
              <Link
                href="/menu"
                className="inline-block rounded-full bg-[#6B2D2D] px-6 py-3 text-white font-semibold hover:bg-[#4a1a1a] transition-colors"
              >
                See full menu
              </Link>
            </div>
          </div>
        </section>
        <Reviews />
        <Footer />
      </main>
    </>
  );
}
