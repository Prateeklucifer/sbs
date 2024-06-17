"use client"

import React, { useEffect, useState } from "react";

export default function AboutCmp() {
  const [About, setAbout] = useState(undefined);

  const getAbout = async () => {
    let res = await fetch("http://localhost:3000/api/about");
    let data = await res.json();
    setAbout(data.data);
  };

  useEffect(() => {
    getAbout();
  }, []);

  return (
    <div className="md:bg-about-pattern bg-left-top bg-no-repeat bg-fixed top-0 bg-[#3F0BCF] md:bg-fixed md:bg-bottom text-white px-4 mt-5 pt-16 md:flex">
      <div className="left md:w-1/2 md:flex flex-col justify-center ">
        <div className="heading text-4xl font-semibold">
          {About && About[0].mainTitle}
        </div>
        <div className="para mt-6">
          {About && About[0].para1}
        </div>
        <div className="button mt-4 font-bold">READ MORE</div>
      </div>
      <div className="right mt-8 md:w-1/2 flex justify-center items-center">
        <img src="/about.png" alt="" className="md:sm:w-96 md:w-[45rem]" />
      </div>
    </div>
  );
}
