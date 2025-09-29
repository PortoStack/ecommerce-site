import { Link } from "react-router";
import type { FilterBoxProps, CustomerSayBoxProps, ServiceBoxProps, ProductBoxProps, SearchBoxProps } from "../../interfaces/component";
import type { ReviewProps } from "../../interfaces/product";

import { FaRegStar, FaStar, FaBagShopping } from "react-icons/fa6";
import { BiSolidLike } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";

import { ImageContainer } from "./Container";
import { useState } from "react";

export const ServiceBox = (props: ServiceBoxProps) => {
  return (
    <div className="relative flex items-start justify-center gap-4 min-w-[300px] max-w-[300px]">
      <div className="flex flex-col gap-1">
        <div className="text-1.5 font-medium">{props.label}</div>
        <div className="text-theme-3 text-1 text-wrap w-fit overflow-hidden text-clip">{props.desc}</div>
      </div>
    </div>
  );
}

export const ProductBox = (props: ProductBoxProps) => {

  const rating = [];

  for (let i = 0; i < 5; i++) rating.push(<FaRegStar />);

  const handleToTop = () => {
    const element = document.getElementById("top");
    element?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={`flex flex-col gap-2 ${props.className?.container}`}>
      <Link to={`/product/${props.product.id}`} className="group" onClick={handleToTop}>
        <ImageContainer
          src={props.product.src}
          className={{
            container: props.className?.image,
            children: "top-3 right-3"
          }}
        >
          <div className="p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 duration-200 shadow-0240b"><FaBagShopping /></div>
        </ImageContainer>
      </Link>
      <div className="text-theme-1 font-medium flex gap-2">{props.product.category}</div>
      <div className="text-1.5 font-medium">{props.product.title}</div>
      <div className="flex items-center">
        <div className="flex text-yellow-400">{rating}</div>
      </div>
      <div>${props.product.price}</div>
    </div>
  );
}

export const CustomerSayBox = (props: CustomerSayBoxProps) => {
  return (
    <div className="flex flex-col w-[600px] p-8 gap-4">
      <div className="flex flex-col gap-4">
        <div>{props.desc}</div>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <img src={props.src} className="bg-theme-2 overflow-hidden w-15 h-15 rounded-full shadow-0240b" />
        <div className="font-medium">{props.name}</div>
      </div>
    </div>
  );
}

export const SearchBox = (props: SearchBoxProps) => {
  return (
    <div className="flex items-center gap-2 border-2 border-theme-2 p-4 w-full">
      <input type="text" className="border-2 border-theme-1 p-2 w-full" onChange={props.onChange} />
      <div className="bg-theme-3 text-white font-medium cursor-pointer py-2 px-4">Search</div>
    </div>
  )
}

export const FilterBox = (props: FilterBoxProps) => {
  return (
    <div className="sticky top-24 border-2 border-theme-2 p-4 min-w-[300px] max-w-[300px]">
      <div className="flex justify-between items-end">
        <div className="text-1.5 font-medium">Filter</div>
        <div className="text-red-500 text-1 cursor-pointer">clear</div>
      </div>
      <hr className="text-theme-1" />
      <div className="flex flex-col gap-2 py-2">
        {props.filters?.map((filter, index) => (
          <div key={index}>
            <div className="flex cursor-pointer items-center">
              <div className="font-medium">{filter.header}</div>
            </div>
            <div className="flex flex-col gap-1 py-2 px-2">
              {filter.children && (
                filter.children.map((category, index) => (
                  <label key={index} className="flex has-checked:bg-theme-3 has-checked:text-white duration-300 px-2 rounded-full gap-2 hover:bg-theme-1">
                    <input type="checkbox" onChange={props.onChange} />
                    <div>{category.label}</div>
                  </label>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="font-medium text-left w-full">Price Range</div>
        <div className="flex items-center gap-2">
          <div>$0</div>
          <input type="range" />
          <div>$100</div>
        </div>
        <div className="flex gap-2">
          <input type="number" placeholder="min" className="w-[100px] border-theme-2 border-2 px-2" />
          <div>-</div>
          <input type="number" placeholder="max" className="w-[100px] border-theme-2 border-2 px-2" />
        </div>
      </div>
    </div>
  );
}

export const ReviewBox = (props: ReviewProps) => {

  const [likeColor, setLikeColor] = useState(false);
  const [like, setLike] = useState(0);

  const rating = [];

  for (let i = 0; i < 5; i++) {
    if (i < (props.rating || 0)) {
      rating.push(<FaStar />)
    } else {
      rating.push(<FaRegStar />)
    }
  }

  const handleLikeReview = () => {
    setLikeColor(!likeColor);
    setLike(likeColor ? 0 : 1);
  }

  return (
    <div className="grid">
      <div className="flex items-center gap-2">
        <img src={props.src} alt="Not foun account" className="bg-theme-2 overflow-hidden w-15 h-15 rounded-full shadow-0240b" />
        <div>
          <div className="flex">{rating}</div>
          <div>{props.name}</div>
        </div>
      </div>
      <div className="px-17">
        {props.comment}
      </div>
      <div className="flex justify-between py-4">
        <div className="flex items-center gap-2">
          <div className={`text-1.5 duration-100 ${likeColor ? "text-blue-500" : "text-theme-3"} cursor-pointer`} onClick={handleLikeReview}><BiSolidLike /></div>
          <div>{props.like! + like}</div>
        </div>
        <div className="cursor-pointer"><BsThreeDotsVertical /></div>
      </div>
      <hr className="text-theme-1" />
    </div>
  );
}