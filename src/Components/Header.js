import React from "react";

const Header = ({ category, title }) => {
  return (
    <div className="mb-10 sm:mb-4">
      <p className="text-gray-400">{category}</p>
      <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
    </div>
  );
};

export default Header;
