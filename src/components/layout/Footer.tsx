import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex">
      <a href="https://github.com/leonardommascarenhas">
        <AiOutlineGithub />
      </a>
      <a href="https://www.linkedin.com/in/leonardo-moura-b315a4154/">
        <BsLinkedin />
      </a>
      <a href="https://www.instagram.com/leonardommascarenhas/">
        <AiOutlineInstagram />
      </a>
    </div>
  );
};

export default Footer;
