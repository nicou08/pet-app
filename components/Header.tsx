'use client';

import "@/styles/global.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  function isActive(route: string) {
    if (route === usePathname()) {
      return "font-andika mx-7 text-3xl font-bold ease-in duration-100";
    } else {
      return "font-andika mx-7 ease-in duration-100";
    }
  }

  return (
    <header className="relative h-24 bg-gradient-to-r from-yellow-200 via-orange-400 to-red-600">
      <h1>My Pet</h1>
      <nav className="text-white text-center text-2xl">
        <Link href="/" className={isActive("/")}>
          Home
        </Link>
        <Link href="/animals" className={isActive("/animals")}>
          Animals
        </Link>
        <Link href="/about" className={isActive("/about")}>
          About
        </Link>
      </nav>
    </header>
  );
}
