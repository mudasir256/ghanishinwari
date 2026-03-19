import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { branches } from "@/lib/menu-data";
import { WHATSAPP_ORDER_URL } from "@/lib/contact";

export const metadata = {
  title: "Outlets | Ghani Shinwari Restaurant",
  description: "Find Ghani Shinwari branches in Lahore: Truck Adda, Bedian Road, Bahria Town. Dine in or order on WhatsApp.",
};

export default function OutletsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FDF8F0]">
        <section className="pt-24 md:pt-28 pb-16 md:pb-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-script text-4xl sm:text-5xl md:text-6xl text-[#6B2D2D] text-center mb-4">
              Our Outlets
            </h1>
            <p className="text-center text-[#4a1a1a] mb-12">
              Three branches in Lahore — visit us or order on WhatsApp.
            </p>
            <div className="grid gap-6 md:grid-cols-1">
              {branches.map((branch) => (
                <div
                  key={branch.id}
                  className="bg-white rounded-xl p-6 shadow-md border border-[#E8DED4] hover:shadow-[#6B2D2D]/15 transition-shadow"
                >
                  <h2 className="text-lg font-bold text-[#6B2D2D] uppercase tracking-wider mb-2">
                    {branch.name}
                  </h2>
                  <p className="text-[#4a1a1a] flex items-start gap-2">
                    <span className="text-[#C9A227] shrink-0">📍</span>
                    <span>{branch.address}</span>
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <a
                href={WHATSAPP_ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-white font-semibold hover:bg-[#20BD5A] transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.865 9.865 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Order on WhatsApp
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
