import data from "@/data/data-section3";
import Image from "next/image";
import { BsStarFill } from "react-icons/bs";

function Section3() {
  return (
    <section className="flex flex-col mt-[104px] md:mt-[174px] md:mx-24">
      <div className="flex flex-col gap-2 justify-center align-middle text-center mx-auto">
        <p className="font-bold text-xl md:text-3xl">Top Brands</p>
        <p className="text-6B6B6B text-sm md:text-lg md:w-[553px]">
          Simply place an order and have it delivered to any recipient
          residential address.{" "}
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-5 mt-[48px]">
        {data.map((info, idx) => (
          <div key={idx} className="border rounded-xl w-[285px] h-[341px]">
            <Image src={info.img} alt={info.label} width={285} height={170} />
            <div className="flex gap-1 px-4 mt-10">
              <div className="flex">
                <BsStarFill fill="#57D4D4" />
                <BsStarFill
                  fill={
                    info.stars === 5 ||
                    info.stars === 4 ||
                    info.stars === 3 ||
                    info.stars === 2
                      ? `#57D4D4`
                      : `#969696`
                  }
                />
                <BsStarFill
                  fill={
                    info.stars === 5 || info.stars === 4 || info.stars === 3
                      ? `#57D4D4`
                      : `#969696`
                  }
                />
                <BsStarFill
                  fill={
                    info.stars === 5 || info.stars === 4 ? `#57D4D4` : `#969696`
                  }
                />
                <BsStarFill fill={info.stars === 5 ? `#57D4D4` : `#969696`} />
              </div>
              <p className="text-sm md:text-base text-515153">{info.ratings}</p>
            </div>
            <div
              className="text-2xl text-000E1F px-4 py-4 font-light"
              dangerouslySetInnerHTML={{ __html: info.label }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section3;
