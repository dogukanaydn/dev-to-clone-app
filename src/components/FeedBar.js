import React from "react";

export default function FeedBar() {
  return (
    <div className="feed">
      <h2>Posts</h2>
      <div className="den">
        <a href="#" className="feed-bar active ">
          Feed
        </a>
        <a href="#" className="feed-bar">
          Week
        </a>
        <a href="#" className="feed-bar">
          Month
        </a>
        <a href="#" className="feed-bar">
          Year
        </a>
        <a href="#" className="feed-bar">
          Infinity
        </a>
        <a href="#" className="feed-bar">
          Latest
        </a>
      </div>
    </div>
  );
}
