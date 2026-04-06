import Image from "next/image";
import bgProfile from "../assets/bg-profile.png"

import Highlights from "../components/ui/Highlight"


export default function Hero() {
    return (
    <section className="flex px-12 py-6">
        <div className="mx-auto py-8 rounded-lg mb-10">
            <div className="flex flex-col md:flex-row items-center">
                <Image src={bgProfile} alt="bg" className="mx-5 w-80 self-center overflow-hidden shrink-0 p-2"  priority/>
                <div className="flex flex-col">
                    <h3 className="text-2xl font-bold py-2 text-blue-600">Hello👋, I&apos;m</h3>
                    <h1 className="text-5xl font-bold py-2">Hansen</h1>
                    <h3 className="py-2 text-gray-600"><i>Fresh Graduate | IT Enthusiast | Web Development | Data Analyst </i></h3>
                    <p className="max-w-4x1 mt-4 text-gray-600 justify-center mr-2 ">
                        I am a recent graduate with a strong interest in the world of technology. I actively explore the latest tools and technologies and work on projects as a form of self-development. My previous work experience has helped me develop strong problem-solving, communication, and teamwork skills.
                    </p>
                    <div className="mt-4">
                        <Highlights/>
                    </div>
                </div>
            </div>


        </div>
    </section>
    );
}