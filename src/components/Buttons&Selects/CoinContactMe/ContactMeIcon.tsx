import { useEffect, useState } from "react";
import NotificationBall from "./NotificationBall";
import ContactMeModal from "../../Modals/ContactMeModal";

interface Props {
  image1: string;
  image2: string;
}

const ContactMeIcon = ({ image1, image2 }: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [hasNotification, setHasNotification] = useState<boolean>(true);

  const sessionStorageKey = "contactMeNotificationShown";

  useEffect(() => {
    const hasShownNotification = sessionStorage.getItem(sessionStorageKey);
    if (hasShownNotification) {
      setHasNotification(false);
    }
  }, []);

  const handleClick = () => {
    setIsActive(true);
    setHasNotification(false);
    sessionStorage.setItem(sessionStorageKey, "true");
  };

  return (
    <>
      {!isActive && (
        <div
          className="group w-16 fixed bottom-20 right-4 transition-all duration-200 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)] animate-scale cursor-pointer"
          onClick={handleClick}
        >
          <div className="absolute inset-0">
            <img
              src={image1}
              className="group-hover:opacity-0 fill-mode-forwards transition-opacity duration-150 rounded-full"
            />
          </div>
          <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <img src={image2} alt="" className="rounded-full " />
          </div>
          {hasNotification && <NotificationBall />}
        </div>
      )}
      {isActive && <ContactMeModal />}
    </>
  );
};

export default ContactMeIcon;
