import logoKampus from "../assets/logokampus.png";
import Image from "next/image";

export default function Education(){
    return(
        <section className="px-12 scroll-mt-20" id="education">
            <h2 className="text-2xl font-semibold mt-6">Education</h2>
                <div className="flex items-center">
                <Image src={logoKampus} alt="bg" className="w-60 shrink-0 self-center overflow-hidden" priority></Image>
                    <div className="flex flex-col ml-6">
                        <h3 className="font-semibold text-md">Esa Unggul University <br/>Informatics - Bachelor of Computer Science</h3>
                        <p className="text-sm text-gray-500">GPA 3.79/4.00</p>
                    </div>
                </div>
        </section>
    )
}