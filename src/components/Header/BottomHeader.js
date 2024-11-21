import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdArrowDropright, IoMdClose } from "react-icons/io";
import { FaBed } from "react-icons/fa";
import { TbToolsKitchen3 } from "react-icons/tb";
import { MdOutdoorGrill } from "react-icons/md";

const BottomHeader = () => {
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hoveredSubMenu, setHoveredSubMenu] = useState(null);

  const categories = [
    {
      category: "Bedroom",
      icon: <FaBed />,
      menu: [
        {
          title: "Bedroom Essentials",
          items: [
            {
              label: "Luxurious Italian Bed",
              subItems: [
                { label: "Modern Design", href: "" },
                { label: "Classic Design", href: "" },
              ],
            },
            { label: "Elegant Queen-size Bed", href: "" },
          ],
        },
      ],
    },
    {
      category: "Outdoor",
      icon: <MdOutdoorGrill />,
      menu: [
        {
          title: "Outdoor Furniture",
          items: [
            {
              label: "Sleek Italian Outdoor Bed",
              subItems: [
                { label: "Weatherproof", href: "" },
                { label: "Eco-Friendly", href: "" },
              ],
            },
          ],
        },
      ],
    },
    {
      category: "Kitchen",
      icon: <TbToolsKitchen3 />,
      menu: [
        {
          title: "Kitchenware",
          items: [
            {
              label: "Gourmet Italian Bed",
              subItems: [
                { label: "Premium Wood", href: "" },
                { label: "Modern Style", href: "" },
              ],
            },
          ],
        },
      ],
    },
  ];

  const closeSubMenu = () => {
    setDesktopMenuOpen(false);
    setSelectedCategory(null);
  };

  const toggleDesktopMenu = () => {
    setDesktopMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Top Nav */}
      <nav className="hidden md:block bg-[#272727]">
        <div className="container mx-auto flex items-center justify-between h-14">
          {/* Categories Button */}
          <button
            onClick={toggleDesktopMenu}
            className="ml-5 flex items-center px-4 py-2 bg-white rounded-md"
          >
            <RxHamburgerMenu className="mr-2 w-5 h-5" />
            Shop By Department
          </button>

          {/* Nav Links */}
          <div className="flex gap-8">
            {["Home", "Shop", "Blog", "About Us", "Contact Us"].map(
              (item, index) => (
                <a
                  key={index}
                  className="text-white hover:border-b  hover:text-[#EAE5D5]"
                  href="#"
                >
                  {item}
                </a>
              )
            )}
          </div>

          {/* Auth Links */}
          <div className="flex gap-4">
            <a href="" className="text-white hover:border-b  hover:text-[#EAE5D5]">
              Login
            </a>
            <span className="text-white">|</span>
            <a href="" className="text-white hover:border-b  hover:text-[#EAE5D5]">
              Sign Up
            </a>
          </div>
        </div>
      </nav>

      {/* Desktop Menu */}
      {desktopMenuOpen && (
        <section className="absolute z-30 left-0 right-0 bg-white border">
          <div className="container mx-auto flex py-5">
            {/* Categories List */}
            <div className="w-1/4 border-r">
              <ul>
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className={`flex items-center gap-2 px-4 py-2 cursor-pointer ${
                      selectedCategory === category.category
                        ? "bg-gray-200"
                        : "hover:bg-gray-100"
                    }`}
                    onMouseEnter={() => setSelectedCategory(category.category)}
                    onMouseLeave={() => setHoveredSubMenu(null)}
                  >
                    {category.icon}
                    {category.category}
                    <IoMdArrowDropright className="ml-auto" />
                  </li>
                ))}
              </ul>
            </div>

            {/* Subcategories */}
            {selectedCategory && (
              <div className="w-3/4 flex">
                {categories
                  .find((cat) => cat.category === selectedCategory)
                  ?.menu.map((submenu, index) => (
                    <div key={index} className="px-4">
                      <h3 className="font-semibold text-gray-700">
                        {submenu.title}
                      </h3>
                      <ul className="mt-2 space-y-1">
                        {submenu.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="relative group"
                            onMouseEnter={() => setHoveredSubMenu(item.label)}
                            onMouseLeave={() => setHoveredSubMenu(null)}
                          >
                            <a
                              href={item.href}
                              className="block px-2 py-1 hover:bg-gray-100"
                            >
                              {item.label}
                            </a>

                            {/* Sub-subcategories */}
                            {hoveredSubMenu === item.label &&
                              item.subItems && (
                                <ul className="absolute left-full top-0 bg-white border shadow-md">
                                  {item.subItems.map((subItem, subIndex) => (
                                    <li key={subIndex}>
                                      <a
                                        href={subItem.href}
                                        className="block px-3 py-1 hover:bg-gray-100"
                                      >
                                        {subItem.label}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            )}

            {/* Close Button */}
            <button
              onClick={closeSubMenu}
              className="absolute top-3 right-3 text-gray-700"
            >
              <IoMdClose className="w-6 h-6" />
            </button>
          </div>
        </section>
      )}
    </>
  );
};

export default BottomHeader;
