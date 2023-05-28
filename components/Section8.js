import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function Section8() {
  return (
    <section className="flex flex-col md:flex-row mx-auto py-8 mt-[100px] border-y">
      {/* first */}
      <div className="grid grid-cols-2 mx-6 md:mx-24 md:flex md:flex-wrap py-3 my-[41px] text-xs md:text-base gap-14 md:gap-28">
        <div className="flex flex-col gap-4 text-6B6B6B">
          <p className="font-bold text-0C7E7E">Product</p>
          <p>Fashion</p>
          <p>Gadgets</p>
          <p>Home Appliances</p>
          <p>Office & Work Tools</p>
        </div>
        <div className="flex flex-col gap-4 text-6B6B6B">
          <p className="font-bold text-0C7E7E">Features</p>
          <p>Customise</p>
          <p>Delivery</p>
          <p>Apply Coupon</p>
          <p>Referral Bonus</p>
        </div>
        <div className="flex flex-col gap-4 text-6B6B6B">
          <p className="font-bold text-0C7E7E">Support</p>
          <p>Get Help</p>
          <p>FAQ</p>
          <p>Contact Us</p>
        </div>
        <div className="flex flex-col gap-4 text-6B6B6B">
          <p className="font-bold text-0C7E7E">Transparency</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Cookies</p>
        </div>

        {/* put second here & see */}
      </div>
      {/* second */}
      <div className="flex flex-col gap-6 mx-6 md:my-[41px] py-3">
        <p className="text-0C7E7E text-xs md:text-base font-bold">
          Subscribe to newsletter
        </p>
        <div className="h-[36.45px]">
          <input
            type="text"
            placeholder="Enter your email"
            className="border-0 w-[205px] bg-ECF6F6 placeholder:p-2 text-xs p-2 h-full rounded-l-md"
          />
          <button className="border-0 bg-57D4D4 text-white text-xs p-2 px-3 rounded-r-md h-full">
            Subscribe
          </button>
        </div>
        <div className="flex justify-start align-middle gap-5 mb-[41px]">
          <FaFacebookF fill="#0C7E7E" />
          <FaTwitter fill="#0C7E7E" />
          <FaYoutube fill="#0C7E7E" />
          <FaLinkedinIn fill="#0C7E7E" />
          <RiInstagramFill fill="#0C7E7E" />
        </div>
      </div>
    </section>
  );
}

export default Section8;
