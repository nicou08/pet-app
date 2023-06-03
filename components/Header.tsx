'use client';

import "@/styles/global.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  function IsActive(route: string) {
    if (route === usePathname()) {
      return "font-andika font-bold mx-2 text-3xl ease-in duration-300";
    } else {
      return "font-andika mx-7 ease-in duration-300";
    }
  }

  return (
    <header className="relative h-24 bg-gradient-to-r from-yellow-200 via-orange-400 to-red-600">
      <nav className="text-center text-white text-2xl pt-6">
        <Link href="/" className={IsActive("/")}>
          Home
        </Link>
        <Link href="/animals" className={IsActive("/animals")}>
          Animals
        </Link>
        <Link href="/about" className={IsActive("/about")}>
          About
        </Link>
      </nav>
    </header>
  );
}
