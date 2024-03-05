import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/users/userSlice";

const HeaderOption = ({ avatar, title, Icon, onClick }) => {
  const user = useSelector(selectUser);
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center mx-[15px] text-gray-600 hover:text-black cursor-pointer"
    >
      {Icon}
      {avatar && (
        <Avatar
          src={user.photoURL}
          alt="title"
          className="w-6 h-6 rounded-full"
        />
      )}
      <h3 className="text-xs font-quicksand font-semibold">{title}</h3>
    </div>
  );
};

export default HeaderOption;
