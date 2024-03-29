import { Layout } from '@/components';
import AboutUs from '@/sections/AboutUs';
// import Blog from '@/sections/Blog';
import HomePage from '@/sections/Home/index';
import Pricing from '@/sections/Pricing';
import Projects from '@/sections/Projects';
import Services from '@/sections/Services';

export default function Home() {
  return (
    <main>
      <Layout>
        <HomePage />
        <AboutUs />
        <Services />
        <Projects />
        <Pricing />
        {/* <Blog /> */}
      </Layout>
    </main>
  );
}