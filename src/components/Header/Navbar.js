
import React, { useState } from "react";
import { CiHeart, CiSearch, CiUser } from "react-icons/ci";
import { IoBagHandleSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { text: "Home", url: "" },
    { text: "Catalog", url: "" },
    { text: "About Us", url: "" },
    { text: "Contact Us", url: "" },
  ];

  const iconLinks = [
    {
      href: "",
      icon: <CiHeart className="h-6 w-6" />,
      text: "Wishlist",
    },
    {
      href: "",
      icon: <IoBagHandleSharp className="h-6 w-6" />,
      text: "Cart",
    },
    {
      href: "",
      icon: <CiUser className="h-6 w-6" />,
      text: "Account",
    },
  ];

  return (
    <>
      <header className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-5">
        <a href="index.html" className="w-24">
            <img
            width={120}
            height={30}
              className="cursor-pointer sm:h-auto sm:w-auto"
              src={require('../../assets/images/logo.jpeg')}
              alt="company logo"
            />
           
        </a>
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <RxHamburgerMenu className="w-8 h-8" />
          </button>
        </div>
        <form className="hidden h-11 w-2/4 rounded-md overflow-hidden items-center border md:flex">
          <CiSearch className="mx-3" size={20} />

          <input
            className="hidden w-11/12 outline-none md:block"
            type="search"
            placeholder="Search"
          />
          <button className="ml-auto text-white h-full bg-[#272727] px-4">
            Search
          </button>
        </form>
        <div className="hidden gap-3 md:!flex">
          {iconLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="flex cursor-pointer flex-col items-center justify-center"
            >
              {link.icon}
              <p className="text-xs">{link.text}</p>
            </a>
          ))}
        </div>
      </header>
      {mobileMenuOpen && (
        <section
          className={`block md:hidden absolute left-0 right-0 z-50 h-screen w-full bg-white ${
            mobileMenuOpen ? "none" : "block"
          }`}
        >
          <div className="mx-auto">
            <div className="mx-auto flex w-full justify-center gap-3 py-4">
              {iconLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex cursor-pointer flex-col items-center justify-center"
                >
                  {link.icon}
                  <p className="text-xs">{link.text}</p>
                </a>
              ))}
            </div>
            <form className="my-4 mx-5 flex h-12 items-center border">
              <CiSearch className="mx-3 h-4 w-4" />

              <input
                className="hidden w-11/12 outline-none md:block"
                type="search"
                placeholder="Search"
              />
              <button
                type="submit"
                className="ml-auto h-full bg-[#272727] px-4 hover:bg-[#272727]"
              >
                Search
              </button>
            </form>
            <ul className="text-center font-medium">
              {links.map((link, index) => (
                <li key={index} className="py-2">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export default Navbar;