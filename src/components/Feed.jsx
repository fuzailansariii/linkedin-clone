import React, { useEffect, useState } from "react";
import Input from "./Input";
import Posts from "./Posts";
import { database } from "./myFirebase";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const handlePostData = (postData) => {
    database.collection("posts").add(postData);
  };

  useEffect(() => {
    database
      .collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="flex-3">
      <Input handlePostData={handlePostData} />
      <Posts posts={posts} />
    </div>
  );
};

export default Feed;
