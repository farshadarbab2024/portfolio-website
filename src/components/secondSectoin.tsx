import AboutMe from "./aboutMe";
import Projects from "./projects";

function SecondSection(){
    return(
        <section className="w-[85vw] mx-auto">
            <AboutMe />
            <hr className="mt-16" />
            <Projects />
        </section>
    ) ; 
}

export default SecondSection ; 