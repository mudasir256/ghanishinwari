import Image from "next/image";

const galleryItems = [
  { src: "/namkeenchamptikka1.jpg", alt: "Namkeen Tikka", caption: "Namkeen Tikka" },
  { src: "/chickengrenade1.jpg", alt: "Chicken Granade", caption: "Chicken Granade" },
  { src: "/kablipulao1.jpg", alt: "Kabli Pulao", caption: "Kabli Pulao" },
  { src: "/shinwarikarahi1.jpg", alt: "Shinwari Karahi", caption: "Shinwari Karahi" },
];

export default function HomeGallery() {
  return (
    <section className="py-14 md:py-20 px-4 bg-white border-y border-[#E8DED4]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-[#6B2D2D] font-script text-center mb-3">
          A Taste of What We Serve
        </h2>
        <p className="text-center text-[#4a1a1a] mb-10 max-w-xl mx-auto">
          Fresh from our kitchen — karahi, kabab, tikka, and pulao made the Shinwari way.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryItems.map((item) => (
            <figure
              key={item.src}
              className="group relative aspect-square rounded-xl overflow-hidden border-2 border-[#E8DED4] hover:border-[#C9A227] shadow-md hover:shadow-lg transition-all"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4a1a1a]/80 via-[#6B2D2D]/20 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-3 text-white font-semibold text-sm drop-shadow-lg">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
