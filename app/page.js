import Hero from "./components/Hero";
import SkatingCmp from "./components/Skating";
import AboutCmp from "./components/About";
import ShopCmp from "./components/Shop";

export default function Home() {
  return (
    <div>
      <Hero />
      <SkatingCmp />
      <div className="mt-12">
        <AboutCmp />
      </div>
      <ShopCmp/>
    </div>
  );
}
