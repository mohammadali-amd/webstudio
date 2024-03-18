import Footer from '@/components/Footer';
import Header from '@/components/Header';
import AboutUs from '@/sections/AboutUs';
import Blog from '@/sections/Blog';
import ContactUs from '@/sections/ContactUs';
import HomePage from '@/sections/Home/index';
import Pricing from '@/sections/Pricing';
import Projects from '@/sections/Projects';
import Services from '@/sections/Services';
import Team from '@/sections/Team';

export default function Home() {
  return (
    <main>
      <Header />
      <HomePage />
      <AboutUs />
      <Services />
      <Projects />
      <Pricing />
      <Team />
      <Blog />
      <ContactUs />
      <Footer />
    </main>
  );
}