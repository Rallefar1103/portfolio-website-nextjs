import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";

export default function Home() {
  return (
    <>
      <Intro />
      <About />
      <Experience />
      <Skills />
    </>
  );
}
