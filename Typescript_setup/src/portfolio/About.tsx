import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import AboutImg from "../assets/About.png";
import handImg from "../assets/hand.gif";
import { Link } from "react-router-dom";
import { AboutComp } from "@/components/AboutComp";

export const About = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row mt-2 w-full justify-between object-contain">
        <img src={AboutImg} className="w-1/2" />
        <div className="bg-about w-1/2 lg:pt-40 pl-9 pt-20 object-contain">
          <h1 className="text-5xl text-pink-900 italic mb-4">Hey there!</h1>
          <p className="font-blod text-3xl">I'm Enkhmaa</p>
          <p>I am an interaction designer based in Toronto, ON. </p>
        </div>
      </div>
      <div>
        <p className="m-4 text-3xl font-black text-gray-700 mt-0 px-40">ABOUT ME</p>
        <div className="gap-20 lg:flex lg:gap-44 m-6 lg:pl-40 text-sm leading-loose">
          <div className="lg:w-1/2 justify-start">
            <p>
              I was born and raised in Mongolia. I have a lengthy background in the legal field as I was a licensed
              paralegal. A few years back, I made a decision to re-route my career path.
            </p>
            <p>
              {" "}
              I find design field to be multidimensional, fluid in its forms of communication; I think that core theme
              of design field lays in its celebration of differences, individuality and uniqueness.
            </p>
            <p>
              {" "}
              I would say that my favorite part of the design process is ideation because this stage challenges our
              perspectives and understanding of the problem. But through ideation, we practice our creativity and try
              out new venues to find the best way to communicate the values and the purpose of the design.
            </p>
          </div>
          <img src={handImg} alt="image" className="flex flex-row justify-start h-48 lg:mt-10 opacity-80 animate-slide-from-top lg:justify-between " />
        </div>
        <Link to="#" className="text-center lg:mx-40 text-red-400 hover:text-red-600 border-b-2 border-red-400  hover:border-red-600">
          Download Resume
        </Link>
        <div>
          <p className="font-black text-gray-600 text-3xl mx-40 lg:pl-96 pl-60 mt-6">My Values</p>
          <div className="grid grid-cols-2 px-40 my-6 space-x-6 justify-center items-center">
            <AboutComp
              title="Creativity"
              description="Creativity is fluid and is something that constantly gets better by consistent practice. To me, creativity represents continues growth and learning because one can never run out of creativity, they can only refine it."
            />
            <AboutComp
              title="Passion"
              description=" Passion is the solution for us to live a rewarding life - passion for what we do. Life is too short to be doing something that does not feed and nurture our soul. Through passion, we can create and build a society that includes, helps, and betters others' life."
            />
          </div>
          <div className="px-40 my-6 ">
            <AboutComp
              title="Empathy & Kindness"
              description="A design that is human-center is made to solve users' needs and pain points. Ultimately, designers need to be empathic to others' situations and problems to identify a solution that would be most efficiently solve the issue.  A successful design is tested on its accessibility and functionality for its users. We must understand the uniqueness and differences of everyone. We are all on this earth together going through life, let's be kind and understanding of one another."
            />
          </div>
        </div>
        <div className="border-t-2 border-b-2 p-2 m-8 text-3xl text-center border-black mx-40">Let's Stay Connected!</div>
      </div>

      <Footer />
    </div>
  );
};
