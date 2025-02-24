import { useEffect, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  const cursorRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    let requestId;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      // Move cursor smoothly
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${clientX - 20}px, ${
          clientY - 20
        }px)`;
      }

      // Parallax effect on background
      if (bgRef.current) {
        requestId = requestAnimationFrame(() => {
          bgRef.current.style.backgroundPosition = `${
            (clientX / window.innerWidth) * 10 - 7
          }px ${(clientY / window.innerHeight) * 10 - 7}px`;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestId);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* Blurry Cursor */}
        <div
          ref={cursorRef}
          className="fixed w-10 h-10 bg-orange-500 rounded-full pointer-events-none blur-xl opacity-200 transition-transform duration-300 ease-out"
        />

        {/* Background with Mouse Movement Effect */}
        <div
          ref={bgRef}
          className="bg-hero-pattern bg-cover bg-no-repeat transition-all duration-300 ease-out">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
