"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
    return (
        <section className="w-full min-h-screen bg-[#F8FAFC] flex items-center justify-center p-10">
            <div className="w-full max-w-3xl bg-[#023161] text-white p-10 flex flex-col justify-center gap-6 shadow-xl rounded-2xl">

                <h2 className="text-3xl font-bold">Get in Touch</h2>
                <p className="text-gray-200">
                    Have questions about our services? We’d love to hear from you.
                    Reach out using the details below.
                </p>

                <div className="flex items-center gap-4">
                    <FaPhoneAlt className="text-[#24CBC3] text-xl" />
                    <p className="text-lg">+92 321 6561397</p>
                </div>

                <div className="flex items-center gap-4">
                    <FaEnvelope className="text-[#24CBC3] text-xl" />
                    <p className="text-lg">info4895@gmail.com</p>
                </div>

                <div className="flex items-center gap-4">
                    <FaMapMarkerAlt className="text-[#24CBC3] text-xl" />
                    <p className="text-lg">Chak No 296 GB, Toba Tek Singh, Pakistan</p>
                </div>

            </div>
        </section>
    );
}
