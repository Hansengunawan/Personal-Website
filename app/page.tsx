import Hero from './home/page';
import About from "./about/page";
import Education from "./education/page"
import ContactForm from "./contact/page"
import ExperienceSection from "./experience/page"
import Portofolio from "./portofolio/page"
import TechStack from "./components/ui/TechStack";


export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Education/>
      <ExperienceSection/>
      <Portofolio/>
      <TechStack/>
      <ContactForm/>
    </main>
  );
}
