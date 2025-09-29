import type { FormEvent } from "react";
import type { PaginationBoxProps } from "../../interfaces/component";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const Pagination = (props: PaginationBoxProps) => {

  const totalpage = Math.floor((props.length || 0) / (props.total || 0) + 1);

  const handleToSection = () => {
    const element = document.getElementById("top");
    element?.scrollIntoView({ behavior: "smooth" });
  }

  const nextPage = (event: FormEvent) => {
    event.preventDefault();
    handleToSection();
    props.setPageNumber(props.pageNumber === totalpage ? totalpage : props.pageNumber + 1);
  }

  const prevPage = (event: FormEvent) => {
    event.preventDefault();
    handleToSection();
    props.setPageNumber(props.pageNumber === 1 ? 1 : props.pageNumber - 1);
  } 

  return (
    <div className="flex justify-center items-center gap-8">
      <div
        className={`pagination-btn ${props.pageNumber === 1 && "opacity-0"}`}
        onClick={prevPage}
      >
        <IoIosArrowBack />
      </div>
      <div
        className={`pagination-btn ${props.pageNumber === totalpage && "opacity-0"}`}
        onClick={nextPage}
      >
        <IoIosArrowForward />
      </div>
    </div>
  );
}