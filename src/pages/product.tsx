import { useEffect, useState } from "react";
import { getProductByCategory, getProductById } from "../lib/product";
import { Link, useParams } from "react-router";
import type { ProductProps } from "../interfaces/product";
import { ProductBox, ReviewBox } from "../components/ui/Box";
import { ElementTranstion } from "../components/ui/Animation";
import { FaPlus } from "react-icons/fa6";
import { ReviewFormField } from "../components/ui/FormField";
import { HiddenContainer } from "../components/ui/Container";
import { BASE } from "../constants/app.config";

export const Product = () => {

  const [isOpen, toggle] = useState(false);
  const [product, setProduct] = useState<ProductProps>();
  const [productCategory, setProductCategory] = useState<Array<ProductProps>>();
  const { id } = useParams();

  useEffect(() => {
    getProductById(id)
      .then((res) => {
        setProduct(res);
        getProductByCategory(res.category)
          .then((res) => setProductCategory(res.filter((product) => product.id.toString() !== id)))
          .catch((err) => console.error(err))
      })
      .catch((err) => console.error(err))
  }, []);

  return (
    <div className="relative flex justify-center top-20">
      <div className="grid grid-cols-2 gap-x-4 p-20 w-[80vw]">
        {/* Image box */}
        <div className="flex justify-center">
          <img src={`${BASE}${product?.src}`} className="min-w-[300px] max-w-[500px]" />
        </div>
        {/* Details Product box */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Link to={"/"}>Home</Link>
            <div>/</div>
            <Link to={"/shop"}>{product?.category}</Link>
            <div>/</div>
            <div>{product?.title}</div>
          </div>
          <div className="text-1.5 font-bold">{product?.title}</div>
          <div className="text-1.5 font-bold">${product?.price}</div>
          <div>{product?.desc}</div>
          <div className="flex gap-4 py-4">
            <input type="number" className="border-2 border-theme-3 w-[50px] text-center" value={1} min={1} />
            <div className="cursor-pointer py-2 px-4 bg-theme-3 text-white rounded-full">Add to cart</div>
          </div>
          <hr />
          <div className="flex gap-2">
            <div>Category: <Link className="text-theme-3" to={"/shop"}>{product?.category}</Link></div>
          </div>
        </div>
        <div className="col-span-2 py-16">
          {/* Description scetion */}
          <div className="grid gap-2">
            <div className="text-1.5 font-medium">Description</div>
            <hr className="text-theme-1" />
            <div>{product?.desc}</div>
          </div>
          {/* Review section */}
          <div className="py-8">
            <div className="py-4 text-1.5 font-medium">Reviews ({product?.reviews?.length})</div>
            <hr className="text-theme-1" />
            <div className="grid gap-8 py-8">
              {product?.reviews?.map((review, index) => (
                <ElementTranstion
                  key={index}
                  y={100}
                  duration={.5}
                  delay={.1 * index}
                >
                  <ReviewBox key={index} {...review} />
                </ElementTranstion>
              ))}
            </div>
            <div
              className={`py-2 border-2 border-theme-1 cursor-pointer duration-300 ${isOpen ? "hover:bg-red-500" : "hover:bg-blue-500"}`}
              onClick={() => toggle(!isOpen)}
            >
              {isOpen ? (
                <div className="flex items-center justify-center gap-2">Cancel Review</div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <FaPlus />
                  Add Review
                </div>
              )}
            </div>
            <HiddenContainer active={isOpen} className="pt-4" height={450}>
              <ReviewFormField title={product?.title} />
            </HiddenContainer>
          </div>
          {/* Related products section */}
          <div>
            <div className="py-8 text-2 font-medium">Related products</div>
            <div className="grid grid-cols-5">
              {productCategory?.map((product, index) => (
                <ElementTranstion
                  key={index}
                  className="flex justify-center"
                  y={100}
                  duration={.5}
                  delay={.1 * index}
                >
                  <ProductBox
                    product={product}
                    className={{ image: "min-w-[200px] max-w-[200px]" }}
                  />
                </ElementTranstion>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}