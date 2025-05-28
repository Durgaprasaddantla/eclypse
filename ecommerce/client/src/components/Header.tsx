import React from "react";

interface HeaderProps {
  cartCount: number;
}

export default function Header({ cartCount }: HeaderProps) {
  return (
    <header className="border-b border-indigo-800 py-4">
      <nav className="flex justify-between items-center max-w-6xl mx-auto px-4">
        <div className="flex gap-6">
          <a
            href="#"
            className="text-indigo-200 hover:text-white transition-colors"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-indigo-200 hover:text-white transition-colors"
          >
            Waitlist
          </a>
          <a
            href="#"
            className="text-indigo-200 hover:text-white transition-colors"
          >
            Cart ({cartCount})
          </a>
        </div>
        <div className="flex gap-6 items-center">
          <a
            href="#"
            className="btn-primary px-4 py-2 transition-all hover:scale-[1.03]"
          >
            Buy
          </a>
          <span className="text-indigo-200">2022</span>
        </div>
      </nav>
    </header>
  );
}
