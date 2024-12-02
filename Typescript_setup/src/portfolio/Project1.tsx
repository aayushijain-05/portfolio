// import zura1 from "../assets/zura1.png";
import Footer from "../components/Footer";
import overview1 from "../assets/overview1.png";
import overview3 from "../assets/overview3.png";
import gif5 from "../assets/gif5.gif";
import gif6 from "../assets/gif6.gif";
import BrandOverview from "./BrandOverview";
import ProjectOverview from "./ProjectOverview";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.png";
import CaseStudy from "./CaseStudy";
import m1 from "../assets/m1.png";
import m2 from "../assets/m2.png";
import m3 from "../assets/m3.png";
import m4 from "../assets/m4.png";
import m5 from "../assets/m5.png";
import zura1 from "../assets/zura1.png";
import BrandMockups from "./BrandMockups";
import apple from "../assets/apple.png";
import spotify from "../assets/spotify.png";
import OtherProjects from "./OtherProjects";
import DemoVideo from "./DemoVideo";
import { Navbar } from "@/components/Navbar";
import { UxResearch } from "./UxResearch";
import Persona1 from "../assets/Persona1.png";
import Persona2 from "../assets/Persona2.png";
import Persona3 from "../assets/Persona3.png";

const Project1 = () => {
  const array = [
    { text: "1. Brand Overview", link: "#brandoverview" },
    { text: "2. Project Overview", link: "#" },
    { text: "3. Brand Mockup", link: "#" },
    { text: "4. UX Research", link: "" },
    { text: "5. UI Designs", link: "#" },
    { text: "6. Zura Demo Video", link: "#" },
  ];
  const overviewArray = [
    {
      text: "CURRENT CHALLENGE",
      description: "Zura need strong brand identity and individuality to stand apart amount its Competitors",
    },
    {
      text: "TASK",
      description:
        "Create an mobile application that is user-centered, accessible and  incorporates Zura’s values and promotes creativity.",
    },
  ];
  const taskArray = [
    {
      text: "CURRENT CHALLENGE",
      description: "Zura need strong brand identity and individuality to stand apart amount its Competitors",
    },
    {
      text: "TASK",
      description:
        "Create an mobile application that is user-centered, accessible and  incorporates Zura’s values and promotes creativity.",
    },
  ];
  const competitiveAnalysisData = [
    {
      title: "APPLE MUSIC",
      image: apple,
      strengths: [
        "Paid Subscribers can download music",
        "Large music selection",
        "Easy sync with iTunes",
        "Easy access between Apple products",
      ],
      weaknesses: [
        "Messy and inconsistent UI with Apple Brand",
        "Inconsistency between Android and Apple version",
        "No Free/Ad-Supported Tier",
      ],
    },
    {
      title: "SPOTIFY",
      image: spotify,
      strengths: [
        "Number #1 music streaming application",
        "Long-term free subscription",
        "Clear, easy and consistent UI design",
        "Accessible on multiple platforms on Both Apple and Android",
        "High Quality streaming",
      ],
      weaknesses: [
        "No lyrics Features",
        "Price can add up",
        "Prolonged ads for free account",
        "Feature limitations for free account",
      ],
    },
  ];
  const imgArray = [overview1, gif5, overview3, zura1];
  const mockupArray = [m1, m2, m3, m4, m5, overview1];
  const gifArray = [
    { image: gif6, link: "/project2" },
    { image: gallery3, link: "/project3" },
    { image: gallery2, link: "/illustrations" },
  ];
  const textArray = [
    {
      text: "PROJECT",
      description: "Zura is a music/audio streaming mobile application to create an immersive artistic experience.",
    },
    {
      text: "Value Statement",
      description: "Zura’s core value includes: compassion, Innovation, creativity and curiosity - “Live Life Loud”.  ",
    },
  ];
  const personas = [
    {
      name: "Lorry Davidson",
      age: 30,
      profession: "Author/Writer",
      image: Persona1,
      dailyActivity: [
        "Works from home remotely",
        "Does not have a fixed work schedule",
        "Goes to coffee shops to work or for a mid-day break",
      ],
      goals: [
        "Wants a place that has beverages and snacks",
        "Wants a place that's comfortable to concentrate at",
        "Wants a place where she can meet people from her community",
      ],
      painPoints: [
        "Needs a cozy place to work for a prolonged period of time",
        "Needs food and snack while she is working",
        "Needs a place where she can meet people from her community",
      ],
    },
    {
      name: "Ava Ruth",
      age: 27,
      profession: "Sales Associate",
      image: Persona2,
      dailyActivity: [
        "Commutes to work from 7:30 am to 9:00 am Monday to Friday",
        "Attends back-to-back client consultations",
        "Goes for a walk during lunch to a coffee shop",
        "On Sundays goes to a café to meet with her friends",
      ],
      goals: [
        "Wants to find easy-to-order coffee apps",
        "Wants to have a quick pick-up option",
        "Wants a new coffee shop that has personality",
        "Wants café shots that are part of the community",
      ],
      painPoints: [
        "Orders during rush hour takes too long to get her coffee",
        "Too many menu options on the app to order",
        "Does not want to try just any coffee shops",
      ],
    },
    {
      name: "Joseph Pearson",
      age: 35,
      profession: "Software Developer",
      image: Persona3,
      dailyActivity: [
        "Lives alone with his dogs",
        "Works hybrid of remote and from the office",
        "Works long hours during the day",
      ],
      goals: [
        "Wants a place that has a selection of snacks and coffee",
        "Wants a place where he can bring his dogs with him",
        "Wants quality coffee and a peaceful atmosphere",
        "Wants a coffee shop where he can easily order his favorite drinks for pick-up",
      ],
      painPoints: [
        "Needs a cozy place to work for long hours",
        "Needs a place that allows him to bring his dogs with him",
        "Does not want to compromise on quality",
        "Needs to order his favorite drinks during his commute online",
      ],
    },
  ];

  return (
    <div>
      <Navbar />
      <CaseStudy
        name="ZURA"
        name2="CASE STUDY"
        description="​Zura was a passion project that represents my love of music. The project was initially inspired by one of my foster kitten that I had. He was full of curiosity, energy and spirit, but still so comforting and loving. So, I wanted to convey, curiosity, energy but ease, and comfort with this design."
        array={array}
        img={zura1}
      />
      <div className="px-6 md:px-40">
        <BrandOverview array={imgArray} textArray={textArray} />

        <ProjectOverview
          overviewArray={overviewArray}
          taskArray={taskArray}
          competitiveAnalysisData={competitiveAnalysisData}
        />
        <BrandMockups array={mockupArray} />
        <UxResearch personas={personas} user={personas} />
        <DemoVideo name="ZURA" img={gif5} />
        <OtherProjects array={gifArray} />
      </div>
      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
};

export default Project1;
