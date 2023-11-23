import { Link } from "react-router-dom";
import ProductMobile from "../../images/product-xx99-mark-two-headphones/mobile/img-category.png";
import ProductTablet from "../../images/product-xx99-mark-two-headphones/tablet/img-category.png";
import ProductDesktop from "../../images/product-xx99-mark-two-headphones/desktop/img-category.png";
import ManImageMobile from "../../images/shared/image-gallery-1.png";
import SecondImageMobile from "../../images/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg";
import LastImageMobile from "../../images/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpeg";
import ManImageTablet from "../../images/product-xx99-mark-two-headphones/tablet/image-gallery-1.png";
import SecondImageTablet from "../../images/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg";
import LastImageTablet from "../../images/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpeg";
import XX99Mark1Mobile from "../../images/shared/mobile/image-xx99-mark-one-headphones.jpg";
import XX59Mobile from "../../images/shared/mobile/image-xx59-headphones.jpg";
import ZX9SpeakerMobile from "../../images/shared/mobile/image-zx9-speaker.jpg";
import XX99Mark1Tablet from "../../images/shared/tablet/image-xx99-mark-one-headphones.jpg";
import XX59Tablet from "../../images/shared/tablet/image-xx59-headphones.jpg";
import ZX9SpeakerTablet from "../../images/shared/tablet/image-zx9-speaker.jpg";
import XX99Mark1Desktop from "../../images/shared/desktop/image-xx99-mark-one-headphones.jpg";
import XX59Desktop from "../../images/shared/desktop/image-xx59-headphones.jpg";
import ZX9SpeakerDesktop from "../../images/shared/desktop/image-zx9-speaker.jpg";

interface Props {
  setActiveMenuRoute: (e: number) => void;
  productAmount: number;
  setProductAmount: (e: number) => void;
  // addToCart: boolean;
  setAddToCart: (e: boolean) => void;
  XX99MarkIIAmout: number;
  setXX99MarkIIAmout: (e: number) => void;
}

