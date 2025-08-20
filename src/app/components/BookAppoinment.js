"use client";
import Lottie from "lottie-react";
import doctor from "./../assets/Online Doctor.json"
import checkup from "./../assets/Pediatrics.json"
import surgen from "./../assets/General Surgery.json"
import payment from "./../assets/Tick animation - success feedback.json"

export default function BookAppoinment() {
    return (
        <section className="w-full h-full">
                <h6 className="text-5xl text-center text-[#1DD2C8]">How We Work</h6>
                <h6 className="text-2xl text-center text-[#7F7B7A]">Al Shafi Memorial</h6>
            <div className="flex pb-20 mt-20 max-lg:flex-col">
                <div className="w-[50%] max-lg:w-full">
                <h1 className="text-4xl text-[#1DD2C8] w-100 font-bold max-lg:w-full">
                    A Comprehensive Directory For Your Health Care.
                </h1>
                </div>
                <div className="w-[50%] max-lg:w-full">
                <p className="mt-4 text-[#7F7B7A] text-xl">
                    We are your trusted one-stop destination for all your healthcare needs.
                    Our comprehensive directory is designed to provide you with easy access
                    to a wide range of healthcare services and providers, ensuring that you
                    and your family.
                </p>
                </div>
            </div>
            <div className="w-full flex justify-between items-center gap-10 flex-wrap ">
            <div className="flex-1 flex flex-col justify-center items-center p-2 mx-lg:w-100 max-lg:h-52">
                <Lottie animationData={doctor} loop autoplay  className="w-28"/>
                <h1 className="text-2xl mt-3 text-[#7F7B7A] text-center">Book Appoinment </h1>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center  p-2 max-lg:w-100 max-lg:h-52">
                <Lottie animationData={checkup} loop autoplay  className="w-28"/>
                <h1 className="text-2xl mt-3 text-[#7F7B7A] text-center">Conduct CheckUp</h1>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center p-2 max-lg:w-100 max-lg:h-52">
                <Lottie animationData={surgen} loop autoplay  className="w-28"/>
                <h1 className="text-2xl mt-3 text-[#7F7B7A] text-center">Perform Treatment</h1>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center p-2 max-lg:w-100 max-lg:h-52">
                <Lottie animationData={payment} loop autoplay  className="w-28"/>
                <h1 className="text-2xl mt-3 text-[#7F7B7A] text-center">Prescribe & Payment
</h1>
            </div>
            </div>
        </section>
    );
}
