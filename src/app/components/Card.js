import { FaCalendarCheck } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { FaUserNurse } from "react-icons/fa6";

export default function Card() {
    return (
        <section className="flex items-center justify-center gap-0.3 p-0 max-lg:flex-wrap max-lg:p-10 max-lg:gap-1">
            <div className="relative bg-[#1DD2C8] w-100 h-60 flex justify-start items-center flex-col">
                <h1 className="text-white  text-4xl p-10">Dont Hesitate To Contact us</h1>
                <button className="absolute bottom-0 text-white bg-black w-[100%] h-15 text-xl flex justify-center items-center gap-4">Make Appointment <FaCalendarCheck className="text-white" /></button>
            </div>
            <div className="bg-[#F7F7F7] w-100 h-60 flex justify-center  gap-4 flex-col p-10 border-r-1 border-white">
                <div>
                    <FaUserDoctor className="text-[#1DD2C8] text-5xl" />

                </div>
                <h1 className="text-black  text-3xl">Need Family Health</h1>
                <p className="text-[#809997] text-lg">We understand the importance of family health overall well-being.</p>
            </div>
            <div className="bg-[#F7F7F7] w-100 h-60 flex justify-center gap-4 flex-col p-10">
                <div>
                    <FaUserNurse className="text-[#1DD2C8] text-5xl" />

                </div>
                <h1 className="text-black  text-3xl">24 hours service</h1>
                <p className="text-[#809997] text-lg">We take pride in offering 24-hour medical services to ensure that you.</p>
            </div>
        </section>
    )
}