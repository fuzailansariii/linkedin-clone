import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HeaderOption from "./HeaderOption";
import { Link, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "./myFirebase";
import { logout } from "../features/users/userSlice";
import { Avatar } from "@mui/material";

const Header = () => {
  const dispatch = useDispatch();

  const logoutApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  const headerOptions = [
    { title: "Home", Icon: <HomeIcon /> },
    { title: "My Network", Icon: <SupervisorAccountIcon /> },
    { title: "Jobs", Icon: <BusinessCenterIcon /> },
    { title: "Messaging", Icon: <ChatIcon /> },
    { title: "Notifications", Icon: <NotificationsIcon /> },
  ];

  return (
    <div className="flex flex-col md:flex-row md:justify-evenly border-b border-gray-200 py-[10px] w-[100%] sticky top-0 z-[999] bg-white">
      <div className="flex items-center">
        {/* logo and search bar */}
        <Link to="/">
          <img
            src="https://cdn-icons-png.flaticon.com/256/174/174857.png"
            alt="linkedin-icon"
            className="object-contain h-[40px] mr-[10px]"
          />
        </Link>

        <div className="flex items-center bg-[#edf3f8] rounded-md p-[8px]">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-transparent pl-1"
          />
        </div>
      </div>

      <div className="flex items-center">
        {/* icons and menu buttons */}
        {headerOptions.map((options, index) => (
          <HeaderOption
            key={index}
            title={options.title}
            Icon={options.Icon}
            src={options.Avatar}
          />
        ))}
        <HeaderOption avatar={<Avatar />} title="Me" onClick={logoutApp} />
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
