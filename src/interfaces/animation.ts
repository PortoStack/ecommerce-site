import type { Children } from "./component";

export interface ElementTranstionProps {
  className?: string;
  children?: Children;
  x?: number;
  y?: number;
  duration?: number;
  delay?: number;
}