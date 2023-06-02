import { useEffect, useState, useRef } from "react";
import Hi from "../../assets/Images/Hi.png";

const ContactMeModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const handleClose = () => {
    modalRef.current?.classList.remove("animate-modalOpen");
    modalRef.current?.classList.add("animate-modalClose");
    document.body.classList.remove("overflow-hidden");
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  return (
    <>
      {isOpen && (
        <section className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen flex justify-center items-center z-40">
          <div className="bg-black opacity-70 fixed inset-0 z-40" onClick={handleClose}></div>
          <div
            ref={modalRef}
            className={`flex flex-col lg:flex-row justify-center items-center gap-3 z-50 w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 animate-modalOpen`}
          >
            <img className="rounded-full w-16" src={Hi} alt="Hi" />
            <div className="w-full h-[50vh] sm:h-[70vh] md:h-[60vh] bg-slate-500 shadow-lg rounded-xl pt-24">
              <p className="opacity-0 animate-rightLeft delay-300 fill-mode-forwards">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio excepturi cupiditate dolor
                laborum libero delectus blanditiis voluptates consequuntur, saepe omnis a. Rerum dolorem
                eveniet accusantium consectetur maiores omnis amet et.
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ContactMeModal;
