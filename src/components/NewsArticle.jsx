import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const NewsArticle = ({ heading, subtitle }) => {
  return (
    <div className="flex">
      <div>
        <FiberManualRecordIcon />
      </div>
      <div>
        <h2>{heading}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default NewsArticle;
