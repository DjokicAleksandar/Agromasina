import React from "react";
import Image from "next/image";
import Link from "next/link";

type Category = {
  name: string;
  image: string;
  url: string;
};

type CategoryProps = {
  category: Category;
};

const Category = ({ category }: CategoryProps) => {
  return (
    <Link
      href={category.url}
      className="flex flex-row w-full md:flex-col lg:flex-col justify-between items-center h-full
      md:min-w-max px-4 py-2 md:w-[230px] lg:w-[230px] object-contain gap-1"
      style={{ borderBottom: "3px solid rgb(245, 245, 245)" }}
    >
      <Image
        width={180}
        height={180}
        src={category.image}
        alt={category.name}
        className="flex justify-center w-40 h-45 lg:w-full md:w-48 items-center object-contain aspect-3/4"
      />
      <span className="text-2xl text-center font-medium whitespace-normal md:whitespace-nowrap flex justify-center items-center w-48 lg:w-full">
        {category.name}
      </span>
    </Link>
  );
};

export default Category;
