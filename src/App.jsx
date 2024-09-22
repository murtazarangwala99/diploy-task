import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroFour from "./components/HeroFour";
import HeroSectionOne from "./components/HeroSectionOne";
import HeroThree from "./components/HeroThree";
import HeroTwo from "./components/HeroTwo";
import MakeMoneySection from "./components/MakeMoneySection";
import TalkToSales from "./components/TalkToSales";
import TrustedSection from "./components/TrustedSection";

function App() {
  return (
    <div className="px-12 py-5">
      <Header />
      <HeroSectionOne />
      <HeroTwo />
      <HeroThree />
      <HeroFour />
      <TalkToSales />
      <TrustedSection />
      <MakeMoneySection />
      <Footer />
    </div>
  );
}

export default App;
