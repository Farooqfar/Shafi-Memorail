import Image from "next/image";

export default function Aboutus() {
    return (
        <section className="w-full h-full flex items-center justify-center p-10 max-lg:flex-col">
            <div className="w-full h-full flex flex-col gap-5 max-lg:w-full max-lg:mt-20">
                <div className="w-full text-center">
                    <h1 className="text-6xl text-[#24CBC3]">About Us</h1>
                    <h1 className="text-4xl text-black">Personal care & healthy living</h1>
                </div>
                <p className="text-xl text-[#7F7B7A] p-10 text-center max-lg:p-0 max-lg:text-start">At Al Shafi Memorial, we are dedicated to providing compassionate, high-quality healthcare for every patient. Our mission is to combine modern medical expertise with a personal touch, ensuring accessible and affordable treatment for all. With a team of skilled professionals and state-of-the-art facilities, we strive to improve lives and promote wellness in our community.</p>
                <p className="text-xl text-[#7F7B7A] text-center max-lg:text-start">At Al Shafi Memorial, we believe that true healthcare goes beyond treating illnesses—it’s about caring for the whole person. Our approach emphasizes trust, respect, and compassion, creating a supportive environment where patients feel heard and valued. We are committed to continuous growth through advanced medical practices, innovative technology, and ongoing education, ensuring that every patient receives the highest standard of care tailored to their unique needs.</p>
            </div>
        </section>
    )
}
