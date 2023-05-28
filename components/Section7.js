function Section7() {
  return (
    <section className="border-0 w-[312px] h-[334px] bg-F2F9FD flex flex-col justify-center align-middle mx-auto rounded-lg gap-8 md:mx-24 md:w-auto md:h-[319px]">
      <div className="text-center mx-auto flex flex-col gap-4">
        <p className="font-bold text-2xl w-[219px] md:w-auto md:text-4xl">
          Customise Gift Card for free
        </p>
        <p className="text-6B6B6B text-[16px] md:text-[22px]">
          Express your love, so easy!{" "}
        </p>
      </div>
      {/* <div className="flex justify-center">
        <button className="bg-57D4D4 text-white text-[11.4033px] rounded-full p-2 px-5">
          Get started
        </button>
      </div> */}
      <div className="relative w-[150px] mx-auto mt-5 flex justify-center">
        <div className="w-[24.94px] h-[13.54px] hidden md:block bg-FFD380 absolute -rotate-12 -top-1 -left-2">
          <p className="text-[7.8px] text-center text-000E1F rounded-lg">New</p>
        </div>
        <button className="bg-57D4D4 text-white text-[11.4033px] rounded-full p-2 px-5 md:px-10">
          Get started
        </button>
      </div>
    </section>
  );
}

export default Section7;
