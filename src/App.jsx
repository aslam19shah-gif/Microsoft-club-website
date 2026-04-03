import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Team from "./components/Team";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [dark, setDark] = useState(false);
  const [page, setPage] = useState("home"); // 👈 page control

  // Dark mode logic
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <>
      <Navbar 
        dark={dark} 
        setDark={setDark} 
        setPage={setPage} 
        page={page}
      />

      {page === "home" && (
        <>
          <Hero setPage={setPage} />
          <Footer />
        </>
      )}

      {page === "team" && <Team />}
      {page === "projects" && <Projects />}
      {page === "contact" && <Contact />}
    </>
  );
}

export default App;