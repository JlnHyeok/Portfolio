import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center z-50">
      {links.map((link, index) => (
        <li key={index} className="w-full flex justify-center">
          <NavLink href={link.path} title={link.title} className />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
