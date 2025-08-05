import AboutMe from "./aboutMe";
import Projects from "./projects";

function SecondSection(){
    return(
        <section className="w-full bg-[#EEEEED] block pt-[20px] pr-[7.5vw] pl-[7.5vw]">
            <AboutMe />
            <hr className="mt-[90px] w-full border-[1px] border-[#B7B7B7]" />
            <Projects />
        </section>
    ) ; 
}

export default SecondSection ; 