import Image from "next/image";

export default function Aboutus() {
    return (
        <section className="w-full h-full flex items-center justify-center">
            <div className="w-[50%] h-full flex justify-center items-center gap-5">

                <Image
                    src="/about1.jpg"
                    alt="notFound"
                    width={300}
                    height={300}
                    className="rounded-full"
                />

                <Image
                    src="/about2.jpg"
                    alt="notFound"
                    width={300}
                    height={300}
                    className="rounded-full relative top-20"
                />


            </div>
            <div className="w-[50%] h-full">
                <h1 className="text-5xl font-bold text-[#F7A582]">About Us</h1>
                <h1 className="text-2xl text-black">Personal care & healthy living</h1>
                <p className="text-xl">At Al Shafi Memorial, we are dedicated to providing compassionate, high-quality healthcare for every patient. Our mission is to combine modern medical expertise with a personal touch, ensuring accessible and affordable treatment for all. With a team of skilled professionals and state-of-the-art facilities, we strive to improve lives and promote wellness in our community.</p>
            </div>
        </section>
    )
}
