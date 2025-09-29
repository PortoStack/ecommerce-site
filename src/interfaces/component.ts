import type { ChangeEvent } from "react";
import type { ProductProps } from "./product";

export type Children = React.ReactNode;

type ClassNameProps = {
  container?: string;
  image?: string;
  children?: string;
}

type FilterProps = {
  header?: string;
  children?: { label?: string; }[]
}

export interface ImageContainerProps {
  className?: ClassNameProps;
  src?: string;
  children?: Children;
}

export interface HiddenContainerProps {
  className?: string;
  children?: Children;
  active?: boolean;
  height?: number;
}

export interface ServiceBoxProps {
  label?: string;
  desc?: string;
}

export interface CustomerSayBoxProps {
  src?: string;
  name?: string;
  desc?: string;
}

export interface ProductBoxProps {
  product: ProductProps;
  className?: ClassNameProps;
}

export interface SearchBoxProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface FilterBoxProps {
  filters?: Array<FilterProps>;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface PaginationBoxProps {
  length?: number;
  total?: number;
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
}