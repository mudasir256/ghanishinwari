import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedMenu from "@/components/FeaturedMenu";
import AboutHighlights from "@/components/AboutHighlights";
import StorySection from "@/components/StorySection";
import HomeGallery from "@/components/HomeGallery";
import Reviews from "@/components/Reviews";
import Locations from "@/components/Locations";
import OrderCTA from "@/components/OrderCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedMenu />
        <AboutHighlights />
        <StorySection />
        <HomeGallery />
        <Reviews />
        <Locations />
        <OrderCTA />
        <Footer />
      </main>
    </>
  );
}
