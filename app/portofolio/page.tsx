// import { FaBriefcase, FaChartBar } from "react-icons/fa";
import { HiFolder } from "react-icons/hi";
import SocialButton from "../components/ui/SocialButton";
import Image from "next/image"
import dumbways from "../assets/dumbways.png"
import acpro1 from "../assets/ac_project1.png"
import acpro2 from "../assets/ac_project2.png"
import project4 from "../assets/project4.png"

export default function Portofolio() {
    return (
    <section className="mt-10 px-12 scroll-mt-20" id="portofolio">
        <h2 className="text-2xl font-semibold mb-3">Portofolio Academic Projects & Bootcamp</h2>

        <div className="grid md:grid-cols-2 gap-6">
        
            {/* RIGHT BOTTOM */}
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-md">
                <Image src={dumbways} alt="pro1" className="w-auto rounded-md mb-3 shadow-sm" priority></Image>
                <h3 className="font-semibold text-lg">Bootcamp Dumbways</h3>
                <p className="text-sm text-gray-600">Fullstack Developer | Stage 1</p>
                <p className="text-sm text-blue-800 mb-3">Mar 2023 – Apr 2023</p>

                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                    <li>Fundamentals of Website Development Using Modern Technologies</li>
                    <li>Building a Personal Website Using HTML, CSS, JS, Go, MySQL, and PostgreSQL</li>
                </ul>
                <div className="flex justify-end">
                    <SocialButton type="github"
                    url="https://github.com/Hansengunawan/Dumbways"/>
                </div>
            </div>

            <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-md">
                    <Image src={acpro1} alt="pro2" className="w-auto rounded-md mb-3 shadow-sm" priority></Image>
                <div className="flex items-center gap-2 mb-3">
                    <HiFolder className="text-green-500 text-xl" />
                    <h3 className="font-semibold text-lg">Academic Projects</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                    <li>Website for the devlopment of Jakarta’s LBS-Based Smart City Services</li>
                    <li>Tech Stack : React Js, Bootstrap, Express JS, and SQL</li>
                    {/* <li>Movie Clustering (K-Means)</li>
                    <li>Diabetes Prediction (SVM)</li>
                    <li>Sales Forecasting (CNN-LSTM)</li>
                    <li>Creating SQL CRUD for a Vocational High School Internship Decision System</li> */}
                </ul>
                <div className="flex justify-end">
                    <SocialButton type="github"
                    url="https://github.com/Hansengunawan/UAS_WEB"/>
                </div>
            </div>

            <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-md">
                <Image src={acpro2} alt="pro3" className="w-auto rounded-md mb-3 shadow-sm" priority></Image>
                <div className="flex items-center gap-2 mb-3">
                    <HiFolder className="text-green-500 text-xl" />
                    <h3 className="font-semibold text-lg">Machine Learning & Deep Learning | Python</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                    <li>Sales Forecast for PT XYZ&apos;S Decorative Products using the CNN-LSTM Method </li>
                    <li>Optimization using the Taguchi method to find the optimal combination of hyperparameters</li>
                    <li>Comparison with the SARIMA method using MAE and RMSE metrics</li>
                </ul>
                <div className="flex justify-end">
                    <SocialButton type="github"
                    url="https://github.com/Hansengunawan/Sales-Forecast-CNN-LSTM"/>
                </div>
            </div>
            
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-md">
                <Image src={project4} alt="pro4" className="w-auto rounded-md mb-3 shadow-sm" priority></Image>
                <div className="flex items-center gap-2 mb-3">
                    <h3 className="font-semibold text-lg">Personal WEBSITE</h3>
                </div>
                <h2>This portfolio serves as a platform to showcase my journey in the world of technology, from my projects and experiences to my ever-evolving skills</h2>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 mt-2 mb-16">
                    <li>Tech Stack : Next.js, Tailwind CSS, </li>
                </ul>
                <div className="flex justify-end">
                    <SocialButton type="github"
                    url="https://github.com/Hansengunawan/Sales-Forecast-CNN-LSTM"/>
                </div>
            </div>

        </div>
    </section>
    );
}