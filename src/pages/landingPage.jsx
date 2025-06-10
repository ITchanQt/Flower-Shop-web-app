import React, { useState } from "react";
import Header from "./components/header";
import { Button } from "@/components/ui/button";
import FloatingBubbleBg from "@/components/floatingBubbleBg";
import SmScreenHeaderContent from "./components/smScreenHeaderContent";

const landingPage = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "Good Morning! Fresh Blooms Await";
    if (hour >= 12 && hour < 17) return "Brighten Your Afternoon with Flowers";
    if (hour >= 17 && hour < 21) return "Evening Elegance with Fresh Blooms";
    return "Good Night";
  };
  return (
    <main className="relative pt-20">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <section className="h-screen relative flex flex-col overflow-hidden bg-gradient-to-br from-[#faf7f2] to-[#ffeaa7] 2xl:container">
        <div
          className={` md:hidden
            absolute inset-0 
            bg-white 
            transform 
            transition-all 
            duration-500 
            ease-in-out
            ${
              !menuOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
        >
          <SmScreenHeaderContent />
        </div>
        <FloatingBubbleBg />
        <div className="lg:mx-52">
          <h1 className="text-center leading-relaxed p-4 text-4xl mx-3 sm:mx-20 font-extrabold font-sans bg-gradient-to-br from-[#ff6b9d] to-[#2d5016] bg-clip-text text-transparent lg:text-6xl">
            {getGreeting()}
          </h1>
          <p className="sm:text-lg leading-relaxed text-[#2c3e50] px-12 text-center md:text-xl md:px-6 lg:mx-10">
            Transform any moment into something magical with our handpicked,
            premium flower arrangements crafted by expert florists.
          </p>
        </div>
        <div className="flex flex-col mt-6 sm:mt-10 gap-3 items-center md:flex-row md:justify-center">
          <Button className="w-[10rem] h-[3rem] md:h-[4rem] rounded-full text-[1rem] bg-gradient-to-br from-[#ff6b9d] to-[#e74c3c]">
            Shop Flowers
          </Button>
          <Button
            className="w-[12rem] h-[3rem] md:h-[4rem] rounded-full text-[1rem] bg-transparent border-[#a8d5a3] border-2"
            variant="outline"
          >
            Same Day Delivery
          </Button>
        </div>
      </section>
    </main>
  );
};

export default landingPage;
