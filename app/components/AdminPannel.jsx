"use client";

import { HiOutlineX } from "react-icons/hi";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function AdminPannel() {
  const links = [
    {
      name: "About",
      href: "/admin/about",
    },
    {
      name: "Skating",
      href: "/admin/skating",
    },
    {
      name: "Shop",
      href: "/admin/shop",
    },
    {
      name: "contact",
      href: "/admin/contact",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  async function removeToken() {
    let res = await fetch("http://localhost:3000/api/logout", {
      method: "POST",
    });

    if (res.status === 200) {
      setTimeout(() => {
        router.push("/login");
      });
    } else {
      // will throw error
    }
  }

  function handleHamburger() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="bg-white text-gray-700">
      <div className="for-mobile flex justify-between py-6 px-4 md:hidden">
        <div className="logo">
          <img src="/logo.png" alt="" />
        </div>
        <button
          className="bread"
          onClick={() => {
            handleHamburger();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-12 h-12 rotate-180 text-orange-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
            />
          </svg>
        </button>
        <div
          onClick={() => {
            handleHamburger();
          }}
          className={`${
            isOpen ? "flex" : "hidden"
          } overlay top-0 left-0 h-screen w-screen bg-black/40 z-[30] fixed`}
        ></div>
        <div
          className={`${
            isOpen ? "flex right-0" : "-right-[100%]"
          } flex-col sidebar fixed top-0 h-screen bg-white w-60 text-neutral-900 py-3 px-4 z-[40] transition-all duration-300 ease-in-out`}
        >
          <div className="header flex justify-end items-center">
            <button
              onClick={() => {
                handleHamburger();
              }}
            >
              {" "}
              <HiOutlineX size={30} />{" "}
            </button>
          </div>
          <ul className="flex flex-col space-y-4 font-medium px-2 mt-4">
            {links.map((link, key) => (
              <li
                key={key}
                onClick={() => {
                  handleHamburger();
                }}
              >
                <Link href={link.href} className="">
                  {link.name}
                </Link>
              </li>
            ))}
            <button className="bg-gray-800 text-white py-1" onClick={()=>{removeToken()}}>logout</button>
          </ul>
        </div>
      </div>
      <div className="hidden md:flex py-6 px-4 justify-between">
        <div className="logo">
          <img src="/logo.png" alt="" className="w-42" />
        </div>
        <ul className="flex items-center md:gap-4 lg:gap-8 text-lg">
          <li>
            <Link
              href="/admin/about"
              className="hover:bg-orange-600 py-2 md:px-4 lg:px-6 hover:text-white rounded-full"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              href="/admin/skating"
              className="hover:bg-orange-600 py-2 md:px-4 lg:px-6 hover:text-white rounded-full"
            >
              SKATING
            </Link>
          </li>
          <li>
            <Link
              href="/admin/shop"
              className="hover:bg-orange-600 py-2 md:px-4 lg:px-6 hover:text-white rounded-full"
            >
              SHOP
            </Link>
          </li>
          <li>
            <Link
              href="/admin/contact"
              className="hover:bg-orange-600 py-2 md:px-4 lg:px-6 hover:text-white rounded-full"
            >
              CONTACT US
            </Link>
          </li>
          <button
            className="bg-orange-600 py-2 md:px-4 lg:px-6 rounded-sm text-white"
            onClick={() => {
              removeToken();
            }}
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
}
