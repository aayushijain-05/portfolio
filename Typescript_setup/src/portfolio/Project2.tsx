import { Navbar } from "../components/Navbar";
import Allura from "../assets/Allura.png";
import { Link } from "react-router-dom";
import { PathLink } from '../components/PathLink';
import { UxResearch } from "./UxResearch";
import Persona1 from "../assets/Persona1.png";
import Persona2 from "../assets/Persona2.png";
import Persona3 from "../assets/Persona3.png";

const brandArray = [
  { text: "Brand Overview", link: "/brand-overview" },
  { text: "Project Overview", link: "/project-overview" },
  { text: "Style Guide", link: "/style-guide" },
  { text: "Brand Mockup", link: "/brand-mockup" },
  { text: "UX Research", link: "/ux-research" },
  { text: "UI Designs", link: "/ui-designs" },
  { text: "Allura Demo Video", link: "/allura-demo-video" },
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
    image:Persona3,
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
    image: "https://uploads-ssl.webflow.com/6224dc742ebe526a18a9a71c/6224dc742ebe52a88ba9a7aa_lucas-sankey-SgUSl3BPILs-unsplash.jpg",
    scenario: "Sara works the morning shifts at 7 am. In the morning, Sara likes to pre-order her coffee and a drink for her co-worker on the app and goes for a pleasant walk over to the coffee shop before she heads over for her shift. On her way home after her work, she likes to pick up another drink for her walk home.",
    expectations: [
      "Easy to use navigation system",
      "Easy to understand menu selection process",
      "Contactless payment method",
      "Friendly staff, reliability, and welcoming atmosphere"
    ],
    opportunity: [
      "Onboarding phase is lengthy",
      "Large menu selection for new users",
      "Large list of ingredients"
    ],
    internalOwnership: [
      "Option to get access from Gmail or Apple account with Autofill",
      "Display the most popular items first on the menu page",
      "Only display spotlight ingredients first"
    ],
    credit: "Lucas Sankey",
    imageCreditLink: "https://unsplash.com/@lucassankey"
  },
]

export const Project2 = () => {
  return (
    <div>
      <Navbar />

      <div className="px-6 md:px-40">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-16 md:gap-2">
          <div className="grid grid-cols-1 md:w-96 md:justify-between">
            <h1 className="text-3xl font-extrabold md:pt-20 md:text-5xl text-gray-600">
              ALLURA <br />
              <span className="text-gray-600">CASE STUDY</span>
            </h1>
            <p className="text-xs leading-5 mt-5">
            Allura was a project that was inspired by my favorite corner café that I used to visit. The clientele at the café ranged from retirees to young students. It was a community café that welcomed everyone and one of those little spots where everyone says greets each other with a smile. It was located at a historic building and the atmosphere inside had many different stories. With this project, I wanted to combine classic style with modern excitement.
            </p>
          </div>

          <img src={Allura} className="mt-5 rounded-md" />
        </div>

        <p className="uppercase font-semibold text-xl mt-16 border-l-4 border-orange-200 p-6 text-gray-800">
          table of Content
        </p>
        {brandArray &&
          brandArray.map(({ text, link }) => (
            <Link to={link} key={text}>
              <PathLink text={text} />
            </Link>
          ))}

      
        <UxResearch personas={personas} user={user}/>
       
      </div>
    </div>
  );
};
