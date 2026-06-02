import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import AskLibrary from "../components/AskLibrary";
import SurveySection from "../components/SurveySection";
import FAQ from "../components/FAQ";
import FooterValues from "../components/FooterValues";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureSection />
      <AskLibrary />
      <FooterValues />
      <SurveySection />
      <FAQ />
      <footer className="border-t border-black/5 py-5 px-6 text-center">
        <p className="text-[12.5px] text-neutral-400">
          © 2024 Arlo. All rights reserved. &nbsp;&nbsp;
          <a href="#" className="text-neutral-500 hover:text-neutral-700 mx-2.5">Privacy</a>
          <a href="#" className="text-neutral-500 hover:text-neutral-700 mx-2.5">Terms</a>
          <a href="#" className="text-neutral-500 hover:text-neutral-700 mx-2.5">Contact</a>
        </p>
      </footer>
    </main>
  );
}
