// type ProductProps = {
//   id: number;
//   createdAt: Date;
//   updatedAt: Date;
//   title: string;
//   description: string;
//   attribute: string;
//   images: string;
//   price: number;
//   oldPrice: number | null;
//   published: boolean;
//   categoryId: number;
// };

type ProductProps = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  description: string;
  attribute: string;
  images: string;
  price: number;
  oldPrice: number | null;
  colors: string | null;
  published: boolean;
  categoryId: number | null;
};
