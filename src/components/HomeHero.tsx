import { motion } from "framer-motion";
import HeaderImage from "../images/home/desktop/bg-home.png";
import { Link } from "react-router-dom";

interface Props {
  setActiveMenuRoute: (e: number) => void;
}

const HomeHero = ({ setActiveMenuRoute }: Props) => {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-black flex justify-center items-center">
      {/* <motion.div > */}
      <div className="lg:mx-auto bg-black flex flex-row justify-center items-center ">
        <div
          className="bg lg:bg-none w-full flex lg:flex-row lg:w-full lg:justify-evenly 
        items-center lg:mx-0 text-center bg-black pb-14 "
        >
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 3, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col text-whiteSmoke text-center items-center lg:text-left lg:items-start">
              <h3 className="text-sm tracking-[10px] opacity-75 mb-4 text-orange">
                NEW PRODUCT
              </h3>
              <h1
                className="text-4xl lg:w-[396px] md:text-[56px] font-bold leading-10 md:leading-[58px] tracking-[1.3px] 
            md:tracking-[2px] mb-6 uppercase"
              >
                ASTRO Gaming A50
              </h1>
              <p className="text-[15px] lg:w-[349px] font-medium leading-[25px] opacity-75 mb-7 lg:mb-10 w-[50%]">
                With innovative design, advanced acoustics and ergonomic
                comfort, the A50 Wireless + Base Station offers an unforgettable
                gaming experience.
              </p>
              <Link
                to={"/headphones/product1"}
                onClick={() => setActiveMenuRoute(1)}
              >
                <button
                  onClick={handleLinkClick}
                  className="w-[160px] flex lg:mx-0 justify-center items-center text-center mx-auto py-[15px] px-7 bg-orange
                  hover:bg-lightOrange duration-500 text-[13px] tracking-[1px]      font-bold uppercase"
                >
                  See Product
                </button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 3, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <div className="lg:min-w-[442px] ">
              <img
                src={HeaderImage}
                alt="HeaderImage"
                className="hidden lg:flex w-[600px] h-[400px] xl:min-w-[400px] xl:min-h-[300px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
      {/* </motion.div> */}
    </div>
  );
};

export default HomeHero;
