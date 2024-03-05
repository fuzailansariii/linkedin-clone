import React from "react";
import ArticleIcon from "@mui/icons-material/Article";
import PeopleIcon from "@mui/icons-material/People";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import HeaderOption from "./HeaderOption";

function LoginNav() {
  const navItems = [
    { name: "Articles", Icon: <ArticleIcon /> },
    { name: "People", Icon: <PeopleIcon /> },
    { name: "Learning", Icon: <OndemandVideoIcon /> },
    { name: "Jobs", Icon: <BusinessCenterIcon /> },
  ];

  return (
    <div className="flex flex-col md:flex-row md:justify-evenly py-[10px] w-[100%] sticky top-0 z-[999] bg-white">
      <div className="flex justify-center items-center">
        <img
          src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
          alt="linked-in"
          className="object-contain h-9 cursor-pointer"
        />
      </div>

      <div className="flex">
        <div className="flex items-center">
          {navItems.map((options, index) => (
            <HeaderOption
              key={index}
              title={options.name}
              Icon={options.Icon}
            />
          ))}
        </div>

        <div className="flex justify-center items-center mx-5 border-l-2 h-13 space-x-2">
          <button className="ml-2 cursor-pointer font-bold bg-transparent font-quicksand text-base py-3 px-4 rounded-full hover:bg-gray-200">
            Join now
          </button>
          <button className="cursor-pointer font-bold bg-transparent font-quicksand text-base border border-blue-800 text-blue-800 py-3 px-4 rounded-full hover:bg-gray-200">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginNav;
