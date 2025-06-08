import React, { useState } from "react";
import Header from "./components/header";
import { Button } from "@/components/ui/button";
import FloatingBubbleBg from "@/components/floatingBubbleBg";

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
    <div>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <section className="h-screen relative flex flex-col overflow-hidden bg-gradient-to-br from-[#faf7f2] to-[#ffeaa7]">
        <FloatingBubbleBg/>
        <div
          className={`absolute inset-0 
            bg-[#faf7f2] 
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
          <p>Overlay content</p>
        </div>
        <h1 className="text-center p-6 font-extrabold font-sans text-3xl bg-gradient-to-br from-[#ff6b9d] to-[#2d5016] bg-clip-text text-transparent">
          {getGreeting()}
        </h1>
        <p className="text-[1rem] px-12 text-center">
          Transform any moment into something magical with our handpicked,
          premium flower arrangements crafted by expert florists.
        </p>
        <div className="flex flex-col mt-6 gap-2 items-center">
          <Button className="w-[10rem] h-[3rem] rounded-full text-[1rem] bg-gradient-to-br from-[#ff6b9d] to-[#e74c3c]">
            Shop Flowers
          </Button>
          <Button
            className="w-[12rem] h-[3rem] rounded-full text-[1rem] bg-transparent border-[#a8d5a3] border-2 mb-3"
            variant="outline"
          >
            Same Day Delivery
          </Button>
        </div>
      </section>
    </div>
  );
};

export default landingPage;
