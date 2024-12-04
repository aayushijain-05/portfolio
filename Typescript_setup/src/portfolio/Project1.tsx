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
import { Navbar } from "../components/Navbar";
import { UxResearch } from "./UxResearch";
import Persona4 from "../assets/Persona4.jpeg";
import Persona5 from "../assets/Persona5.jpeg";
import Persona6 from "../assets/Persona6.jpeg";
import { StyleGuide } from "./StyleGuide";
import font1 from "../assets/font1.png";
import font2 from "../assets/font2.png";
import font3 from "../assets/font3.png";
import font4 from "../assets/font4.png";
import font5 from "../assets/font5.png";
import font6 from "../assets/font6.png";
import user3 from "../assets/user3.png";

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
  const styleArray = [
    { image: font1, bgColor: "bg-white" },
    { image: font2, bgColor: "bg-pink-950" },
    { image: font3, bgColor: "bg-white" },
    { image: font4, bgColor: "bg-pink-900" },
    { image: font5, bgColor: "bg-white" },
    { image: font6, bgColor: "bg-pink-950" },
  ];
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
      name: "Lucy Mcray",
      age: 25,
      profession: "Contemporary Dancer",
      image: Persona4, 
      imageCreditLink: "https://www.atikhbana.com", 
      dailyActivity: [
        "Morning Exercise",
        "Commutes to dance auditions",
        "Goes to her dance studio to practice for 4 hrs.",
        "Works part-time at a restaurant 3 days a week",
      ],
      goals: [
        "Playlist suggestions for different moods and settings",
        "Personalized playlist on favorite artists while she practices/commutes",
      ],
      painPoints: [
        "Playlist on mood and vibe of the day",
        "Update on new music from her favorite artists",
        "Good music quality",
      ],
    },
    {
      name: "Jennifer Smith",
      age: 20,
      profession: "Student",
      image: Persona5, 
      imageCreditLink: "https://www.matheusferrero.com",
      dailyActivity: [
        "Taking online classes in UBC for sociology",
        "Studies for 3 to 4 hrs a day after classes",
        "Works part-time at a cafe",
        "Commutes to and from work for 1hr and 30mins daily",
      ],
      goals: [
        "Category for personalized favorite artists",
        "Recategorize most played music by time period",
      ],
      painPoints: [
        "Easily accessed playlists",
        "Update on new music similar to her favorites",
        "Low-cost streaming service",
      ],
    },
    {
      name: "Jerome Martin",
      age: 29,
      profession: "Visual Artist",
      image: Persona6, 
      imageCreditLink: "https://www.joshlawrence.com",
      dailyActivity: [
        "Works from home as a visual artist",
        "Creates new artworks daily",
        "Visits galleries for inspiration",
        "Attends art exhibitions on weekends",
      ],
      goals: [
        "Find new music for creative inspiration",
        "Easily access ambient and instrumental playlists",
        "Custom playlists for different art projects",
      ],
      painPoints: [
        "Hard to find music that suits the creative process",
        "Difficulty organizing music by genre or mood",
        "Need background music that doesn't disrupt focus",
      ],
    },
  ];

  const user = [
    {
      name: "Demi Lou",
      age: 18,
      profession: "Student",
      image: user3,
      scenario: 
        "Demi is a high school senior student. She lives with her parents in the suburbs. Since the Covid-19 pandemic, she has been attending school online and on and off in person. Due to the lockdown, she has been doing all of her school work from home. She is currently studying to attend University of Toronto for next year. She loves to listen to her favorite tunes while she studies. She loves discovering new artists and staying up to date with new releases.",
      expectations: [
        "New music release update",
        "Easy to use and aesthetically fun UI design",
        "Option to make new playlists for different moods and activities",
        "Personalized playlists for user",
        "New singles update on favorite artists"
      ],
      opportunity: [
        "Requires all users to make an account to browse the playlist",
        "Not enough playlist options displayed",
        "Improve on more personalized services"
      ],
      internalOwnership: [
        "Option to get access from Gmail or Apple account with Autofill",
        "Display the most popular playlists first",
        "Add continue listening playlist on browser",
        "Add suggestion playlist on the browser"
      ],
      credit: "Leohoho",
      
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
        <StyleGuide array={styleArray} className="border-pink-900"/>
        <BrandMockups array={mockupArray} />
        <UxResearch personas={personas} user={user} />
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
