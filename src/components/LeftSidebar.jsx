import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/users/userSlice";
import { Avatar } from "@mui/material";

const LeftSidebar = () => {
  const user = useSelector(selectUser);

  const recentItems = (topics) => (
    <div className="flex text-[13px] text-gray-500 font-bold cursor-pointer mb-[1px] p-[5px] font-quicksand hover:bg-[#F5F5F5] hover:rounded-lg hover:cursor-pointer hover:text-black">
      <span className="ml-1 mr-2">#</span>
      <p>{topics}</p>
    </div>
  );

  const data = {
    image: user.photoURL,
    title: user.displayName,
    email: user.email,
    description: user.description,
  };

  return (
    <div className="sticky top-20 rounded-lg text-center h-fit">
      <div className="flex flex-col items-center border border-gray-300 rounded-t-[10px] bg-white pb-[10px] border-b-0">
        <img
          src="https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="banner"
          className="mb-[-40px] w-[100%] h-[60px] rounded-t-lg object-cover"
        />
        <Avatar
          src={data.image}
          alt={data.title}
          className="w-[70px] h-[70px] rounded-full mb-[5px] mt-[15px]"
        />
        <h2 className=" text-[18px] font-quicksand font-bold">{data.title}</h2>
        <p className="text-gray-500 text-[12px] font-quicksand">
          {data.description}
        </p>
        <p className="text-gray-500 text-[12px] font-quicksand">{data.email}</p>
      </div>
      <div className="p-[10px] mb-[10px] border border-gray-300 rounded-b-[10px] bg-white">
        <div className="flex justify-between">
          <p className="text-gray-500 text-sm font-semibold font-quicksand">
            Profile viewers
          </p>
          <p className="text-[#0a66c2] text-sm font-bold font-quicksand">10</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 text-sm font-semibold font-quicksand">
            Connections
          </p>
          <p className="text-[#0a66c2] text-sm font-bold font-quicksand">610</p>
        </div>
      </div>

      <div className="text-left p-[10px] border border-gray-300 bg-white rounded-[10px] mt-[10px]">
        <p className="font-semibold font-rubik pb-[10px]">Recent</p>
        {recentItems("react.js")}
        {recentItems("javaDeveloperCommunity")}
        {recentItems("hiring")}
        {recentItems("webDevelopment")}
        {recentItems("dsa")}
      </div>
    </div>
  );
};

export default LeftSidebar;
