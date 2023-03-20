import PostCard from "../../components/PostCard";
import React, { useState, useEffect } from "react";
import { getPaginatedData } from "../../common";
import './style/post.scss';

const PostScreen = () => {
  const [postData, setPostdata] = useState([]);
  const [postPaginatedData, setPostPaginatedData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  window.addEventListener('scroll', () => {
    const scrollabeHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    if(scrollabeHeight===scrolled){
      setPageNumber(prev=>prev+1);
    }

  })


  const fetchPostData = async () => {
    const postResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const data = await postResponse.json();
    // console.log("data",data);
    setPostdata(data);
    setPageNumber(1);
  };


  useEffect(() => {
    fetchPostData();
  }, []);

  useEffect(() => {
    if (postData.length) {
      const newPaginatedData = getPaginatedData(postData, pageNumber);
      // console.log("Paginated",newPaginatedData);
      // console.log("page",pageNumber);
      setPostPaginatedData(newPaginatedData);
    }
  }, [pageNumber]);

  return (
    <div>
      <h1 className="page-heading">Posts</h1>
      {/* <p> Scroll Bottom : <b>{scrollTop}</b></p> */}
      <div className="all-cards-container" >
        <PostCard cardDetails={postPaginatedData} />
      </div>
    </div>
  );
};

export default PostScreen;
