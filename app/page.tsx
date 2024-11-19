import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <BackToTopButton />
    </div>
  );
}
