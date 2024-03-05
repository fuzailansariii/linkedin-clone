import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ImageIcon from "@mui/icons-material/Image";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArticleIcon from "@mui/icons-material/Article";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import "../index.css";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "../features/users/userSlice";
import { Avatar } from "@mui/material";

const InputPopup = ({ open, close, handlePostData }) => {
  const [inputValue, setInputValue] = useState("");

  const user = useSelector(selectUser);

  const data = {
    image: user.photoURL,
    title: user.displayName,
    email: user.email,
  };

  const submitPost = (event) => {
    event.preventDefault();
    const postData = {
      name: data.title,
      message: inputValue,
      email: data.email,
      photoURL: data.image || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    };
    handlePostData(postData);
    setInputValue("");
    close();
  };
  const inputIcons = [
    { name: "ImageIcon", icon: <ImageIcon /> },
    { name: "CalenderMonthIcon", icon: <CalendarMonthIcon /> },
    { name: "ArticleIcon", icon: <ArticleIcon /> },
    { name: "BusinessCenterIcon", icon: <BusinessCenterIcon /> },
  ];

  if (!open) {
    return null;
  }
  return (
    <>
      <div className="overlay">
        <div className="fixed-center">
          <form className="w-[750px] h-[550px] rounded-xl bg-white">
            <div className="flex justify-between items-center mx-5 my-5">
              <div className="flex items-center mt-5">
                <Avatar
                  src={data.image}
                  alt={data.title}
                  className="w-20 h-20 rounded-full"
                />
                <div className="flex flex-col ml-2">
                  <h3 className="font-bold font-quicksand text-xl">
                    {data.title}
                  </h3>
                  <p className="font-rubik">Post to anyone</p>
                </div>
              </div>

              <CloseIcon
                className="cursor-pointer text-gray-500 hover:text-black"
                onClick={close}
              />
            </div>

            <div className="w-[700px] h-[300px] my-5">
              <textarea
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                rows={10}
                autoFocus
                type="text"
                placeholder="What do you want to talk about?"
                required
                className="w-full h-full mx-5 bg-transparent outline-none font-quicksand"
              />
            </div>

            <div className="flex mx-5 my-5">
              {inputIcons.map((option, index) => (
                <div
                  key={index}
                  className="flex mr-[20px] text-gray-600 hover:text-black cursor-pointer"
                >
                  {option.icon}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-end mx-5">
              <WatchLaterIcon className="inline-block text-gray-600 hover:text-black cursor-pointer mr-5" />
              <button
                type="submit"
                onClick={submitPost}
                className="bg-gray-600 opacity-50 hover:bg-blue-700 hover:opacity-100 text-white font-bold py-2 px-4 rounded"
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default InputPopup;
