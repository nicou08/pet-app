import "@/styles/global.css";
import Link from "next/link";

'user client';

export default function Header() {
  return (
    <header>
      <h1>My Pet</h1>
      <nav>
        <Link href="/animals">Animals</Link>
        <Link href="/about-us">About Us</Link>
      </nav>
    </header>
  );
}
