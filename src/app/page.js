import MaskedDiv from "@/components/ui/masked-div";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Aboutus from './components/Aboutus';
import Services from "./components/Services";


export default function Home() {
  return (
    <section className="w-[100%] h-[100%] overflow-hidden bg-[#FFFFFF]">
      <main className="bg-gray-50 w-full min-h-screen selection:bg-green-400 selection:text-black">
        <header className="w-full h-20 pt-5 pb-5 border-b-1 border-gray-400 flex items-center  ">

          <Navbar />
        </header>
        <div className="w-full h-full flex justify-center items-center max-lg:flex-wrap max-lg:gap-3 ">
          <div className="w-full mt-20 h-full overflow-hidden flex items-center justify-center max-lg:mt-0">
            <div className="w-full p-10 flex flex-col items-center justify-center gap-5  max-lg:items-start">
              <h1 className="text-black text-2xl uppercase ">we take care of your health</h1>
              <h1 className="text-[#1DD2C8] text-6xl font-bold max-lg:text-5xl">Dr.Muhammad Arslan Iqbal</h1>
              <h1 className="text-black text-3xl max-lg:2xl">We Are Providing
                Best & Affordable
                Health Care.</h1>
              <p className="text-[#7F7B7A] text-lg text-center w-[80%] max-lg:w-full max-lg:text-start">We are committed to providing the best and most affordable healthcare, ensuring every patient receives compassionate, personalized treatment. Our mission is to deliver the highest quality medical services, combining advanced medical expertise with a patient-first approach. We believe that everyone deserves access to exceptional healthcare without compromising on quality, comfort, or dignity.</p>
              <button className="w-50 bg-[#24CBC3] text-white px-6 py-3 rounded-xl font-medium shadow-md 
             hover:bg-[#1FA8A1] transition-colors cursor-pointer">Contact Us</button>
            </div>
          </div>
          </div>  
      </main>
      <div className="w-full h-75  mt-10 overflow-hidden max-lg:h-full">
        <Card />
      </div>
      <div className="w-full h-full">
        <Aboutus />
      </div>
      <div className="w-full h-full pt-20 overflow-hidden">
        <Services />
      </div>
    </section>
  );
}
