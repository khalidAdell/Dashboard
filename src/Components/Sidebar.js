import React from "react";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { links } from "../Data/dummy";
import { useStateContext } from "../Context/ContextProvider";

const Sidebar = () => {
  let { activeMenu, setActiveMenu, scSize, mainColor } = useStateContext();
  const handleCloseSide = () => {
    if (activeMenu && scSize < 900) {
      setActiveMenu(false);
    }
  };
  return (
    <div
      className="h-screen ml-3 overflow-auto md:overflow-hidden
    md:hover:overflow-auto pb-10"
    >
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={() => {}}
              className="flex items-center gap-3 mt-4 m-3 font-extrabold text-xl
          dark:text-white text-slate-900 tracking-tight"
            >
              <SiShopware />
              <span>Elol.</span>
            </Link>
            <button
              onClick={() => setActiveMenu((pre) => !pre)}
              data-tooltip-id="closeMenuBtn"
              className="text-xl rounded-full p-3 mt-4 block md:hidden hover:bg-light-gray"
            >
              <MdOutlineCancel />
            </button>
            <Tooltip id="closeMenuBtn" content="Menu" />
          </div>
          <div className="mt-8">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                <div className="m-4 leading-[2.2]">
                  {item.links.map((link) => (
                    <NavLink
                      onClick={() => handleCloseSide()}
                      to={`/${link.name}`}
                      key={link.name}
                      className={({
                        isActive,
                      }) => `flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg m-2
                    text-md ${
                      isActive
                        ? `text-white `
                        : `text-gray-700 dark:text-gray-200 dark:hover:text-black
                     hover:bg-light-gray`
                    }`}
                      style={({ isActive }) => ({
                        backgroundColor: isActive && mainColor,
                      })}
                    >
                      {link.icon}
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
