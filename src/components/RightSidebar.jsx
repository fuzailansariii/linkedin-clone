import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import NewsArticle from "./NewsArticle";

const RightSidebar = () => {
  const articles = [
    { heading: "Shadowfax raises $100 million", subtitle: "13,654 readers" },
    { heading: "Shadowfax raises $100 million", subtitle: "13,654 readers" },
    { heading: "Shadowfax raises $100 million", subtitle: "13,654 readers" },
    { heading: "Shadowfax raises $100 million", subtitle: "13,654 readers" },
    { heading: "Shadowfax raises $100 million", subtitle: "13,654 readers" },
    { heading: "Shadowfax raises $100 million", subtitle: "13,654 readers" },
    { heading: "Shadowfax raises $100 million", subtitle: "13,654 readers" },
    { heading: "Shadowfax raises $100 million", subtitle: "13,654 readers" },
  ];

  return (
    <div className="sticky top-[80px] w-72 bg-white rounded-[10px] h-fit pb-[10px] border border-gray-300">
      <div className="flex items-center justify-between p-[10px]">
        <h2 className="text-base font-semibold">LinkedIn News</h2>
        <InfoIcon />
      </div>
      <div className="">
        {articles.map((article, index) => (
          <div
            key={index}
            className="flex text-[13px] text-gray-500 font-bold cursor-pointer mb-[1px] p-[5px] font-quicksand hover:bg-[#F5F5F5] hover:rounded-lg hover:cursor-pointer hover:text-black"
          >
            <NewsArticle
              heading={article.heading}
              subtitle={article.subtitle}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSidebar;
