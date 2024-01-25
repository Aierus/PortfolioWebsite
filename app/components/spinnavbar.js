"use client";

import React, {useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import {useTheme} from 'next-themes'
import Dropdown from "./dropdown"

const menuItems = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "Blog",
    route: "/blog",
    children: [
      {
        title: "Trading Bot",
        route: "/blog/trading-bot"
      },

      {
        title: "BC Print Monitor",
        route: "/blog/print-monitor"
      },

    ],
  },
  {
    title: "About",
    route: "/about"
  },
  {
    title: "Resume",
    route: "/resume"
  }
];

export default function Navbar() {
  const [spin, setSpin] = useState(false);
  const {theme, setTheme} = useTheme();

  return (
    <div>
      <nav className="flex bg-black justify-center align-items:center py-4 px-2 text-2xl">
        <div className="border-4 border-white absolute left-2 top-2.5">
          <Image
            className={`${spin ? "animate-wiggle" : "animate-unwiggle"}`}
            onClick={() => {
              spin ? setSpin(false) : setSpin(true);
              theme.includes('dark') ? setTheme('light') : setTheme('dark');
            }}
            src="/favicon.png"
            alt="logo"
            width={40}
            height={40}
            href="/"
          />
        </div>
        <div className={`${"flex gap-10 items-center text-white top-2.5"}`}>
          {menuItems.map((item, i) => {
            return item.hasOwnProperty("children") ? (<Dropdown item={item} key={i} />) : (
              <Link className="hover:text-blue-500" href={item?.route || ""} key={i}>
                {item.title}
              </Link>
            )
          })}
        </div>
      </nav >
    </div>
  )
}

/*

  Home Blog About (Equity Research) Resume(Behind Auth) 
 
*/

