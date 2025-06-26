"use client";

import React, { useEffect, useRef } from "react";
import { useThreshold } from "@/context/ThresholdContext";
import Cards from "@/components/Cards";
import WelcomeImage from "@/components/WelcomeImage";
import data from "@/data/data.json";
import CategorySelector from "@/components/CategorySelector";

//eb0909

// export const metadata: Metadata = {
//   title: "Agromasina plus, Stajkovce | Poljoprivredna mehanizacija i delovi",
//   description:
//     "Poljoprivredna mehanizacija, delovi, priključne mašine, folije i još mnogo toga!",
// };

const Page = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { setThreshold } = useThreshold();

  const cards = data.filter(
    (obj) =>
      obj.name == "Proizvodni program" ||
      obj.name == "Poljoprivredne mašine" ||
      obj.name == "Poljoprivredna apoteka"
  );

  useEffect(() => {
    if (ref.current) {
      const height = ref.current.offsetHeight;
      setThreshold(height);
    }
  }, [setThreshold]);

  return (
    <>
      <div
        className="w-full flex justify-center items-center flex-col gap-4"
        style={{ backgroundColor: "rgb(245, 245, 245)" }}
      >
        <div className="w-full" ref={ref}>
          <WelcomeImage />
        </div>
        <h1 className="p-3 text-3xl font-bold" style={{ width: "90%" }}>
          Kategorije
        </h1>
        <CategorySelector />
        <Cards cards={cards} isHome={true} from="" />
      </div>
    </>
  );
};

export default Page;
