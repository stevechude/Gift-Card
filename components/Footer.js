import { IoGift } from "react-icons/io5";

function Footer() {
  return (
    <section className="flex flex-wrap gap-16 md:gap-0 md:justify-between mx-6 md:mx-24 my-10">
      <div className="flex flex-wrap gap-3">
        <div className="flex align-middle gap-1">
          <IoGift size={22} color={"#0C7E7E"} />
          <h3 className="text-lg text-0C7E7E font-bold font-sora">GiftCard</h3>
        </div>
        <p className="text-xs md:text-sm my-auto text-6B6B6B">
          © 1995 - 2023 GiftCard Inc. All Rights Reserved.
        </p>
      </div>
      {/* next */}
      <div className="flex gap-10 justify-around text-xs md:text-sm text-6B6B6B my-auto">
        <p>Product</p>
        <p>Features</p>
        <p>Support</p>
      </div>
    </section>
  );
}

export default Footer;
