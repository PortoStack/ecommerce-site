import { useEffect, useState } from "react";
import { Link } from "react-router";

// Import components
import { ImageContainer } from "../components/ui/Container";
import { ElementTranstion } from "../components/ui/Animation";
import { CustomerSayBox, ProductBox, ServiceBox } from "../components/ui/Box";

import { getProduct } from "../lib/product";
import type { ProductProps } from "../interfaces/product";

export const Home = () => {

  const services = [
    { label: "Secure Payment", desc: "All our payments our SSL secured" },
    { label: "Free Shipping", desc: "When you spend $50 or more" },
    { label: "Delivered With Care", desc: "Super fast shipping to your door" },
    { label: "Excellent Service", desc: "Live chat and phone support" },
  ];

  const reviews = [
    { src: "/assets/account/1.png", name: "Charmander", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos suscipit unde ipsum reprehenderit magni est hic animi tenetur placeat voluptas." },
    { src: "/assets/account/2.png", name: "Bulbasaur", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos suscipit unde ipsum reprehenderit magni est hic animi tenetur placeat voluptas." },
    { src: "/assets/account/3.png", name: "Squirtle", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos suscipit unde ipsum reprehenderit magni est hic animi tenetur placeat voluptas." },
    { src: "/assets/account/4.png", name: "	Pikachu", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos suscipit unde ipsum reprehenderit magni est hic animi tenetur placeat voluptas." },
  ]

  const [products, setProducts] = useState<Array<ProductProps>>();

  useEffect(() => {
    getProduct()  
      .then((res) => setProducts(res.slice(0, 4)))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {/* Hero section */}
      <ImageContainer
        src="/assets/home-bg.jpg"
        className={{
          image: "w-full h-screen",
          children: "flex justify-center w-full bottom-40"
        }}
      >
        <ElementTranstion
          className="text-20 font-bold text-white"
          y={100}
          duration={.5}
          delay={.25}
        >
          HOME
        </ElementTranstion>
      </ImageContainer>
      {/* Services section */}
      <div className="grid grid-cols-4 gap-8 p-16">
        {services.map((item, index) => (
          <ElementTranstion
            className="relative before:absolute before:h-full before:w-1 before:bg-theme-3 before:left-0"
            key={index}
            y={100}
            duration={.5}
            delay={.1 * index}
          >
            <ServiceBox {...item} />
          </ElementTranstion>
        ))}
      </div>
      {/* Popular section */}
      <div className="p-16">
        <div className="text-2 font-bold">Popular Products</div>
        <div className="grid grid-cols-4 gap-8 py-16">
          {products?.map((product, index) => (
            <ElementTranstion
              key={index}
              y={100}
              duration={.5}
              delay={.1 * index}
            >
              <ProductBox
                product={product}
                className={{ image: "min-w-[300px] max-w-[300px]" }}
              />
            </ElementTranstion>
          ))}
        </div>
      </div>
      {/* Promotion section */}
      <ImageContainer
        src="/assets/section-bg-1.jpg"
        className={{
          image: "w-full h-72 object-center object-cover",
          children: "w-full h-full top-0"
        }}
      >
        <div className="text-white bg-theme-4 w-full h-full">
          <ElementTranstion
            className="flex flex-col justify-center items-center gap-2 h-full"
            y={100}
            duration={.5}
          >
            <div className="text-2 font-bold">Sales up to 50% OFF</div>
            <div className="text-1.5 text-theme-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, nobis!</div>
            <Link to="/shop" className="py-3 px-5 my-2 rounded-full bg-theme-3 shadow-0240b">Shop now</Link>
          </ElementTranstion>
        </div>
      </ImageContainer>
      {/* Preview review section */}
      <div className="flex flex-col items-center p-16 gap-8">
        <div className="text-2 font-bold text-start w-full">What is everyone saying?</div>
        <div className={`grid grid-cols-2 gap-8`}>
          {reviews.map((review, index) => (
            <ElementTranstion
              key={index}
              y={100}
              duration={.5}
            >
              <CustomerSayBox {...review} />
            </ElementTranstion>
          ))}
        </div>
      </div>
    </div>
  );
}