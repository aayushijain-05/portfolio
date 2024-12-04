import { Intro } from "../components/Intro";
import { Navbar } from "../components/Navbar";
import { CardItems } from "../components/CardItems";
import { Video } from "../components/Video";
import { Video1 } from "../components/Video1";
import { CardImg } from "../components/CardImg";
import Scroll from "../components/Scroll";
import Card from "../components/Card";
import gallery1 from "../assets/gallery1.jpeg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.png";
import gallery4 from "../assets/gallery4.png";
import gif1 from "../assets/gif1.gif";
import gif2 from "../assets/gif2.gif";
import gif3 from "../assets/gif3.gif";
import gif4 from "../assets/gif4.gif";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Intro />

      <div className="px-6 md:px-40 mt-20">
        <h1 className="text-3xl font-extrabold text-gray-600 pt-10 border-b-2 border-zinc-600 font-changa">
          CASE STUDIES
        </h1>
      </div>
      <Link to="/project2">
        <CardItems
          type={Video}
          title="Allura Case Studies"
          subtitle="Allura coffee app"
          description='"Coffee Made for the Soul"'
        />
      </Link>
      <Link to="/project1">
        <CardItems type={Video1} title="Zura Case Studies" subtitle="Zura music app" description='"Live Life Loud"' />
      </Link>
      <Link to="/project3">
        <CardItems
          type={CardImg}
          title="ES Jewelry"
          subtitle="Es jewelry was a project Aimed to create a brand that incorporates unique cultural heritage"
          description=""
        />
      </Link>

      <div className="px-6 lg:mx-32">
        <h1 className="text-3xl font-extrabold text-gray-600 pt-10 border-b-2 border-purple-900 font-changa">
          GALLERY
        </h1>
        <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-5">
          <Link to="/illustrations">
            <Card
              className="bg-customPurple"
              heading="ILLUSTRATIONS"
              subtitle="Creativity is a constant evolution of progress."
              imgArray={[gallery1, gallery2, gallery3, gallery4]}
            />
          </Link>
          <Link to="/graphics">
            <Card
              className="bg-customBlue"
              heading="MOTION GRAPHICS"
              subtitle="Creativity is forever work in progress."
              imgArray={[gif1, gif2, gif3, gif4]}
            />
          </Link>
        </div>
      </div>
      <div className="mt-32">
        <Footer />
      </div>
      <Scroll />
    </div>
  );
};
