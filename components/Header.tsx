import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const onScrollEffect = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", onScrollEffect);

    return () => {
      window.removeEventListener("scroll", onScrollEffect);
    };
  }, []);

  return (
    <>
      <header className={`${isScroll && "bg-gray-100 text-black"}`}>
        <div className="inline-flex items-center space-x-2 md:space-x-10 justify-between">
          <img src="https://rb.gy/ulxxee" alt="" className="sm:w-20" />

          <ul className="hidden space-x-4 md:flex ">
            <li className="header-link">Home</li>
            <li className="header-link">TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My list</li>
          </ul>
        </div>
        <div className="inline-flex items-center space-x-4 text-sm font-light float-right mr-3">
          <MagnifyingGlassIcon className="sm:w-6" />
          <Link href={"/account"}>
            <img src="https://rb.gy/g1pwyx" alt="cursor-pointer rounded" />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
