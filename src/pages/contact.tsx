import { ElementTranstion } from "../components/ui/Animation";
import { ImageContainer } from "../components/ui/Container";
import { FeedBackFormField } from "../components/ui/FormField";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


export const Contact = () => {

  const contact = [
    { label: "+6699-999-9999", icon: <FaPhoneAlt/>, header: "Phone" },
    { label: "test@example.com", icon: <MdEmail/>, header: "Email" },
    { label: "123 TTT .Home Style co,lt", icon: <FaLocationDot/>, header: "Address" },
  ]

  return (
    <div>
      {/* Hero section */}
      <ImageContainer
        src="/assets/contact-bg.jpg"
        className={{
          image: "h-[50vh] w-screen object-cover",
          children: "flex justify-center items-center w-full h-full top-0 bg-theme-4"
        }}
      >
        <ElementTranstion
          y={100}
          duration={.5}
          delay={.25}
        >
          <div className="text-white flex flex-col items-center">
            <div className="text-2 font-medium">CONTACT</div>
            <div className="text-4 font-bold">Let's Contact</div>
          </div>
        </ElementTranstion>
      </ImageContainer>
      <div className="grid grid-cols-2 p-20">
        <div className="flex flex-col items-center gap-8">
          <div className="text-2 font-medium">Send us Message</div>
          <div className="grid gap-16">
            {contact.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="bg-theme-3 text-white text-1.5 p-3 rounded-full">{item.icon}</div>
                <div>
                  <div className="text-1.5 font-medium">{item.header}</div>
                  <div>{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          {/* Contact FormField */}
          <FeedBackFormField />
        </div>
      </div>
    </div>
  );
}