import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#0b1a2f] text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* LEFT */}
        <div>
          <h2 className="text-3xl font-bold text-white leading-tight">
            Hansen
          </h2>

          <h3 className="mt-6 text-xl font-semibold text-white">
            Contact
          </h3>

          <p className="mt-3">hanseenns07@gmail.com</p>
          <p>Jakarta Barat</p>
        </div>

        {/* MIDDLE */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Kategori Tulisan
          </h3>

          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Programming</li>
            <li className="hover:text-white cursor-pointer">Technologies</li>
            <li className="hover:text-white cursor-pointer">Data Analytics</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Tautan
          </h3>

          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer"><Link href="/">
              Home</Link>
            </li>
            <li className="hover:text-white cursor-pointer"><Link href="/#about">
              About Me
            </Link>
            </li>
            <li className="hover:text-white cursor-pointer"><Link href="/#education">
              Education
            </Link>
            </li>
            <li className="hover:text-white cursor-pointer"><Link href="/#experience">
              Experience
            </Link>
            </li>
            <li className="hover:text-white cursor-pointer"><Link href="/#portofolio">
              Portfolio
            </Link>
            </li>
            <li className="hover:text-white cursor-pointer"><Link href="/#contact">
              Contact
            </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* LINE */}
      <div className="border-t border-gray-700"></div>

      {/* SOCIAL */}
      <div className="flex flex-col items-center py-8">
        <div className="flex gap-4">

          {[
            { icon: <FiPhone />, link: "#" },
            { icon: <FaEnvelope />, link: "#" },
            { icon: <FaLinkedin />, link: "#" },
            { icon: <FaGithub />, link: "#" },
            { icon: <FaInstagram />, link: "#" },
            { icon: <FaYoutube />, link: "#" },
            { icon: <FaTwitter />, link: "#" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="
                w-12 h-12 flex items-center justify-center
                border border-gray-500 rounded-full
                hover:bg-white hover:text-black
                transition duration-300
              "
            >
              {item.icon}
            </a>
          ))}
        </div>

        <p className="mt-6 text-sm text-gray-400">
          Dibuat oleh{" "}
          <span className="text-purple-400 font-medium">
            Hansen
          </span>{" "}
          menggunakan{" "}
          <span className="text-sky-400 font-medium">
            Tailwind CSS
          </span>
        </p>
      </div>
    </footer>
  );
}