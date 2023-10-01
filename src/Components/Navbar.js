import React, { useEffect, useRef } from "react";
import { Tooltip } from "react-tooltip";
import { useStateContext } from "../Context/ContextProvider";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import {
  MdDarkMode,
  MdKeyboardArrowDown,
  MdOutlineDarkMode,
} from "react-icons/md";
import { Chat, Notification, UserProfile } from "./index";

const Navbar = () => {
  let {
    setActiveMenu,
    isClicked,
    handleClose,
    handleClick,
    scSize,
    setScSize,
    mainColor,
    mode,
    setMode,
  } = useStateContext();

  const NavButton = ({ title, icon, customFun, color, dotColor }) => (
    <>
      <button
        data-tooltip-id={title}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
        onClick={customFun}
        style={{ color }}
      >
        <span
          className="rounded-full absolute inline-flex h-2 w-2 right-2 top-2"
          style={{ backgroundColor: dotColor }}
        />
        {icon}
      </button>
      <Tooltip id={title} content={title} />
    </>
  );
  useEffect(() => {
    const handleResize = () => setScSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (scSize < 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [scSize]);

  // handle close when click outside
  let leftNav = useRef();
  useEffect(() => {
    function closeMenu(e) {
      if (!leftNav.current.contains(e.target)) {
        return handleClose();
      }
    }
    window.addEventListener("click", closeMenu);

    return () => window.removeEventListener("click", closeMenu);
  });
  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFun={() => setActiveMenu((pre) => !pre)}
        icon={<AiOutlineMenu />}
        color="red"
      />

      <div className="flex gap-2 items-center" ref={leftNav}>
        <div className="relative">
          <button
            data-tooltip-id="Mode"
            className="relative text-xl rounded-full p-3 hover:bg-light-gray"
            onClick={() =>
              setMode((prev) => (prev === "light" ? "dark" : "light"))
            }
            style={{ color: mainColor }}
          >
            {mode === "light" ? <MdOutlineDarkMode /> : <MdDarkMode />}
          </button>
          <Tooltip id="Mode" content="Mode" />
        </div>
        <div className="relative">
          <button
            data-tooltip-id="Chat"
            className="relative text-xl rounded-full p-3 hover:bg-light-gray"
            onClick={() => handleClick("chat")}
            style={{ color: mainColor }}
          >
            <span
              className="rounded-full absolute inline-flex h-2 w-2 right-2 top-2"
              style={{ backgroundColor: mainColor }}
            />
            <BsChatLeft />
          </button>
          <Tooltip id="Chat" content="Chat" />
          {isClicked.chat && <Chat />}
        </div>
        <div className="relative">
          <button
            data-tooltip-id="Notification"
            className="relative text-xl rounded-full p-3 hover:bg-light-gray"
            onClick={() => handleClick("notification")}
            style={{ color: mainColor }}
          >
            <span
              className="rounded-full absolute inline-flex h-2 w-2 right-2 top-2"
              style={{ backgroundColor: mainColor }}
            />
            <RiNotification3Line />
          </button>
          <Tooltip id="Notification" content="Notification" />
          {isClicked.notification && <Notification />}
        </div>
        <div className="relative">
          <div
            data-tooltip-id="userProfile"
            className="flex items-center gap-2 hover:bg-light-gray rounded-lg cursor-pointer
          text-gray-400 text-[14px]"
            onClick={() => handleClick("userProfile")}
          >
            <img
              src="Images/avatar.jpg"
              className="rounded-full w-8 h-8"
              alt="user"
            />
            <p>
              <span>Hi, </span>
              <span className="font-bold">Khalid</span>
            </p>
            <MdKeyboardArrowDown />
          </div>
          {isClicked.userProfile && <UserProfile />}
          <Tooltip id="userProfile" content="User Profile" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
