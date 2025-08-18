import Link from "next/link";
import Image from 'next/image';


export default function Navbar() {
    return (
        <nav className="w-full h-full flex justify-between items-center p-5">
            <ul>
                <li>
                    <Image
                        src="/logo.png"
                        alt="notFound"
                        width={150}
                        height={150}
                    />
                </li>
            </ul>
            <ul className="flex gap-10 items-center max-lg:hidden ">
                <li className="text-xl text-white hover:text-black hover:bg-[#1DD2C8] p-2 rounded-xl tranisition-all duration-300"><Link href="Home">Home</Link></li>
                <li className="text-xl text-white hover:text-black hover:bg-[#1DD2C8] p-2 rounded-xl tranisition-all duration-300"><Link href="Aboutus">About Us</Link></li>
                <li className="text-xl text-white hover:text-black hover:bg-[#1DD2C8] p-2 rounded-xl tranisition-all duration-300"><Link href="Services">Services</Link></li>
                <li className="text-xl text-white hover:text-black hover:bg-[#1DD2C8] p-2 rounded-xl tranisition-all duration-300"><Link href="Contactus">Contact Us</Link></li>
                <li>
                    <button className="w-52  bg-[#1DD2C8] rounded-2xl p-2 text-black hover:bg-white tranisition-all duration-300 cursor-pointer ">
                        Book Appointment
                    </button>
                </li>
            </ul>
        </nav>
    )
}
