import { FaBars } from "react-icons/fa";
import { IoGift } from "react-icons/io5";
import { useState } from "react";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-full fixed bg-white z-10">
      <div className="w-10/12 mx-6 my-10 flex justify-between align-middle md:mx-24">
        <div className="flex align-middle gap-1">
          <IoGift size={22} color={"#0C7E7E"} />
          <h3 className="text-lg text-0C7E7E font-bold font-sora">GiftCard</h3>
        </div>
        <div className="block align-middle relative md:hidden">
          {toggleMenu ? (
            <h3 onClick={() => setToggleMenu(false)}>Close</h3>
          ) : (
            <FaBars size={24} onClick={() => setToggleMenu(true)} />
          )}
          {toggleMenu && (
            <div className="flex flex-col gap-2 absolute mt-2 w-40 p-6 z-10 -right-2 bg-F2F9FD">
              <div>
                <p className="border-b py-1">Product</p>
                <p className="border-b py-1">Features</p>
                <p className="border-b py-1">Support</p>
              </div>

              <button className="text-sm py-1 bg-57D4D4 rounded-xl text-white">
                Get Gift Card
              </button>
            </div>
          )}
        </div>

        <div className="hidden md:flex w-max justify-between">
          <div className="flex gap-14 text-gray-400">
            <p>Product</p>
            <p>Features</p>
            <p>Support</p>
          </div>
        </div>
        <button className="hidden md:block w-32 py-1.5 text-sm rounded-2xl bg-33C7C7 text-white">
          Get Gift Card
        </button>
      </div>
    </nav>
  );
}

export default Header;
