import React from "react";
import Switch from "../Switch";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center py-3 px-5">
      <div className="text-lg font-semibold dark:text-slate-100">
        Theme Switcher
      </div>
      <Switch />
    </div>
  );
};

export default Navbar;
