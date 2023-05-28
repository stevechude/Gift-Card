import Image from "next/image";

function Section5() {
  return (
    <section className="flex flex-col gap-10 mt-20 md:mx-24 md:flex-row md:justify-between relative mb-10">
      {/* left / top */}
      <div className="ml-[29px] md:ml-0 relative flex flex-col">
        <Image
          src={"/images/section5/second.svg"}
          alt="picture"
          width={221.57}
          height={176.32}
          className="md:w-[382px] md:h-[304px]"
        />
        <Image
          src={"/images/section5/first.svg"}
          alt="picture"
          width={182.36}
          height={155.01}
          // absolute
          className="md:w-[314.4px] md:h-[267.25px] absolute top-28 md:top-48 right-12 md:-right-32"
          // className="right-12 md:-right-32 top-28 md:top-48 md:w-[314.4px] md:h-[267.25px]"
        />
      </div>
      {/* right / bottom */}
      <div className="text-center md:text-left mt-24 md:mt-4 flex flex-col gap-8 z-10">
        <div className="flex flex-col gap-3">
          <p className="font-Nanum text-sm md:text-[20px] text-000E1F">
            SPECIAL GIFTS
          </p>
          <p className="text-000E1F font-sora font-semibold md:text-[30px]">
            Suitable to gift loved ones <br /> on special moments
          </p>
        </div>

        {/* good */}
        <div className="flex flex-col mx-auto gap-2 text-6B6B6B text-sm md:text-2xl md:mx-0">
          <div className="flex gap-4">
            <Image
              src={"/images/section5/good.svg"}
              alt="check"
              width={18.18}
              height={19.66}
            />
            <p>Purchase at Discounts</p>
          </div>
          <div className="flex gap-4">
            <Image
              src={"/images/section5/good.svg"}
              alt="check"
              width={18.18}
              height={19.66}
            />
            <p>Share to multiple people </p>
          </div>
          <div className="flex gap-4">
            <Image
              src={"/images/section5/good.svg"}
              alt="check"
              width={18.18}
              height={19.66}
            />
            <p>Deliver at any location</p>
          </div>
        </div>
        {/* button */}
        <div>
          <button className="bg-57D4D4 text-white text-[11.4033px] rounded-full p-2 px-5">
            Get started for free
          </button>
        </div>
      </div>
    </section>
  );
}

export default Section5;
