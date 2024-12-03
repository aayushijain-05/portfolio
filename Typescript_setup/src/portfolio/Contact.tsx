import cat from "../assets/cat.gif";
import { Label } from "../components/Label";
import { Input } from "../components/Input";
import Footer from "../components/Footer";
import TextArea from "../components/TextArea";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Navbar } from "@/components/Navbar";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center px-10">
        <img src={cat} className="w-32 h-32 mt-20" />
        <p className="font-semibold text-4xl mt-5 text-gray-700 font-lato">Let's Stay Connected!</p>
        <p className="text-sm mt-2 text-gray-700 font-lato">
          Say hi and let's have a conversation. I would love to hear from you.
        </p>
        <div className="grid grid-cols-2 mt-10 px-6 lg:w-1/2 w-96 lg:px-20 gap-6">
          <div className="flex flex-col">
            <Label type="first name" />
            <Input type="text" name="firstname" />
          </div>
          <div className="flex flex-col">
            <Label type="last name" />
            <Input type="text" name="lastname" />
          </div>
          <div className="flex flex-col">
            <Label type="email" />
            <Input type="text" name="email" />
          </div>
          <div className="flex flex-col">
            <Label type="phone number" />
            <Input type="text" name="phone number" />
          </div>
          <div className="flex flex-col col-span-2">
            <Label type="message" />
            <TextArea />
          </div>
        </div>
        <Button className="bg-footer text-white p-3 mt-5">Submit</Button>
        <p className="mt-20 text-gray-700 font-semibold text-2xl font-lato">OR</p>
        <p className="mt-4 text-gray-700 font-lato">Say hi with one of the following!</p>
        <div className="grid grid-cols-3 gap-3">
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

      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
};
export default Contact;
