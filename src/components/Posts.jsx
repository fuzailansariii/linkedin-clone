import React, { forwardRef } from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import RepeatIcon from "@mui/icons-material/Repeat";
import SendIcon from "@mui/icons-material/Send";
import { Avatar } from "@mui/material";
import FlipMove from "react-flip-move";

const Posts = forwardRef(({ posts }, ref) => {
  const likeAndComment = [
    { action: "Like", icon: <ThumbUpOffAltIcon /> },
    { action: "Comment", icon: <CommentIcon /> },
    { action: "Repost", icon: <RepeatIcon /> },
    { action: "Send", icon: <SendIcon /> },
  ];


  return (
    <>
      <div ref={ref}>
        <FlipMove>
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-md px-3 py-3 mt-5">
              <div className="flex">
                <Avatar
                  src={post.photoURL}
                  alt="Mohd Fuzail Ansari"
                  className="w-[40px] h-[40px] rounded-full items-center"
                />
                <div className="ml-4">
                  <h2 className="text-sm font-quicksand font-semibold">
                    {post.name}
                  </h2>
                  <p className="text-xs font-rubik font-light">{post.email}</p>
                </div>
              </div>

              <div className="font-quicksand mt-4">{post.message}</div>
              <div className="flex justify-evenly mt-7 border-t-[1px]">
                {likeAndComment.map((option, index) => (
                  <div
                    key={index}
                    className="flex my-4 justify-center items-center space-x-1 text-[#00000099] cursor-pointer mb-2"
                  >
                    {option.icon}
                    <h3 className="font-quicksand font-semibold">
                      {option.action}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </FlipMove>
      </div>
    </>
  );
});

export default Posts;
