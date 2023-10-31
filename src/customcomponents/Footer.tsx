import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import FastFoodzLogo from "../assets/fastfoodz.png";

const Footer = () => {
  return (
    <footer className="w-3/5 mx-auto py-3 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <img className="h-12" src={FastFoodzLogo} />
        <p className="text-2xl font-black tracking-tight text-orange-500">
          FastFoodz
        </p>
      </div>
      <div id="social-links" className="text-4xl flex items-center space-x-5">
        <a
          className="text-gray-400 hover:text-cyan-700"
          href="https://www.linkedin.com/in/souvikdasdev/"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
        <a
          className="text-gray-400 hover:text-black dark:hover:text-white"
          href="https://github.com/dr0nser"
          target="_blank"
        >
          <AiFillGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
