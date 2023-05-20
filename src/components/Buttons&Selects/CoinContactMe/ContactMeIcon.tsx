import React from "react";

interface Props {
  image1: string;
  image2: string;
}

const ContactMeIcon = ({ image1, image2 }: Props) => {
  return (
    <div className="group w-16 fixed bottom-24 right-4 transition-all duration-300 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)] cursor-pointer">
      <div className="absolute inset-0">
        <img
          src={image1}
          className="group-hover:opacity-0 fill-mode-forwards transition-opacity duration-175 rounded-full"
        />
      </div>
      <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <img src={image2} alt="" className="rounded-full " />
      </div>
    </div>
  );
};

export default ContactMeIcon;
