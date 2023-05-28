import { BsApple } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { SiAmazonaws } from "react-icons/si";
import { TiVendorMicrosoft } from "react-icons/ti";
import { FaTiktok } from "react-icons/fa";
import Image from "next/image";

function Section2() {
  return (
    <section className="border flex flex-col rounded-md bg-F2F9FD w-[312px] h-[373px] mt-16 mx-auto md:mx-24 md:w-auto md:h-[192px] md:flex-row">
      {/* top */}
      <div className="flex justify-center align-middle gap-3 mt-7 py-3 md:my-auto md:mt-16 md:gap-6 md:mx-auto">
        <div className="flex">
          <BsApple
            color="rgba(5, 6, 15, 0.32)"
            className="md:w-[26px] md:h-[26px]"
          />
          <p className="text-05060F text-sm md:text-xl">Apple</p>
        </div>
        <div className="">
          <SiAmazonaws
            size={33}
            className="md:w-[46px] md:h-[46px]"
            color="rgba(5, 6, 15, 0.32)"
          />
        </div>
        <div className="flex">
          <TiVendorMicrosoft
            color="rgba(5, 6, 15, 0.32)"
            className="md:w-[26px] md:h-[26px]"
          />
          <p className="text-sm text-05060F md:text-xl">Microsoft</p>
        </div>
        <div className="flex">
          <FaTiktok
            color="rgba(5, 6, 15, 0.32)"
            className="md:w-[26px] md:h-[26px]"
          />
          <p className="text-sm text-05060F md:text-xl">Tik Tok</p>
        </div>
      </div>
      <hr className="w-[264px] mx-auto md:my-auto md:w-[3px] md:h-[151px] md:mx-0 bg-EDEDEE" />
      {/* mid */}
      <div className="flex flex-col py-2 mb-4 md:mb-0 md:mt-8 md:mx-auto">
        <div className="flex justify-center py-4 gap-3">
          <BsStarFill size={23} fill="#57D4D4" />
          <BsStarFill size={23} fill="#57D4D4" />
          <BsStarFill size={23} fill="#57D4D4" />
          <BsStarFill size={23} fill="#57D4D4" />
          <BsStarHalf size={23} fill="#57D4D4" />
        </div>
        <p className="text-sm w-[216.84px] mx-auto text-05060F">
          Highest brands from our market of over 100,000+ products
        </p>
      </div>
      <hr className="w-[264px] mx-auto md:my-auto md:w-[3px] md:h-[151px] md:mx-0 bg-EDEDEE" />
      {/* bott */}
      <div className="flex flex-col gap-2 py-4 justify-center align-middle md:mx-auto">
        <div className="flex justify-center md:justify-start">
          <Image
            src={"/images/section2/apple.svg"}
            alt="apple-logo"
            width={32}
            height={32}
          />
          <p className="text-black font-semibold text-lg my-auto">Apple</p>
        </div>
        <div className="flex gap-1 justify-center">
          <div className="border w-[26.92px] h-[26.89px] bg-57D4D4 flex justify-center align-middle">
            <BsStarFill size={18} fill="white" className="my-auto" />
          </div>
          <div className="border w-[26.92px] h-[26.89px] bg-57D4D4 flex justify-center align-middle">
            <BsStarFill size={18} fill="white" className="my-auto" />
          </div>
          <div className="border w-[26.92px] h-[26.89px] bg-57D4D4 flex justify-center align-middle">
            <BsStarFill size={18} fill="white" className="my-auto" />
          </div>
          <div className="border w-[26.92px] h-[26.89px] bg-57D4D4 flex justify-center align-middle">
            <BsStarFill size={18} fill="white" className="my-auto" />
          </div>
          <div className="border w-[26.92px] h-[26.89px] bg-57D4D4 flex justify-center align-middle">
            <BsStarFill size={18} fill="white" className="my-auto" />
          </div>
        </div>
        <div className="text-sm text-center md:text-start">
          <p>
            Top Brand <span className="font-bold">4.9</span>{" "}
          </p>
          <p>
            <span className="font-bold">915</span> reviews
          </p>
        </div>
      </div>
    </section>
  );
}

export default Section2;
