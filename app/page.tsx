import Features from "./components/Features";
import Header from "./components/Header";
import HowItWorks from "./components/HowItWorks";
import NavBar from "./components/NavBar";
import Pricing from "./components/Pricing";
import Sidebar from "./components/Sidebar";

export default function Home () {
  return (
    <div className="bg-background w-full h-full text-primaryText f-c-col gap-28 justify-start overflow-auto relative">
      <NavBar />
      <Sidebar />
      <Header />
      <Features />
      <HowItWorks />
      <Pricing />
    </div>
  )
}