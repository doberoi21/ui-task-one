import PostCard from "../../components/PostCard";
import React, { useState, useEffect } from "react";

const PostScreen = () => {
  const [postData, setPostdata] = useState([]);

  const fetchPostData = async () => {
    const postResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const data= postResponse.json();
    setPostdata(data);
  };

  useEffect(() => {
    fetchPostData();
  }, []);

  return (
    <div>
      <h1 style={{ fontSize: 30, textAlign: "center" }}>Posts</h1>
      <PostCard cardDetails={postData} />
    </div>
  );
};

export default PostScreen;
