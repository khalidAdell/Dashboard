import React from "react";
import { useStateContext } from "../Context/ContextProvider";

const Notification = () => {
  const { mainColor } = useStateContext();
  return (
    <div
      className="p-8 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg absolute top-[3rem] 
    right-0 w-[23rem] shadow-md z-[500]"
    >
      <h2 className="font-semibold mb-2 flex items-center gap-3 text-base">
        Notification
        <span
          style={{ backgroundColor: mainColor }}
          className="p-1 text-white text-xs rounded-lg"
        >
          5 new
        </span>
      </h2>

      {/* Notification */}
      <div
        className="flex items-center gap-4 leading-7 p-2 pt-4 pb-4 cursor-pointer
        hover:bg-gray-200 dark:hover:bg-gray-700 after:bg-gray-300 after:h-[1px] after:w-full relative after:bottom-0 after:left-0 
        after:absolute"
      >
        <img
          src="Images/avatar.jpg"
          className="rounded-full w-[3rem] h-[3rem] object-contain"
        />
        <div>
          <h2 className="font-semibold text-base text-slate-800 dark:text-white">
            Salem Joind The Team
          </h2>
          <p className="text-slate-500 text-sm dark:text-slate-300">
            Hello Mr Khalid
          </p>
          <p className="text-slate-500 text-sm dark:text-slate-300">9:04 AM</p>
        </div>
      </div>
      <div
        className="flex items-center gap-4 leading-7 p-2 pt-4 pb-4 cursor-pointer
        hover:bg-gray-200 dark:hover:bg-gray-700 after:bg-gray-300 after:h-[1px] after:w-full relative after:bottom-0 after:left-0 
        after:absolute"
      >
        <img
          src="Images/avatar4.jpg"
          className="rounded-full w-[3rem] h-[3rem] object-contain"
        />
        <div>
          <h2 className="font-semibold text-base text-slate-800 dark:text-white">
            Adel Joind The Team
          </h2>
          <p className="text-slate-500 text-sm dark:text-slate-300">
            Hello Mr Khalid
          </p>
          <p className="text-slate-500 text-sm dark:text-slate-300 ">9:04 AM</p>
        </div>
      </div>
      <div
        className="flex items-center gap-4 leading-7 p-2 pt-4 pb-4 cursor-pointer
        hover:bg-gray-200 dark:hover:bg-gray-700 after:bg-gray-300 after:h-[1px] after:w-full relative after:bottom-0 after:left-0 
        after:absolute"
      >
        <img
          src="Images/avatar2.jpg"
          className="rounded-full w-[3rem] h-[3rem] object-contain"
        />
        <div>
          <h2 className="font-semibold text-base text-slate-800 dark:text-white">
            Alaa Joind The Team
          </h2>
          <p className="text-slate-500 text-sm dark:text-slate-300">
            Hello Mr Khalid
          </p>
          <p className="text-slate-500 text-sm dark:text-slate-300 ">9:04 AM</p>
        </div>
      </div>
      <div
        className="flex items-center gap-4 leading-7 p-2 pt-4 pb-4 cursor-pointer
        hover:bg-gray-200 dark:hover:bg-gray-700 after:bg-gray-300 after:h-[1px] after:w-full relative after:bottom-0 after:left-0 
        after:absolute"
      >
        <img
          src="Images/avatar3.png"
          className="rounded-full w-[3rem] h-[3rem] object-contain"
        />
        <div>
          <h2 className="font-semibold text-base text-slate-800 dark:text-white">
            Omar Joind The Team
          </h2>
          <p className="text-slate-500 dark:text-slate-300 text-sm">
            Hello Mr Khalid
          </p>
          <p className="text-slate-500 dark:text-slate-300 text-sm ">9:04 AM</p>
        </div>
      </div>
    </div>
  );
};

export default Notification;
