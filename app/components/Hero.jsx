"use client";

import React, { useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

export default function Hero() {
  const [crousel, setCrousel] = useState(0);

  const crousleData = [
    {
      title: "Ride the Wave",
      imageUrl: "/banner_img.png",
    },
    {
      title: "Skate, Explore, Thrive",
      imageUrl: "/banner_img.png",
    },
    {
      title: "Roll with the Flow",
      imageUrl: "/banner_img.png",
    },
  ];

  function handleNextButton() {
    if (crousel + 1 >= crousleData.length) {
      setCrousel(0);
    } else {
      setCrousel(crousel + 1);
    }
  }

  function handlePrevButton() {
    if (crousel - 1 < 0) {
      setCrousel(crousleData.length - 1);
    } else {
      setCrousel(crousel - 1);
    }
  }

  return (
    <div className="overflow-hidden">
      <div
        className={`flex transition-transform ease-in-out duration-700`}
        style={{ transform: `translateX(-${crousel * 100}%)` }}
      >
        {crousleData.map((item, index) => (
          <div key={index} className="min-h-screen min-w-full flex flex-col md:flex-row">
            <div className="left md:w-[50vw] flex items-center md:justify-center h-full flex-col">
              <div className="heading text-6xl font-bold px-4 text-start mt-36 mb-24">
                {item.title}
              </div>
              <div className="buttons flex gap-10 mb-16">
                <button
                  className="next rounded-full bg-[#3E0BCE] text-white"
                  onClick={handlePrevButton}
                >
                  <MdNavigateBefore size={68} />
                </button>
                <button
                  className="next rounded-full bg-[#3E0BCE] text-white"
                  onClick={handleNextButton}
                >
                  <MdNavigateNext size={68} />
                </button>
              </div>
            </div>
            <div className="right md:w-[50vw] h-full">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
