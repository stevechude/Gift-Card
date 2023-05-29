import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const sect6 = [
  {
    text: "I gifted the family package to my younger brother, and he could download all mobile applications at ease.",
    image: "/images/section6/eniola.svg",
    name: "Eniola Salami",
    store: "APP STORE",
  },
  {
    text: "Gifted my boyfriend this gift card, glad to see all his preferences as I customised it. He loves it so much.",
    image: "/images/section6/maryanne.svg",
    name: "Maryann James",
    store: "PLAYSTATION",
  },
  {
    text: "I gifted the family package to my younger brother, and he could download all mobile applications at ease.",
    image: "/images/section6/peter.svg",
    name: "Peter Raymond",
    store: "SPOTIFY",
  },
  {
    text: "I gifted the family package to my younger brother, and he could download all mobile applications at ease.",
    image: "/images/section6/chimsidi.svg",
    name: "Chimsidi Ogo",
    store: "JUMIA",
  },
];

function Section6() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const CustomButtonGroup = ({ next, previous }) => (
    <div className="custom-button-group">
      <button onClick={previous} style={{ backgroundColor: "red" }}>
        Previous
      </button>
      <button onClick={next} style={{ backgroundColor: "green" }}>
        Next
      </button>
    </div>
  );

  return (
    <section className="flex flex-col gap-4 justify-center align-middle mt-40 mb-20 md:mx-24">
      <div className="md:mx-auto md:w-[800px]">
        <Carousel
          showDots={false}
          responsive={responsive}
          arrows={true}
          customButtonGroup={<CustomButtonGroup />}
        >
          {sect6.map((details, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-center gap-4 md:gap-8"
            >
              <p className="font-bold text-xl text-center md:text-2xl">
                {details.store}
              </p>
              <p className="text-6B6B6B text-xs text-center w-[200px] md:text-base md:w-[350px] mx-auto">
                {details.text}
              </p>
              <div className="flex gap-3 justify-center align-middle">
                <Image
                  src={details.image}
                  alt={details.name}
                  width={16.17}
                  height={16.17}
                  className="md:w-[38px] md:h-[38px]"
                />
                <p className="text-[10px] font-semibold md:text-[16px] md:my-auto">
                  {details.name}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Section6;
