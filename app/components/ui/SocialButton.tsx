import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

type SocialButtonProps = {
    type: "instagram" | "linkedin" | "github" | "whatsapp" | "cv";
    url: string;
};


const iconMap = {
    instagram: <FaInstagram size={20} />,
    linkedin: <FaLinkedin size={20} />,
    github: <FaGithub size={20} />,
    whatsapp: <FaWhatsapp size={20} />,
    cv:<FiDownload size={20}/>
};  

const colorMap = {
    instagram: "hover:bg-pink-600 shadow-md hover:scale-115 ",
    linkedin: "hover:bg-blue-600 shadow-md hover:scale-115 ",
    github: "hover:bg-gray-800 shadow-md hover:scale-115 ",
    whatsapp: "hover:bg-green-500 shadow-md hover:scale-115",
    cv:"hover:bg-gray-500 shadow-md hover:scale-115"
};

export default function SocialButton({ type, url }: SocialButtonProps) {

    if (type == "cv") {
        return (
            <a 
            href={url} 
            download
            className={`p-2 rounded-full text-gray-700 transition duration-200 shadow-sm ${colorMap[type]} hover:text-white`}>
            {iconMap[type]}

            </a>
        )            
    }
    return (
    <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`p-2 rounded-full text-gray-700 transition duration-200 shadow-sm ${colorMap[type]} hover:text-white`}
    >
        {iconMap[type]}
    </a>
    );
}