import { branches } from "@/lib/menu-data";

export default function Locations() {
  return (
    <section id="locations" className="py-16 md:py-24 px-4 bg-[#E8DED4]/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-[#6B2D2D] font-script text-center mb-4">
          Find Us
        </h2>
        <p className="text-center text-[#4a1a1a] mb-10">Three branches in Lahore</p>
        <div className="grid gap-6 md:grid-cols-1">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="bg-white rounded-xl p-6 shadow-md border border-[#E8DED4] hover:shadow-[#6B2D2D]/15 transition-shadow"
            >
              <h3 className="text-lg font-bold text-[#6B2D2D] uppercase tracking-wider mb-2">
                {branch.name}
              </h3>
              <p className="text-[#4a1a1a] flex items-start gap-2">
                <span className="text-[#C9A227] shrink-0">📍</span>
                <span>{branch.address}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
