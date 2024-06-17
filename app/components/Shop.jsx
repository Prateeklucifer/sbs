"use client"

import React, { useEffect, useState } from "react";

export default function ShopCmp() {
  const [Shop, setShop] = useState(undefined);

  const getShop = async () => {
    let res = await fetch("http://localhost:3000/api/shop");
    let data = await res.json();
    setShop(data.data);
  };

  useEffect(() => {
    getShop();
  }, []);
  return (
    <div className="px-4 mt-8 md:flex flex-row-reverse items-center justify-center container m-auto">
      <div className="left md:w-1/2 lg:px-16">
        <div className="heading text-4xl md:text-6xl font-bold text-gray-800 px-1">
         {Shop && Shop[0].mainTitle}
        </div>
        <div className="para mt-6 md:text-lg">
          {Shop && Shop[0].para1}
        </div>
        <button className="mt-4 font-bold text-gray-800 md:text-lg">
          BUY NOW
        </button>
      </div>
      <div className="right md:w-1/2">
        <img src="shop.png" alt="" />
      </div>
    </div>
  );
}
