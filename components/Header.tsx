"use client";

import "@/styles/global.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  function IsActive(route: string) {
    if (route === usePathname()) {
      return "my-custom-class on-page relative font-bold";
    } else {
      return "my-custom-class relative";
    }
  }

  return (
    <header className="relative h-24 bg-gradient-to-r from-yellow-200 via-orange-500 to-red-500">
      <nav className=" text-white text-xl pt-2">
        <ul className="flex justify-center font-andika pt-5">
          <li className="mr-20">
            <Link href="/" className={IsActive("/")}>
              Home
            </Link>
          </li>
          <li className="mr-20">
            <Link href="/animals" className={IsActive("/animals")}>
              Animals
            </Link>
          </li>
          <li className="">
            <Link href="/about" className={IsActive("/about")}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
