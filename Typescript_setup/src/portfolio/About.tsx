import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import AboutImg from "../assets/About.png";
import handImg from "../assets/hand.gif";
import { Link } from "react-router-dom";
import { AboutComp } from "@/components/AboutComp";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Scroll from "../components/Scroll";

export const About = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row mt-2 w-full justify-between object-contain">
        <img src={AboutImg} className="w-1/2" />
        <div className="bg-about w-1/2 lg:pt-40 pl-9 pt-20 object-contain">
          <h1 className="text-5xl text-pink-900 mb-4 italic">Hey there!</h1>
          <p className="font-blod text-xl font-lato">I'm Enkhmaa</p>
          <p className="font-lato">I am an interaction designer based in Toronto, ON. </p>
        </div>
      </div>
      <div>
        <p className="mt-10 text-3xl lg:text-5xl text-gray-700 lg:px-44 font-changa px-6">ABOUT ME</p>
        <div className="gap-20 lg:flex lg:gap-44 px-6 lg:m-9 lg:px-36 text-sm leading-loose">
          <div className="lg:w-3/2 justify-start">
            <p className="mt-5">
              I was born and raised in Mongolia. I have a lengthy background in the legal field as I was a licensed
              paralegal. A few years back, I made a decision to re-route my career path.
            </p>
            <p className="mt-5">
              I find design field to be multidimensional, fluid in its forms of communication; I think that core theme
              of design field lays in its celebration of differences, individuality and uniqueness.
            </p>
            <p className="mt-5">
              I would say that my favorite part of the design process is ideation because this stage challenges our
              perspectives and understanding of the problem. But through ideation, we practice our creativity and try
              out new venues to find the best way to communicate the values and the purpose of the design.
            </p>
          </div>
          <img
            src={handImg}
            alt="image"
            className="flex flex-row justify-start h-48 mt-10 opacity-80 animate-slide-from-top lg:justify-between"
          />
        </div>
        <Link to="#" className="text-center lg:mx-40 text-red-400 hover:text-red-600 sm:px-6 underline">
          Download Resume
        </Link>
        <div>
          <p className="text-gray-600 text-3xl text-center mt-20 font-changa">My Values</p>
          <div className="grid grid-cols-2 px-6 md:px-40 my-16 gap-9 justify-center items-center">
            <AboutComp
              title="Creativity"
              description="Creativity is fluid and is something that constantly gets better by consistent practice. To me, creativity represents continues growth and learning because one can never run out of creativity, they can only refine it."
            />
            <AboutComp
              title="Passion"
              description=" Passion is the solution for us to live a rewarding life - passion for what we do. Life is too short to be doing something that does not feed and nurture our soul. Through passion, we can create and build a society that includes, helps, and betters others' life."
            />
          </div>
          <div className="md:px-40 px-6">
            <AboutComp
              title="Empathy & Kindness"
              description="A design that is human-center is made to solve users' needs and pain points. Ultimately, designers need to be empathic to others' situations and problems to identify a solution that would be most efficiently solve the issue.  A successful design is tested on its accessibility and functionality for its users. We must understand the uniqueness and differences of everyone. We are all on this earth together going through life, let's be kind and understanding of one another."
            />
          </div>
        </div>
        <div className="border-t-2 border-b-2 mx-6 py-2 mt-20 md:text-3xl text-center border-black md:mx-40">
          Let's Stay Connected!
        </div>
      </div>
      <div className="md:px-80">
        <div className="grid grid-cols-3 gap-3 md:px-56 px-32 my-16">
          <Link to="#">
            <AiFillInstagram className="h-12 w-12 mt-5 fill-footer" />
          </Link>
          <Link to="#">
            <FaLinkedin className="h-10 w-11 fill-footer mt-6" />
          </Link>
          <Link to="#">
            <IoMail className="h-12 w-11 fill-footer mt-5" />
          </Link>
        </div>
      </div>
      <Footer />
      <Scroll />
    </div>
  );
};
