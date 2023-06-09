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
        <section className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen flex justify-center items-center z-40 text-justify font-poppins">
          <div className="bg-black opacity-80 fixed inset-0 z-40" onClick={handleClose}></div>
          <div
            ref={modalRef}
            className={`flex flex-col lg:flex-row justify-center items-center gap-3 z-50 w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 animate-modalOpen`}
          >
            <img className="rounded-full w-16" src={Hi} alt="Hi" />
            <div className="w-full bg-gray-100 dark:bg-gray-200 shadow-lg rounded-xl">
              <div className="opacity-0 animate-rightLeft delay-300 fill-mode-forwards p-4 flex flex-col gap-3">
                <h1 className="text-2xl font-bold">Bem-vindo à CryptoWave!</h1>
                <p>
                  Esse site foi montado com a API gratuita da CoinGecko. A versão gratuita dessa API só nos permite realizar 10 queries por minuto.
                </p>
                <p>
                  Enquanto você navega pelo site, é bom lembrar que algumas coisas podem ficar temporariamente indisponíveis ou sem acesso se a gente passar do limite da API.
                </p>
                <p>
                  Mas pode ficar tranquilo: eu fiz de tudo para garantir que as queries sejam o mais eficientes possíveis para não afetar a sua experiência.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ContactMeModal;
