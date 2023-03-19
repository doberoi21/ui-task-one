import React, { useState, useEffect } from "react";
import CommentCard from "../../components/CommentCard";

const CommentScreen = () => {
  const [commentdata, setCommentData] = useState([]);

  const fetchCommentData = async () => {
    const commentResponse = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const data=commentResponse.json();
    setCommentData(data);
  };

  useEffect(() => {
    fetchCommentData();
  }, []);

  return (
    <div>
      <h1 style={{ fontSize: 30, textAlign: "center" }}>Comments</h1>
      <CommentCard cardDetails={commentdata} />
    </div>
  );
};

export default CommentScreen;
