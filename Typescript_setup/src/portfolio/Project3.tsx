import CaseStudy from "./CaseStudy";
import es2 from "../assets/es2.png";
import es3 from "../assets/es3.png";
import es4 from "../assets/es4.png";
import es5 from "../assets/es5.png";
import es1 from "../assets/es1.png";
import es6 from "../assets/es6.png";
import es7 from "../assets/es7.png";
import gif5 from "../assets/gif5.gif";
import gif6 from "../assets/gif6.gif";
import gallery2 from "../assets/gallery2.jpg";
import BrandMockups from "./BrandMockups";
import BrandOverview from "./BrandOverview";
import OtherProjects from "./OtherProjects";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Scroll from "../components/Scroll";

const Project3 = () => {
  const array = [
    { text: "1. Brand Overview", link: "#brandoverview" },
    { text: "3. Brand Mockup", link: "#" },
  ];
  const gifArray = [
    { image: gif6, link: "/project2" },
    { image: gif5, link: "/project1" },
    { image: gallery2, link: "/illustrations" },
  ];
  const mockupArray = [es2, es3, es4, es5, es1];
  const imgArray = [es6, es7, es5];
  const textArray = [
    {
      text: "PROJECT",
      description: "Zura is a music/audio streaming mobile application to create an immersive artistic experience.",
    },
  ];
  return (
    <div>
      <Navbar />
      <CaseStudy
        name="ES JEWELRY"
        description="ES jewelry was a project aimed to create a brand that incorporates a cultural heritage and to convey natural elements with classy features."
        array={array}
        img={es1}
      />

      <div className="px-6 md:px-40">
        <BrandOverview array={imgArray} textArray={textArray} />
        <BrandMockups array={mockupArray} />
        <OtherProjects array={gifArray} />
      </div>
      <div className="mt-32">
        <Footer />
      </div>
      <Scroll />
    </div>
  );
};

export default Project3;
