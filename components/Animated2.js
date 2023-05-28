import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Power4 } from "gsap";

const Animated2 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const cards = container.querySelectorAll(".card");

    gsap.set(cards, { autoAlpha: 0, x: "-100%" });

    const timeline = gsap.timeline({ defaults: { ease: Power4.easeInOut } });

    timeline
      .fromTo(
        cards,
        { autoAlpha: 0, x: "-100%" },
        { autoAlpha: 1, x: "0%", duration: 1, stagger: 1 }
      )
      .to(cards, { autoAlpha: 0, x: "100%", duration: 1, stagger: 1 }, "+=1")
      .to(cards, { autoAlpha: 1, x: "0%", duration: 0.5, stagger: 0.5 })
      .repeat(-1);

    return () => timeline.kill();
  }, []);

  return (
    <div
      className="relative mt-[70px] md:mt-[50.03px] mb-12 self-center"
      ref={containerRef}
    >
      <div className="card psn">
        <div className="absolute bg-1F3C76 border rounded-md shadow-lg w-[219.01px] h-[165.19px] md:w-[428px] md:h-[313px] transform -rotate-6">
          <p className="text-[10px] text-center mt-6 text-white">
            PlayStation Gift Cards
          </p>
          <Image
            src={"/images/playstation.svg"}
            alt="gift-card"
            width={150}
            height={93}
            className="md:w-[321px] md:h-[200px] m-auto md:mt-8"
          />
        </div>
      </div>
      <div className="card spotify">
        <div className="absolute border rounded-md shadow-lg w-[211.52px] h-[165.19px] bg-FFB019 md:w-[422px] md:h-[307px] transform rotate-3">
          <p className="text-[10px] text-center mt-6 text-white">
            Spotify Gift Cards
          </p>
          <Image
            src={"/images/spotify.svg"}
            alt="gift-card"
            width={150}
            height={93}
            className="md:w-[321px] md:h-[200px] m-auto md:mt-8"
          />
        </div>
      </div>
      <div className="card apple">
        <div className="absolute border rounded-md shadow-lg w-[211.52px] h-[174.55px] bg-F44C4C transform -rotate-3 mt-2 md:w-[422px] md:h-[307px]">
          <p className="text-[10px] text-center mt-6 text-white">
            Apple & iTunes Gift Cards
          </p>
          <Image
            src={"/images/apple.svg"}
            alt="gift-card"
            width={150}
            height={93}
            className="md:w-[321px] md:h-[200px] m-auto md:mt-8"
          />
        </div>
      </div>
      <div className="card gift">
        <div className="border rounded-md bg-7DD1D3 shadow-xl h-[165.48px] w-[207px] transform rotate-3 mt-1.5 md:w-[421.34px] md:h-[303.61px] ">
          <p className="text-[10px] text-center mt-6 text-white">
            Special Gift Cards for you
          </p>
          <Image
            src={"/images/gift-card.svg"}
            alt="gift-card"
            width={150}
            height={93}
            className="md:w-[321px] md:h-[200px] m-auto md:mt-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Animated2;
