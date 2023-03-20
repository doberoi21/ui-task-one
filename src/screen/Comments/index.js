import React, { useState, useEffect } from "react";
import CommentCard from "../../components/CommentCard";
import { getPaginatedData } from "../../common";
import './style/comment.scss';

const CommentScreen = () => {
  const [commentData, setCommentData] = useState([]);
  const [commentPaginatedData, setCommentPaginatedData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  window.addEventListener('scroll', () => {
    const scrollabeHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    if(scrollabeHeight===scrolled){
      setPageNumber(prev=>prev+1);
    }

  })

  const fetchCommentData = async () => {
    const commentResponse = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    // console.log("Comment ",commentResponse.json()); 
    const data=await commentResponse.json();
    setCommentData(data);
    setPageNumber(1);
  };

  useEffect(() => {
    fetchCommentData();
  }, []);

  useEffect(() => {
    if (commentData.length) {
      const newPaginatedData = getPaginatedData(commentData, pageNumber);
      // console.log("Paginated",newPaginatedData);
      // console.log("page",pageNumber);
      setCommentPaginatedData(newPaginatedData);
    }
  }, [pageNumber]);

  return (
    <div>
      <h1 className="page-heading">Comments</h1>
      <CommentCard cardDetails={commentPaginatedData} />
    </div>
  );
};

export default CommentScreen;
