import "./globals.css";
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth">
      <body className={poppins.className}>
      <Navbar/>
        <main>{children}</main>
      <Footer/>
      </body>
    </html>
  );
}
