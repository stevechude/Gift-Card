import Image from "next/image";
import Animated2 from "./Animated2";

function Section1() {
  return (
    <section className="mx-6 flex flex-col mt-20 relative md:flex-row md:justify-between md:gap-4 md:mx-24">
      <div className="flex flex-col gap-4 md:mt-24 md:gap-4">
        <h1 className="text-061818 w-64 text-3xl font-sora font-semibold md:text-6xl md:w-[464px]">
          Get digital Gifts Cards at Ease
        </h1>
        <p className="text-6B6B6B w-72 md:w-96 md:ml-1.5 md:text-base">
          Express love to friends and family all over the world, with special
          memories of gifts.
        </p>
        <div className="relative">
          <input
            type="text"
            placeholder="Search gift cards"
            className="border rounded-3xl w-72 p-2 text-sm md:w-[370px]"
          />
          <button className="border w-20 absolute right-[68px] top-1 px-2 py-1 text-sm rounded-2xl bg-33C7C7 text-white md:left-[285px]">
            search
          </button>
        </div>
      </div>
      {/* gift cards */}
      <Animated2 />
    </section>
  );
}

export default Section1;
