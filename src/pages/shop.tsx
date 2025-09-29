import { ElementTranstion } from "../components/ui/Animation";
import { ImageContainer } from "../components/ui/Container";
import { FilterBox, ProductBox, SearchBox } from "../components/ui/Box";
import type { ProductProps } from "../interfaces/product";
import { useEffect, useState } from "react";
import { getProduct } from "../lib/product";
import { Pagination } from "../components/ui/Pagination";

export const Shop = () => {

  const filters = [
    {
      header: "Rooms",
      children: [
        { label: "Living Room" },
        { label: "Bath Room" },
        { label: "Bedroom" },
        { label: "Kitchen" },
        { label: "Office Room" },
      ],
    },
  ];

  const [products, setProducts] = useState<Array<ProductProps>>();
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const totalProductsPerPage = 30;

  useEffect(() => {
    getProduct()
      .then((res) => setProducts(res))
      .catch((err) => console.error(err));
  }, []);

  const searchProducts = products?.filter((product) => {
    const searchTerm = search.toLowerCase();
    const productName = product?.title.toLowerCase();
    return searchTerm === '' ? products : productName.includes(searchTerm);
  });

  const pageProducts = searchProducts?.slice(pageNumber == 1 ? pageNumber - 1 : (pageNumber - 1) * totalProductsPerPage, pageNumber * totalProductsPerPage);

  return (
    <div>
      {/* Hero section */}
      <ImageContainer
        src="/assets/shop-bg.jpg"
        className={{
          image: "w-full h-[calc(100vh-12rem)] object-cover",
          children: "flex justify-center w-full bottom-16"
        }}
      >
        <ElementTranstion
          className="text-20 font-bold text-white"
          y={100}
          duration={.5}
          delay={.25}
        >
          SHOP
        </ElementTranstion>
      </ImageContainer>
      {/* Shop section */}
      <div className="flex gap-4 p-16">
        {/* Filter box */}
        <ElementTranstion
          y={100}
          duration={.5}
          delay={.25}
        >
          <FilterBox filters={filters} />
        </ElementTranstion>
        {/* Product box */}
        <div className="w-full flex flex-col gap-4">
          <ElementTranstion
            y={50}
            duration={.5}
          >
            <SearchBox onChange={(event) => setSearch(event.target.value)} />
          </ElementTranstion>
          <div className="border-2 border-theme-2 grid grid-cols-4 p-8 gap-4">
            {pageProducts?.map((product, index) => (
              <ElementTranstion
                key={index}
                className="flex justify-center"
                y={100}
                duration={.5}
                delay={.1 * index}
              >
                <ProductBox
                  product={product}
                  className={{ image: "min-w-[200px] max-w-[300px]" }}
                />
              </ElementTranstion>
            ))}
          </div>
          {/* Pagination box */}
          <Pagination
            length={products?.length}
            total={totalProductsPerPage}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
        </div>
      </div>
    </div>
  );
}