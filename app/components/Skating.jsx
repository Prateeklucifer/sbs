"use client"

import React, { useEffect, useState } from "react";

export default function SkatingCmp() {
  const [Skating, setSkating] = useState(undefined)

  const getAllSkating = async () => {
      let res = await fetch('http://localhost:3000/api/skating')
      let data = await res.json()
      setSkating(data.data)
  }

  useEffect(() => {
      getAllSkating()
  }, [])
  return (
    <div className="container m-auto xl:px-52">
      <div className="header flex flex-col justify-center items-center px-4 text-center mt-6">
        <div className="heading text-4xl font-bold text-gray-800">
          Our Skating Class
        </div>
        <div className="para my-6">
          There are many variations of passages of Lorem
        </div>
      </div>

      <div className="grid grid-cols-1 px-4 gap-6 md:grid-cols-3 ">
        <div className="item bg-[#f0390f] text-white rounded-md text-center p-12">
          <div className="logo flex items-center justify-center mb-4">
            <img src="/class1.png" alt="" />
          </div>
          <div className="heading font-bold text-2xl mb-6">{Skating && Skating[0].title}</div>
          <div className="para">
          {Skating && Skating[0].description}
          </div>
        </div>
        <div className="item bg-[#3e0bce] text-white rounded-md text-center p-12">
          <div className="logo flex items-center justify-center mb-4">
            <img src="/class2.png" alt="" />
          </div>
          <div className="heading font-bold text-2xl mb-6">{Skating && Skating[1].title}</div>
          <div className="para">
          {Skating && Skating[1].description}
          </div>
        </div>
        <div className="item bg-[#f0390f] text-white rounded-md text-center p-12">
          <div className="logo flex items-center justify-center mb-4">
            <img src="/class3.png" alt="" />
          </div>
          <div className="heading font-bold text-2xl mb-6">{Skating && Skating[2].title}</div>
          <div className="para">
          {Skating && Skating[2].description}
          </div>
        </div>
      </div>
    </div>
  );
}
