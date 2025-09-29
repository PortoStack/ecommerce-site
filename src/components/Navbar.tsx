import { Link, NavLink } from "react-router";
import { motion } from "motion/react";

import { BsPerson, BsCart3 } from "react-icons/bs";
import { BASE } from "../constants/app.config";

export const Navbar = () => {

  // Options NavLink
  const options = [
    { label: "Home", to: "/" },
    { label: "Shop", to: "/shop" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  // Account Access Link
  const account = [
    { icon: <BsPerson />, to: "/login" },
    { icon: <BsCart3 />, to: "" }
  ];

  const handleToTop = () => {
    const element = document.getElementById("top");
    element?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <motion.div
      className="fixed w-screen flex justify-between items-center px-16 h-20 bg-white shadow-0240b z-[999]"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      exit={{ y: -80 }}
      transition={{ duration: .5 }}
    >
      {/* Logo company */}
      <div
        className="text-2"
        id="top"
      >
        <img src={`${BASE}/assets/logo-dotHS.png`} alt="" className="h-16" />
      </div>
      {/* Options page */}
      <div
        className="flex gap-8
          text-1"
      >
        {options.map((option) => (
          <div key={option.to} onClick={handleToTop}>
            <NavLink {...option}>{option.label}</NavLink>
          </div>
        ))}
      </div>
      {/* Account access */}
      <div
        className="flex items-center gap-4 
          text-1.5"
      >
        {account.map((item) => (
          <div key={item.to} onClick={handleToTop}>
            <Link {...item}>{item.icon}</Link>
          </div>
        ))}
      </div>
    </motion.div>
  );
}