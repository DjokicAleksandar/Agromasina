import React from "react";
import Category from "./Category";

const categories = [
  { name: "Traktori", image: "/images/IMT-539.2-DI.webp", url: "/tractors" },
  {
    name: "Prikolice",
    image: "/images/trailer-transparent.webp",
    url: "/tractor-trailers",
  },
  {
    name: "Priključne mašine",
    image: "/images/conn1.webp",
    url: "/connecting-machines",
  },
  {
    name: "Folije",
    image: "/images/greenhouse3.webp",
    url: "/greenhouse-foil",
  },
  {
    name: "Proizvodni program",
    image: "/images/butik1.webp",
    url: "/production-program",
  },
  { name: "Apoteka", image: "/images/HERBICIDI.webp", url: "/pharmacy" },
  {
    name: "Rezervni delovi",
    image: "/images/IMT-539.2-DI.webp",
    url: "/spare-parts",
  },
  {
    name: "Montaža plastenika",
    image: "/images/montaza.webp",
    url: "/pelet",
  },
];

const CategorySelector = () => {
  return (
    <div className="w-full p-3 flex justify-center items-center">
      <div
        style={{ width: "90%", maxHeight: "350px" }}
        className="bg-white shadow-xl flex justify-between items-center flex-col md:flex-row lg:flex-row overflow-x-hidden overflow-y-auto md:overflow-x-auto lg:overflow-x-auto scrollbar-hide"
      >
        {categories.map((category, index) => {
          return <Category category={category} key={index} />;
        })}
      </div>
    </div>
  );
};

export default CategorySelector;
