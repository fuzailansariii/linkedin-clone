import React from "react";
import { useState } from "react";
import InputPopup from "./InputPopup";
import "../index.css";
import ArticleIcon from "@mui/icons-material/Article";
import ImageIcon from "@mui/icons-material/Image";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../features/users/userSlice";

const Input = ({ handlePostData }) => {
  const [popup, setPopup] = useState(false);
  const [disableInput, setDisableInput] = useState(false);

  const user = useSelector(selectUser);

  const imageEventWrite = [
    { name: "Image", icon: <ImageIcon /> },
    { name: "Event", icon: <CalendarMonthIcon /> },
    { name: "Write Article", icon: <ArticleIcon /> },
  ];

  const openPopupHandle = () => {
    setPopup(true);
    setDisableInput(true);
  };

  const closePopupHandle = () => {
    setPopup(false);
    setDisableInput(false);
  };

  return (
    <div className="bg-white rounded-md px-3 py-3">
      <div className="flex w-[550px] justify-center items-center">
        <Avatar
          src={user.photoURL}
          alt={user.displayName}
          className="w-[50px] h-[50px] rounded-full items-center"
        />
        <input
          type="text"
          placeholder="Start a post"
          onClick={openPopupHandle}
          className="w-full rounded-full h-12 ml-3 pl-4 bg-transparent border border-gray-700 font-quicksand hover:bg-gray-200"
          disabled={disableInput}
        />
        {popup && (
          <InputPopup
            open={popup}
            close={closePopupHandle}
            handlePostData={handlePostData}
          />
        )}
      </div>
      <div className="flex justify-evenly">
        {imageEventWrite.map((option, index) => (
          <div
            key={index}
            className="flex py-3 px-9 justify-center items-center cursor-pointer space-x-1 text-[#0a66c2]"
          >
            {option.icon}
            <h3 className="text-gray-500 hover:text-black font-quicksand font-semibold">
              {option.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Input;
