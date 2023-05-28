import Image from "next/image";

function Section4() {
  return (
    <section className="mt-[124px] flex flex-col gap-4 mb-10">
      <p className="text-000E1F font-bold text-2xl text-center w-[286px] mx-auto md:text-4xl md:w-[400px]">
        Amazing features made available to you
      </p>
      <div className="flex flex-col justify-center gap-10 md:mx-[100px] md:flex-row-reverse md:justify-between">
        {/* top */}
        <div className="mt-10 relative">
          <div className="flex absolute top-4 right-4 bg-white gap-1 justify-center align-middle border border-690811 w-[115.06px] h-[32.38px] rounded-[5.84px]">
            <Image
              src={"/images/section4/o.svg"}
              alt="o"
              width={10.65}
              height={5.85}
            />
            <p className="text-[7.018px] font-semibold">Remove Gospel genre</p>
          </div>
          <Image
            src={"/images/section4/amazing.svg"}
            alt="amazing"
            width={266.15}
            height={304.41}
            className="ml-[23.85px] mr-[81.75px] md:w-[367px]"
          />
          <div className="border absolute bottom-14 left-4 border-690811 rounded-[2.92px] text-[7.018px] text-center text-690811 font-bold w-[90.54px] h-[18.71px] bg-FFD380">
            No Extra Cost - #0
          </div>
          <div className="flex absolute bottom-7 right-9 bg-white gap-1 justify-center align-middle border border-690811 w-[115.06px] h-[32.38px] rounded-[5.84px]">
            <Image
              src={"/images/section4/o.svg"}
              alt="o"
              width={10.65}
              height={5.85}
            />
            <p className="text-[7.018px] font-semibold">
              Add 7 days subscription
            </p>
          </div>
          <div className="flex justify-center">
            <p className="font-Nanum tracking-wide leading-tight text-B37500">
              Customise gifts <br /> cards for free
            </p>
            <Image
              src={"/images/section4/arrow.svg"}
              alt="arrow"
              width={30.99}
              height={34}
            />
          </div>
        </div>
        {/* bot */}
        <div className="flex flex-col justify-center text-center md:text-left gap-4">
          <p className="font-Nanum text-000E1F">CUSTOM GIFTS</p>
          <p className="text-000E1F text-lg w-[245px] md:w-[419px] md:text-4xl mx-auto md:mx-0 font-semibold">
            Personalise your gift cards to preference
          </p>
          <p className="text-6B6B6B md:w-[376px]">
            Tap into the gift bag to share love in the most amazing way. Change
            preference to suit that special one with no extra cost.
          </p>
          <div className="relative w-[150px] mx-auto md:mx-0 mt-5">
            <div className="w-[24.94px] h-[13.54px] bg-FFD380 absolute -rotate-12 -top-1 -left-2">
              <p className="text-[7.8px] text-center text-000E1F rounded-lg">
                New
              </p>
            </div>
            <button className="bg-57D4D4 text-white text-[11.4033px] rounded-full p-2 px-5">
              Get started for free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;
