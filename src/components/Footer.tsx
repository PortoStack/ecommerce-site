import { Link } from "react-router";

import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

export const Footer = () => {

  const socials = [
    { icon: <FaFacebook />, to: "" },
    { icon: <FaInstagram />, to: "" },
    { icon: <FaXTwitter />, to: "" },
    { icon: <FaYoutube />, to: "" },
  ]

  return (
    <div className="relative bg-theme-5 flex items-center justify-between h-20 px-16">
      <div className="text-white">&copy; {new Date().getFullYear()} PortoStack. All rights reserved.</div>
      <div className="flex gap-8">
        {socials.map((social, index) => (
          <Link to={social.to} key={index} className="text-white text-1.5">
            {social.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}