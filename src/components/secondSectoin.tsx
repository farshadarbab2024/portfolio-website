import AboutMe from "./AboutMe";
import Projects from "./Projects";

function SecondSection() {
  return (
    <section className="w-full bg-[#EEEEED] block pt-[30px] pb-16 pr-[7.5vw] pl-[7.5vw]">
      <AboutMe />
      <hr className="mt-[90px] w-full border-[1px] border-[#B7B7B7]" />
      <Projects />
    </section>
  );
}

export default SecondSection;