const HeadphoneFirstProduct = ({
  setActiveMenuRoute,
  setAddToCart,
  XX99MarkIIAmout,
  setXX99MarkIIAmout,
}: Props) => {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="px-6 md:px-10 lg:px-0 pt-4 lg:pt-[80px] md:pt-10 lg:max-w-[1110px] lg:mx-auto">
      <Link to={"/headphones"} onClick={handleLinkClick}>
        <button className="text-black text-[15px] font-medium leading-[25px] cursor-pointer bg-silver md:px-6 md:py-[15px] flex justify-center tracking-[1px] opacity-60 px-2 py-[8px]">
          Go Back
        </button>
      </Link>
      <div className="flex flex-col mt-6 md:flex-row w-full md:gap-[70px] lg:gap-[125px] md:justify-center md:items-center ">
        <div className="mb-8 w-full flex justify-center">
          <img
            src={ProductMobile}
            alt="ProductImage"
            className="flex justify-center md:hidden lg:hidden  md:w-full md:h-full max-w-[400px] min-w-[320px]"
          />
          <img
            src={ProductTablet}
            alt="ProductImage"
            className="hidden md:flex lg:hidden"
          />
          <img
            src={ProductDesktop}
            alt="ProductImage"
            className="hidden md:hidden lg:flex w-full h-full max-w-2xl"
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-col gap-6">
            <h2 className="text-orange text-sm lg:text-[14px] tracking-[10px]">
              NEW PRODUCT
            </h2>
            <h1 className="text-black text-[28px] font-bold tracking-[1px] uppercase md:leading-8">
              Astro A50
            </h1>
            <p className="text-black text-[15px] md:w-[339px] lg:w-[445px] font-medium leading-[25px] opacity-50">
              Astro has succeeded with the current generation of the A50: The
              base station is extremely practical and functional because, in
              addition to its function as a USB audio interface, other sources
              such as amplifiers or smartphones can be docked via fibre-optic or
              mini-jack cable. The headphones themselves score points with very
              good wearing comfort and good sound, which can still be adjusted
              to one’s own needs thanks to the 5-band EQ. Our only criticism
              would be that the Astro Command Centre and the built-in microphone
              need a little more fine-tuning
            </p>
          </div>
          {/* Price and add to cart */}
          <div className="flex flex-col gap-8 mt-6 lg:mb-20">
            <h4 className="text-lg font-bold tracking-[1.3px] text-black">
              $ 2,999
            </h4>
            <div className="flex flex-row gap-4">
              <div className="flex flex-row justify-between p-[15px] w-[120px] bg-silver text-black text-[13px] font-bold tracking-[1px]">
                <span
                  className="cursor-pointer opacity-50"
                  onClick={() => {
                    setXX99MarkIIAmout(
                      XX99MarkIIAmout === 0
                        ? (XX99MarkIIAmout = 0)
                        : XX99MarkIIAmout - 1
                    );
                  }}
                >
                  -
                </span>
                <h6>{XX99MarkIIAmout}</h6>
                <span
                  className="cursor-pointer opacity-50"
                  onClick={() => {
                    setXX99MarkIIAmout(XX99MarkIIAmout + 1);
                  }}
                >
                  +
                </span>
              </div>
              <div onClick={handleLinkClick}>
                <button
                  onClick={() => {
                    if (XX99MarkIIAmout > 0) {
                      setAddToCart(true);
                    }
                  }}
                  className="text-white text-[13px] font-bold tracking-[1px] uppercase bg-orange w-[160px] py-[15px] hover:bg-lightOrange duration-500"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features and in the box */}
      <div className="flex flex-col gap-y-[88px] lg:flex-row lg:w-full mt-[88px] lg:gap-[125px]">
        {/* Features */}
        <div className="">
          <h1 className="text-black text-2xl md:text-[32px] font-bold leading-9 tracking-[0.8px] md:tracking-[1.1px] mb-6">
            FEATURES
          </h1>
          <p className="text-black text-[15px] lg:w-[635px] font-medium leading-[25px] opacity-50">
            The A50 headset features a flexible design with rotating ear cups
            and height adjustment, providing comfort, although ear pressure may
            result in displacement during abrupt movements. Controls include a
            flip-to-mute microphone and easily accessible buttons for volume,
            sound presets, and surround mode. The base station serves as a
            charging dock and wireless transmitter. The battery life, although
            below the promise, offers approximately 14 hours, recharging in
            about five hours. The Astro Command Centre software allows detailed
            adjustments, from equalization to microphone settings. The
            microphone, initially with average quality, lacks significant
            adjustments. The default sound is slightly muted but adjustable
            through the equalizer. Spatial reproduction is limited in stereo
            mode but excellent for gaming, providing precise sound localization
            and an immersive experience. In summary, the A50 stands out for
            comfort, functional design, accessible controls, and solid
            performance for gaming and multimedia.
          </p>
        </div>
        {/* In the box */}
        <div className="flex flex-col md:flex-row lg:flex-col lg:space-y-2 lg:justify-normal md:justify-between">
          <h1 className="text-black text-2xl md:text-[36px] font-bold leading-9 tracking-[0.8px] md:tracking-[1.1px] mb-6 uppercase">
            in the box
          </h1>
          <div>
            <div className="flex flex-row gap-5">
              <span className="text-orange text-[15px] font-bold leading-[25px]">
                1x
              </span>
              <p className="text-black text-[15px] font-medium leading-[25px] opacity-50">
                A50 Headset
              </p>
            </div>
            <div className="flex flex-row gap-5">
              <span className="text-orange text-[15px] font-bold leading-[25px]">
                1x
              </span>
              <p className="text-black text-[15px] font-medium leading-[25px] opacity-50">
                Base station
              </p>
            </div>
            <div className="flex flex-row gap-5">
              <span className="text-orange text-[15px] font-bold leading-[25px]">
                1x
              </span>
              <p className="text-black text-[15px] font-medium leading-[25px] opacity-50">
                1.0 metre micro USB cable
              </p>
            </div>
            <div className="flex flex-row gap-5">
              <span className="text-orange text-[15px] font-bold leading-[25px]">
                1x
              </span>
              <p className="text-black text-[15px] font-medium leading-[25px] opacity-50">
                1.0 metre optical cable
              </p>
            </div>
            <div className="flex flex-row gap-5">
              <span className="text-orange text-[15px] font-bold leading-[25px]">
                1x
              </span>
              <p className="text-black text-[15px] font-medium leading-[25px] opacity-50">
                Travel Bag
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Three Image box */}
      <div className="mt-[88px] lg:mt-[120px] flex flex-col gap-6 md:flex-row">
        <div className="flex flex-col gap-6">
          <img
            src={ManImageMobile}
            alt="ManImage"
            className="h-[175px] w-full object-cover rounded-xl flex md:hidden lg:hidden"
          />
          <img
            src={ManImageTablet}
            alt="ManImage"
            className="rounded-xl w-full hidden md:flex lg:flex"
          />
          <img
            src={SecondImageMobile}
            alt="SecondImage"
            className="rounded-xl w-full flex md:hidden lg:hidden"
          />
          <img
            src={SecondImageTablet}
            alt="SecondImage"
            className="rounded-xl w-full hidden md:flex lg:flex"
          />
        </div>
        <img
          src={LastImageMobile}
          alt="SecondImage"
          className="rounded-xl w-full flex md:hidden lg:hidden"
        />
        <img
          src={LastImageTablet}
          alt="SecondImage"
          className="rounded-xl w-full max-w-[600px] object-cover hidden md:flex lg:flex"
        />
      </div>
      {/* you may also like */}
      <div className="my-[120px] mb-[100px] md:mb-[100px] lg:mb-[300px]">
        <h1 className="text-black text-2xl font-bold leading-9 uppercase text-center mb-10">
          you may also like
        </h1>
        {/* products */}
        <div className="flex flex-col md:flex-row md:mx-auto md:justify-center gap-[56px]">
          <div className="flex flex-col gap-8 justify-center items-center">
            <img
              src={XX99Mark1Mobile}
              alt="XX99Mark1"
              className="flex md:hidden lg:hidden"
            />
            <img
              src={XX99Mark1Tablet}
              alt="XX99Mark1"
              className="hidden md:flex lg:hidden w-[223px] h-[318px]"
            />
            <img
              src={XX99Mark1Desktop}
              alt="XX99Mark1"
              className="hidden md:hidden lg:flex"
            />
            <h1 className="text-black text-2xl font-bold tracking-[1.7px] uppercase">
              XX99 MARK I
            </h1>
            <Link to={"/headphones/product2"}>
              <div onClick={handleLinkClick}>
                <button
                  onClick={handleLinkClick}
                  className="text-white text-[13px] font-bold tracking-[1px] uppercase bg-orange w-[160px] py-[15px] hover:bg-lightOrange duration-500"
                >
                  See Product
                </button>
              </div>
            </Link>
          </div>
          <div className="flex flex-col gap-8 justify-center items-center">
            <img
              src={XX59Mobile}
              alt="XX99Mark1"
              className="flex md:hidden lg:hidden"
            />
            <img
              src={XX59Tablet}
              alt="XX99Mark1"
              className="hidden md:flex lg:hidden w-[223px] h-[318px]"
            />
            <img
              src={XX59Desktop}
              alt="XX99Mark1"
              className="hidden md:hidden lg:flex"
            />
            <h1 className="text-black text-2xl font-bold tracking-[1.7px] uppercase">
              XX59
            </h1>
            <Link to={"/headphones/product3"}>
              <button
                onClick={handleLinkClick}
                className="text-white text-[13px] font-bold tracking-[1px] uppercase bg-orange  hover:bg-lightOrange duration-500 w-[160px] py-[15px]"
              >
                See Product
              </button>
            </Link>
          </div>
          <div className="flex flex-col gap-8 justify-center items-center">
            <img
              src={ZX9SpeakerMobile}
              alt="XX99Mark1"
              className="flex md:hidden lg:hidden "
            />
            <img
              src={ZX9SpeakerTablet}
              alt="XX99Mark1"
              className="hidden md:flex lg:hidden w-[223px] h-[318px]"
            />
            <img
              src={ZX9SpeakerDesktop}
              alt="XX99Mark1"
              className="hidden md:hidden lg:flex"
            />
            <h1 className="text-black text-2xl font-bold tracking-[1.7px] uppercase">
              ZX9 Speaker
            </h1>
            <Link
              to={"/speakers/product1"}
              onClick={() => {
                setActiveMenuRoute(2);
              }}
            >
              <button
                onClick={handleLinkClick}
                className="text-white text-[13px] font-bold tracking-[1px] uppercase bg-orange hover:bg-lightOrange duration-500 w-[160px] py-[15px]"
              >
                See Product
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadphoneFirstProduct;
