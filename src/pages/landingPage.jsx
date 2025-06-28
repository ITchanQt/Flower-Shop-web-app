import React, { useState } from "react";
import Header from "./components/header";
import { Button } from "@/components/ui/button";
import FloatingBubbleBg from "@/components/floatingBubbleBg";
import SmScreenHeaderContent from "./components/smScreenHeaderContent";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ClipboardPenIcon, LeafIcon, Truck } from "lucide-react";

const landingPage = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "Good Morning! Fresh Blooms Await";
    if (hour >= 12 && hour < 17) return "Brighten Your Afternoon with Flowers";
    if (hour >= 17 && hour < 21) return "Evening Elegance with Fresh Blooms";
    return "Good Night";
  };
  
  const featureCards = [
    {
      icon: <Truck className="text-[#ff6b9d]" height={60} width={60}/>,
      title: "Same Day Delivery",
      description: "Order before 2 PM and receive your beautiful arrangements the same day. Perfect for last-minute surprises!"
    },
    {
      icon: <LeafIcon className="text-[#ff6b9d]" height={60} width={60}/>,
      title: "Always Fresh",
      description: "We source our flowers daily from local growers and international farms to ensure maximum freshness and longevity."
    },
    {
      icon: <ClipboardPenIcon className="text-[#ff6b9d]" height={60} width={60}/>,
      title: "Custom Arrangements",
      description: "Our expert florists create bespoke arrangements tailored to your preferences and special occasions."
    }
  ]

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
      <section>
        <div className="h-screen p-5">
          <div className="mb-10">
            <h2 className=" text-center text-[2rem] text-[#2c3e50] font-bold ">
              Why Choose Bloom & Petal?
            </h2>
          </div>
          <div className="grid max-w-6xl gap-5  mx-auto md:grid-cols-2 lg:grid-cols-3"> 
            {featureCards.map((card, index) => (
            <Card className="rounded-2xl" key={index}>
              <CardContent>
                <div className="rounded-full flex justify-center p-5 bg-gradient-to-br from-[#ffeaa7] to-[#faf7f2] w-fit mx-auto">
                  {/* <Truck className="text-[#ff6b9d]" height={60} width={60}/> */}
                  {card.icon}
                </div>
              </CardContent>

              <CardHeader>
                <CardTitle><h3 className="text-2xl font-bold text-center text-[#2c3e50] mb-5">{card.title}</h3></CardTitle>
                <CardDescription className="text-center text-[1rem] leading-7">{card.description}</CardDescription>
              </CardHeader>
            </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default landingPage;
