const highlights = [
  {
    title: "Authentic taste",
    description: "Recipes and techniques passed down through generations. Real Shinwari karahi, kabab, rosh & pulao.",
    icon: "🔥",
  },
  {
    title: "Fresh & bold",
    description: "We cook on slow fire with quality ingredients. No shortcuts — just flavour that speaks for itself.",
    icon: "✨",
  },
  {
    title: "Family-friendly",
    description: "Comfortable seating, attentive staff, and a welcoming atmosphere for every occasion.",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    title: "Three branches",
    description: "Truck Adda, Bedian Road, and Bahria Town. Dine in or order on WhatsApp from anywhere in Lahore.",
    icon: "📍",
  },
];

export default function AboutHighlights() {
  return (
    <section className="py-14 md:py-20 px-4 bg-white border-y border-[#E8DED4]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-[#6B2D2D] font-script text-center mb-3">
          Why Ghani Shinwari
        </h2>
        <p className="text-center text-[#4a1a1a] mb-10 max-w-xl mx-auto">
          What makes us different — and why our guests keep coming back.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl bg-[#FDF8F0] border border-[#E8DED4] hover:shadow-md hover:border-[#C9A227]/40 transition-all text-center"
            >
              <span className="text-3xl mb-3 block" aria-hidden>
                {item.icon}
              </span>
              <h3 className="text-lg font-bold text-[#6B2D2D] mb-2">{item.title}</h3>
              <p className="text-sm text-[#4a1a1a]/90 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
