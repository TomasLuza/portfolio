import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import ProjectsSection from "./sections/ProjectsSection";
import BlogsSection from "./sections/BlogsSection";
import Footer from "./components/Footer";


function Landing(){
    return(
        <>
        <header>
            <Navbar />
        </header>
        <main>
            <HeroSection />
            <AboutSection />
            <SkillSection />
            <ProjectsSection />
            <BlogsSection />
            <Footer />
        </main>
        </>
    )
}

export default Landing;