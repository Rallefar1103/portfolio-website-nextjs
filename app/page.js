import About from "./components/about/about";
import Blog from "./components/blog/blog";
import Experience from "./components/experience/experience";
import Footer from "./components/footer/footer";
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio";
import Skills from "./components/skills/skills";

export default function Home() {
  return (
    <>
      <Intro />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Blog />
      <Footer />
    </>
  );
}
