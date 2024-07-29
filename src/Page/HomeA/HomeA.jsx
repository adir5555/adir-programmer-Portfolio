import { useEffect, useRef } from "react";
import pdf from "../../assets/pdf/About this gig.pdf";

import medium from '../../assets/pdf/w.jpg'
import Typed from "typed.js";

const HomeA = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Adir Das Shanto",
        "I'm full stack developer",
        "Androide Developer (React.js)",
        "It'll be an immense pleasure to...",
        "work with you. Lets get started ",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>

          <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">

            <img src={medium} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeA;