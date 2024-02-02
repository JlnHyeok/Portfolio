import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, navBarOpen, setNavbarOpen }) => {
  return (
    <ul
      className={`${
        navBarOpen ? "h-[150px] py-4" : "h-0 pointer-events-none"
      } flex flex-col items-center z-50 duration-500  overflow-hidden `}
    >
      {links.map((link, index) => (
        <li
          key={index}
          className="w-full flex justify-center"
          onClick={() => setNavbarOpen(false)}
        >
          <NavLink href={link.path} title={link.title} className />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
