import MaskedDiv from "@/components/ui/masked-div";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Aboutus from './components/Aboutus';


export default function Home() {
  return (
    <section className="w-[100%] h-[100%] overflow-hidden bg-[#FFF7F4]">
      <main className="bg-[#07332F] w-full min-h-screen selection:bg-green-400 selection:text-black">
        <header className="w-full h-20 pt-5 pb-5 border-b-1 border-gray-400 flex items-center  ">

          <Navbar />
        </header>
        <div className="w-full h-full flex justify-center items-center max-lg:flex-wrap max-lg:gap-3 ">
          <div className="w-[50%] mt-20 h-full overflow-hidden flex items-center justify-center max-lg:w-[100%] max-lg:h-[50%]">
            <div className="w-100 flex flex-col gap-5">
              <h1 className="text-white text-2xl uppercase">we take care of your health</h1>
              <h1 className="text-[#F7A582] text-5xl font-bold">We Are Providing
                Best & Affordable
                Health Care.</h1>
              <p className="text-[#839991] font-bold">Our is to deliver the highest quality healthcare services. We believe that everyone deserves access to excellent medical care without compromising on quality.</p>
            </div>
          </div>
          <div className="w-[50%] h-full p-4 flex gap-2 items-start justify-center max-lg:w-[100%] max-lg:h-[50%]">
            <MaskedDiv maskType="type-1" size={0.45} className="my-4 min-h-[400px]">
              <video
                className="cursor-pointer transition-all duration-300 hover:scale-105"
                autoPlay
                loop
                muted
              >
                <source
                  src="https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_30fps.mp4"
                  type="video/mp4"
                />
              </video>
            </MaskedDiv>
            <MaskedDiv maskType="type-1" size={0.45} className="rotate-180 top-32 ">
              <video
                className="cursor-pointer transition-all duration-300 hover:scale-105"
                autoPlay
                loop
                muted
              >
                <source
                  src="https://videos.pexels.com/video-files/3191572/3191572-uhd_2560_1440_25fps.mp4"
                  type="video/mp4"
                />
              </video>
            </MaskedDiv>
          </div>
        </div>
      </main>
      <div className="w-full h-75  mt-10 overflow-hidden">
        <Card />
      </div>
      <div className="w-full h-full">
        <Aboutus />
      </div>
    </section>
  );
}
