import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { useStateContext } from "../Context/ContextProvider";

const UserProfile = () => {
  const { mainColor } = useStateContext();
  return (
    <div
      className="p-8 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg absolute top-[3rem] 
    right-0 w-[20rem] sm:w-[25rem] shadow-md z-[500]"
    >
      <h2 className="font-semibold text-lg mb-2">User Profile</h2>
      <div className="flex items-center gap-2 leading-7 p-5">
        <img
          alt="user"
          src="https://images.unsplash.com/photo-1529665253569-6d…8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          className="rounded-full w-[6rem] h-[6rem] object-cover"
        />
        <div>
          <h2 className="font-semibold text-lg">Khalid Adel</h2>
          <p className="text-slate-500 text-sm">Administrator</p>
          <p className="text-slate-500 flex items-center gap-1 text-[15px] font-medium">
            <HiOutlineMail size={20} />
            kadel2034@gmail.com
          </p>
        </div>
      </div>
      <div
        className="flex items-center gap-4 leading-7 p-5 cursor-pointer
        hover:bg-gray-200 dark:hover:bg-gray-700 after:bg-gray-300 after:h-[1px] after:w-full relative after:top-0 after:left-0 after:absolute"
      >
        <div className="bg-blue-200 rounded-xl text-blue-600 p-3 pt-2 pb-2">
          <MdOutlineAdminPanelSettings size={30} />
        </div>
        <div>
          <h2 className="font-semibold text-lg">My Profile</h2>
          <p className="text-slate-500 text-sm">Account setting</p>
        </div>
      </div>
      <div
        className="flex items-center gap-4 leading-7 p-5 cursor-pointer
        hover:bg-gray-200 dark:hover:bg-gray-700 after:bg-gray-300 after:h-[1px] after:w-full relative after:top-0 after:left-0 after:absolute"
      >
        <div className="bg-green-200 rounded-xl text-green-600 p-3 pt-2 pb-2">
          <AiOutlineMessage size={30} />
        </div>
        <div>
          <h2 className="font-semibold text-lg">My Profile</h2>
          <p className="text-slate-500 text-sm">Account setting</p>
        </div>
      </div>
      <div
        className="flex items-center gap-4 leading-7 p-5 cursor-pointer
        hover:bg-gray-200 dark:hover:bg-gray-700 after:bg-gray-300 after:h-[1px] after:w-full relative after:top-0 after:left-0 after:absolute"
      >
        <div className="bg-red-200 rounded-xl text-red-600 p-3 pt-2 pb-2">
          <BiTask size={30} />
        </div>
        <div>
          <h2 className="font-semibold text-lg">My Profile</h2>
          <p className="text-slate-500 text-sm">Account setting</p>
        </div>
      </div>
      <button
        className="w-full h-[2.5rem] text-white bg-red-400 rounded-xl mt-2"
        style={{ backgroundColor: mainColor }}
      >
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
