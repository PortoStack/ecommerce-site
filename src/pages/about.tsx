import { ElementTranstion } from "../components/ui/Animation";
import { ImageContainer } from "../components/ui/Container";

export const About = () => {

  const missions = ["Quality and Variety", "Expert Guidance", "Sustainable Practices", "Experienced Team"];
  const cores = [
    { label: "Passionate About Work", desc: "Passion for work is a enthusiasm and excitement for what you do." },
    { label: "Creative team members", desc: "A creative team is to design and execute campaigns & encourage" },
    { label: "Innovation solutions", desc: "Using either completely concepts finding new ways of using existing" },
    { label: "Qualitiful products", desc: "Product quality refers to how well a product satisfies our customer" },
    { label: "Customer satisfaction", desc: "Happy customers are delighted because of the customer service" },
    { label: "Simplicity interface", desc: "Simplicity is used loosely to refer to the need to minimize a process" },
  ]

  return (
    <div>
      {/* Hero section */}
      <ImageContainer
        src="/assets/about-bg.jpg"
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
            <div className="text-2 font-medium">ABOUT</div>
            <div className="text-4 font-bold">We are Passionate About Our Work</div>
          </div>
        </ElementTranstion>
      </ImageContainer>
      {/* About section */}
      <div className="relative grid p-16 overflow-hidden">
        <ElementTranstion
          className="relative left-60"
          x={-100}
          duration={.5}
        >
          <img src="/assets/section-bg-2.jpg" alt="Not found image" className="h-[70vh] w-[500px] object-cover" />
        </ElementTranstion>
        <ElementTranstion
          className="absolute top-40 left-160 w-[600px]"
          x={100}
          duration={.5}
        >
          <div className="grid p-8 gap-4 border-8 border-theme-1 bg-white">
            <div className="text-2">We strive to provide our customers with the highest quality</div>
            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, odit reiciendis eligendi odio, accusamus doloremque ipsam repellat eveniet ratione saepe facilis vero quaerat corrupti unde optio, aperiam sunt labore voluptatibus.</div>
            <hr />
            <div>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, voluptatum."</div>
          </div>
        </ElementTranstion>
      </div>
      {/* Our Core section */}
      <div className="flex flex-col items-center px-16 py-8 bg-theme-2">
        <div className="text-2 font-medium">Our Core Values that Drive Everything We Do</div>
        <div className=" grid grid-cols-3 gap-8 py-8">
          {cores.map((item, index) => (
            <ElementTranstion
              className="relative before:absolute before:h-full before:w-1 before:bg-theme-3 before:left-0 px-6"
              key={index}
              y={100}
              duration={.5}
              delay={.1 * index}
            >
              <div className="font-medium text-1.5">{item.label}</div>
              <div>{item.desc}</div>
            </ElementTranstion>
          ))}
        </div>
      </div>
      {/* Our Mission section */}
      <div className="relative grid p-16 overflow-hidden">
        <ElementTranstion
          className="relative left-160"
          x={100}
          duration={.5}
        >
          <img src="/assets/section-bg-2.jpg" alt="Not found image" className="h-[70vh] w-[500px] object-cover" />
        </ElementTranstion>
        <ElementTranstion
          className="absolute top-50 right-160 w-[600px]"
          x={-100}
          duration={.5}
        >
          <div className="grid p-8 gap-8 border-8 border-theme-1 bg-white">
            <div className="grid gap-4">
              <div className="text-2">Our Mission</div>
              <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, odit reiciendis eligendi odio, accusamus doloremque ipsam repellat eveniet ratione saepe facilis vero quaerat corrupti unde optio, aperiam sunt labore voluptatibus.</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {missions.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="p-1 border-4 border-theme-3 rounded-full bg-theme-2"></div>
                  <div>{item}</div>
                </div>
              ))}
            </div>
          </div>
        </ElementTranstion>
      </div>
    </div>
  );
}