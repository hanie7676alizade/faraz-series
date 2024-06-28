// src/components/Header.tsx

import React from "react";
import { Link } from "react-router-dom";
import { TextVariantEnum, Typography } from "../ui/typography";

export const Header: React.FC = () => {
  return (
    <header className="backdrop-blur-lg bg-white/30 shadow-lg py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <nav className="space-x-8">
          <Link
            to="/"
            className="hover:text-gray-200 transition-colors duration-300"
          >
            <Typography text="خانه" variant={TextVariantEnum.BODY_4} />
          </Link>
          {/* <Link
            to="/about"
            className="hover:text-gray-200 transition-colors duration-300"
          >
            درباره ما
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-200 transition-colors duration-300"
          >
            تماس
          </Link> */}
        </nav>
        <Link to="/" className="text-2xl font-bold tracking-wider">
          <span className="text-yellow-400">Lo</span>go
        </Link>
      </div>
    </header>
  );
};
