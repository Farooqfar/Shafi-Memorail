import { FaEye, FaHandHoldingMedical, FaHeartbeat, FaHospital } from "react-icons/fa";
import { TbDental } from "react-icons/tb";


export default function Services() {
    return (
        <section className="w-full h-full p-10 mb-10 flex flex-col gap-20">
            <div className="w-full text-center">
                <h1 className="text-5xl text-[#F7A582]">Medical Services</h1>
                <h2 className="text-4xl text-black">We are Providing
                    Best Services.</h2>
            </div>
            <div className="flex justify-center gap-10 flex-wrap">
                <div className="w-100 h-72 border-2  flex flex-col gap-5 p-10 transition-all duration-200 hover:bg-[#F7A582] cursor-pointer">
                    <FaEye className="text-5xl" />
                    <h1 className="text-3xl">Eye Care</h1>
                    <p className="text-[#7F7B7A] text-xl">We understand the importance of clear vision and its impact on your.</p>
                </div>
                <div className="w-100 h-72 border-2  flex flex-col gap-5 p-10 transition-all duration-200 hover:bg-[#F7A582] cursor-pointer">
                    <FaHandHoldingMedical className="text-5xl" />

                    <h1 className="text-3xl">Medical Checkup</h1>
                    <p className="text-xl text-[#7F7B7A] ">During your medical checkup, our skilled healthcare professionals.</p>
                </div>
                <div className="w-100 h-72 border-2  flex flex-col gap-5 p-10 transition-all duration-200 hover:bg-[#F7A582] cursor-pointer">
                    <TbDental className="text-5xl" />
                    <h1 className="text-3xl">Dental Care</h1>
                    <p className="text-xl text-[#7F7B7A] ">
                        We are passionate about providing top-notch dental care to help you.</p>
                </div>
                <div className="w-100 h-72 border-2  flex flex-col gap-5 p-10 transition-all duration-200 hover:bg-[#F7A582] cursor-pointer">
                    <FaHeartbeat className="text-5xl" />

                    <h1 className="text-3xl">Laboratory Service
                    </h1>
                    <p className="text-xl text-[#7F7B7A] ">
                        We understand the critical role that accurate diagnostics play in guiding.</p>
                </div>
                <div className="w-100 h-72 border-2  flex flex-col gap-5 p-10 transition-all duration-200 hover:bg-[#F7A582] hover:cursor-pointer">
                    <FaHospital className="text-5xl" />

                    <h1 className="text-3xl">Patient-Centered
                    </h1>
                    <p className="text-xl text-[#7F7B7A] ">

                        Hospitals, or clinics with positive reviews and ratings from patients.</p>
                </div>
            </div>
        </section>
    )
}
