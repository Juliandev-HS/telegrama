"use client";
import Link from "next/link";

export const Footer = (params: any) => {

  return (
    <header
      className={`fixed bottom-0 w-full z-50 bg-white transition-all duration-300 `}>
        <nav className="container mx-auto px-4 w-full py-8 flex justify-between">
        <Link href="/">Etla 9, Col Condesa. CP 06100, Mexico City</Link>
        <Link href="/">+ 52 1 552 202 1414</Link>
        <Link href="/">cathcuevas.prod@gmail.com</Link>
        <Link href="/">enriquerizo@gmail.com</Link>
        <div>
        <p>Connect</p>
        <Link href="/">ig</Link>
        <Link href="/">linkedin</Link>
        </div>
        <Link href="/">© 2023 Telegrama Audiovisual SA de CV</Link>

      </nav>
    </header>
  );
};