import React from "react";

const ContactMeModal = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-blue-500 flex flex-col justify-center items-center z-50">
      <div className="rounded-full bg-black w-14 h-14"></div>
      <div className="w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 h-[50vh] sm:h-[70vh] md:h-[60vh] bg-black">
        {/* Content of the modal */}
      </div>
    </div>
  );
};

export default ContactMeModal;
