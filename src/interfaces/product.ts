export interface ReviewProps {
  src?: string;
  rating?: number;
  like?: number;
  name?: string;
  email?: string;
  comment?: string;
}

export interface ProductProps {
  id: number;
  src?: string;
  title: string;
  price: number;
  qty: number;
  category?: string;
  desc?: string;
  reviews?: Array<ReviewProps>;
}