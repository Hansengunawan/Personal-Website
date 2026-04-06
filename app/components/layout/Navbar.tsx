"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY >10);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
    }
    }, []);
    

    return (
    <nav className={`px-6 py-4 sticky top-0 z-50 backdrop-blur-md bg-white/70 ${scrolled ? "shadow-lg border-b" : ""}`}>
        <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-600"><Link href="/">Hansen</Link></h1>
            
          
        {/* Desktop Menu */}
            <div className="hidden md:flex gap-9">
                <Link href="/" className={styles.navbar_text}>
                Home
                </Link>
                <Link href="/#about" className={styles.navbar_text}>
                About
                </Link>
                <Link href="/#education" className={styles.navbar_text}>
                Education
                </Link>
                <Link href="/#experience" className={styles.navbar_text}>
                Experience
                </Link>
                <Link href="/#portofolio" className={styles.navbar_text}>
                Portofolio
                </Link>
                <Link href="/#contact" className={styles.navbar_text}>
                Contact
                </Link>
            </div>

        {/* Mobile Button */}
        <button className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            ☰
        </button>
        </div>

      {/* Mobile Menu */}
        {isOpen && (
        <div className="fixed mt-4 flex flex-col gap-3 p-2 md:hidden text-gray-700 left-4 ">
            <Link href="/" className={styles.navbar_text} onClick={() => setIsOpen(false)} >Home</Link>
            <Link href="/#about"className={styles.navbar_text} onClick={() => setIsOpen(false)} >About</Link>
            <Link href="/#education" className={styles.navbar_text} onClick={() => setIsOpen(false)} >Education</Link>
            <Link href="/#experience" className={styles.navbar_text} onClick={() => setIsOpen(false)} >Experience</Link>
            <Link href="/#portofolio" className={styles.navbar_text} onClick={() => setIsOpen(false)} >Portofolio</Link>
        <Link href="/#contact" className={styles.navbar_text} onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
        )}
    </nav>
    );
}
