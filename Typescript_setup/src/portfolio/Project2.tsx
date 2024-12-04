import { Navbar } from "../components/Navbar";
import Allura from "../assets/Allura.png";
import user1 from "../assets/user1.jpg";
import gif6 from "../assets/gif6.gif";

import { UxResearch } from "./UxResearch";
import Persona1 from "../assets/Persona1.png";
import Persona2 from "../assets/Persona2.png";
import Persona3 from "../assets/Persona3.png";

import Aura1 from "../assets/Aura1.png";
import Aura2 from "../assets/Aura2.jpeg";
import Aura3 from "../assets/gif6.gif";
import Aura4 from "../assets/Aura4.jpeg";
import Aura5 from "../assets/Aura5.png";
import BrandOverview from "./BrandOverview";
import ProjectOverview from "./ProjectOverview";
import starbucks from "../assets/starbucks.png";
import tim from "../assets/tim.png";

import Footer from "../components/Footer";
import OtherProjects from "./OtherProjects";
import gif5 from "../assets/gif5.gif";
import gallery3 from "../assets/gallery3.png";
import gallery2 from "../assets/gallery2.jpg";
import CaseStudy from "./CaseStudy";
import DemoVideo from "./DemoVideo";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo8 from "../assets/logo8.png";
import logo9 from "../assets/logo9.png";
import logo10 from "../assets/logo10.png";
import logo11 from "../assets/logo11.png";
import { StyleGuide } from "./StyleGuide";
import mock1 from "../assets/mock1.png";
import mock2 from "../assets/mock2.png";
import mock3 from "../assets/mock3.png";
import mock4 from "../assets/mock4.png";
import mock5 from "../assets/mock5.png";
import mock6 from "../assets/mock6.png";
import mock7 from "../assets/mock7.png";
import mock8 from "../assets/mock8.png";
import BrandMockups from "./BrandMockups";
import Scroll from "../components/Scroll";

const gifArray = [
  { image: gif5, link: "/project1" },
  { image: gallery3, link: "/project3" },
  { image: gallery2, link: "/illustrations" },
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

const user = [
  {
    name: "Sara Lewis",
    age: 30,
    profession: "School Bus Driver",
    image: user1,
    scenario:
      "Sara works the morning shifts at 7 am. In the morning, Sara likes to pre-order her coffee and a drink for her co-worker on the app and goes for a pleasant walk over to the coffee shop before she heads over for her shift. On her way home after her work, she likes to pick up another drink for her walk home.",
    expectations: [
      "Easy to use navigation system",
      "Easy to understand menu selection process",
      "Contactless payment method",
      "Friendly staff, reliability, and welcoming atmosphere",
    ],
    opportunity: ["Onboarding phase is lengthy", "Large menu selection for new users", "Large list of ingredients"],
    internalOwnership: [
      "Option to get access from Gmail or Apple account with Autofill",
      "Display the most popular items first on the menu page",
      "Only display spotlight ingredients first",
    ],
    credit: "Lucas Sankey",
    imageCreditLink: "https://unsplash.com/@lucassankey",
  },
];
const imgArray = [Aura1, Aura2, Aura3, Aura4, Aura5];
const textArray = [
  {
    text: "PROJECT",
    description:
      "Allura Café is a coffeehouse that incorporates the modern structure and the experience of classic Parisian style.",
  },
  {
    text: "Mission Statement",
    description:
      "Allura envisions a space where people can come together to connect and share an experience of life and culture with an aim to spread a sense of peace and comfort.",
  },
  {
    text: "Vision Statement",
    description:
      "Allura envisions a space where people can come together to connect and share an experience of life and culture with an aim to spread a sense of peace and comfort.",
  },
  {
    text: "Value Statement",
    description: "Allura’s values include community, soulfulness, kindness, culture, and individuality.",
  },
];
const overviewArray = [
  {
    text: "CURRENT CHALLENGE",
    description: "Allura Café needs to stay modern while maintaining its classic/vintage aesthetics.",
  },
  {
    text: "TASK",
    description:
      "Create a mobile application and brand packaging that is user-friendly but still represents elegance, soulfulness, and individuality.",
  },
];
const taskArray = [
  {
    text: "CURRENT CHALLENGE",
    description: "Allura Café needs to stay modern while maintaining its classic/vintage aesthetics.",
  },
  {
    text: "TASK",
    description:
      "Create a mobile application and brand packaging that is user-friendly but still represents elegance, soulfulness, and individuality.",
  },
];

const competitiveAnalysisData = [
  {
    title: "Starbucks",
    image: starbucks,
    strengths: [
      "Strong brand identity",
      "Maintains quality and customer experience",
      "Loyal customer",
      "Large menu items",
      "Globally Corp.",
    ],
    weaknesses: ["High price point", "Sometimes complicated to order", "UI is not intuitive for some customers"],
  },
  {
    title: "Tim Hortons",
    image: tim,
    strengths: [
      "Sense of local and national brand",
      "Offers both delivery and pick up service",
      "Affordable price point",
      "Globally Corp.",
    ],
    weaknesses: [
      "Lack of customizable options on some orders",
      "The loading time of the app is laggy",
      "UI is outdated",
    ],
  },
];

const styleArray = [
  { image: logo1, bgColor: "bg-white" },
  { image: logo2, bgColor: "bg-green-500" },
  { image: logo3, bgColor: "bg-pink-900" },
  { image: logo4, bgColor: "bg-pink-900" },
  { image: logo5, bgColor: "bg-white" },
  { image: logo6, bgColor: "bg-white" },
  { image: logo2, bgColor: "bg-white" },
  { image: logo8, bgColor: "bg-green-800" },
  { image: logo9, bgColor: "bg-orange-100" },
  { image: logo10, bgColor: "bg-gray-500" },
  { image: logo11, bgColor: "bg-white" },
  { image: logo2, bgColor: "bg-white" },
];
const mockupArray = [mock1, mock2, mock1, mock3, mock1, mock4, mock1, mock5, mock1, mock6, mock7, mock8];

const array = [
  { text: "1. Brand Overview", link: "#" },
  { text: "2. Project Overview", link: "#" },
  { text: "3. Brand Mockup", link: "#" },
  { text: "4. UX Research", link: "" },
  { text: "5. UI Designs", link: "#" },
  { text: "6. Zura Demo Video", link: "#" },
];

export const Project2 = () => {
  return (
    <div>
      <Navbar />
      <div>
        <CaseStudy
          name="ALLURA"
          name2="CASE STUDY"
          description="Zura was a passion project that represents my love of music. The project was initially inspired by one of my foster kitten that I had. He was full of curiosity, energy and spirit, but still so comforting and loving. So, I wanted to convey, curiosity, energy but ease, and comfort with this design."
          array={array}
          img={Allura}
        />
        <div className="px-6 md:px-40">
          <BrandOverview array={imgArray} textArray={textArray} />
          <ProjectOverview
            overviewArray={overviewArray}
            taskArray={taskArray}
            competitiveAnalysisData={competitiveAnalysisData}
          />
          <StyleGuide array={styleArray} />
          <BrandMockups
            array={mockupArray}
            height="h-full"
            className="border-2 border-orange-200 rounded-md object-cover"
          />
        </div>
        <div className="px-6 md:px-40">
          <UxResearch personas={personas} user={user} className="border-red-900" />
          <DemoVideo name="ALLURA" img={gif6} />
          <OtherProjects array={gifArray} />
        </div>
      </div>
      <div className="mt-32">
        <Footer />
      </div>
      <Scroll />
    </div>
  );
};
