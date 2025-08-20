"use client";

import TextPressure from "@/components/TextPressure";

import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Aboutus from './components/Aboutus';
import Services from "./components/Services";
import BookAppoinment from "./components/BookAppoinment";


export default function Home() {
  return (
    <section className="w-[100%] h-[100%] overflow-hidden bg-[#FFFFFF]">
      <main className="relative bg-[url(/drarslan.png)] bg-cover max-md:bg-[url(/drArslanRes.png)] max-md:bg-center bg-no-repeat w-full min-h-screen selection:bg-green-400 selection:text-black max-lg:min-h-auto">
        {/* Overlay only on background */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <header className="w-full h-20 pt-5 pb-5 border-b border-gray-400 flex items-center relative z-10">
          <Navbar />
        </header>

        <div className="w-full h-full flex justify-start items-center max-lg:flex-wrap max-lg:gap-3 relative z-10">
          <div className="w-full mt-20 h-full overflow-hidden flex items-center justify-start max-lg:mt-0">
            <div className="w-full p-10 flex flex-col gap-5 max-lg:items-start">
              <h1 className="text-white text-2xl uppercase">
                we take care of your health
              </h1>
              <div className="h-auto">
                <TextPressure
                  text="Dr.Muhammad Arslan Iqbal"
                  flex={true}
                  alpha={false}
                  stroke={false}
                  width={true}
                  weight={true}
                  italic={true}
                  textColor="#24CBC3"
                  strokeColor="#ff0000"
                  minFontSize={36}
                  
                />
              </div>
              <h1 className="text-yellow-600 text-3xl max-lg:2xl ">
                We Are Providing Best & Affordable Health Care.
              </h1>
              <p className="text-white text-lg w-[60%] max-lg:w-full max-lg:text-start">
                We are committed to providing the best and most affordable healthcare, ensuring every patient receives compassionate, personalized treatment. Our mission is to deliver the highest quality medical services, combining advanced medical expertise with a patient-first approach. We believe that everyone deserves access to exceptional healthcare without compromising on quality, comfort, or dignity.
              </p>
              <button className="w-50 bg-[#24CBC3] text-white px-6 py-3 rounded-xl font-medium shadow-md 
          hover:bg-[#1FA8A1] transition-colors cursor-pointer">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </main>

      <div className="w-full h-80 flex items-center justify-center p-10 mt-10 overflow-hidden max-lg:h-full">
        <Card />
      </div>
      <div className="w-full h-auto mt-5 bg-[#023161] pt-8">
        <Aboutus />
      </div>
      <div className="w-full h-auto pt-5 overflow-hidden max-md:mt-10">
        <Services />
      </div>
      <div className="w-full h-auto overflow-hidden p-10 mb-5 bg-[#023161] max-md:mt-5">
        <BookAppoinment />
      </div>
    </section>
  );
}
