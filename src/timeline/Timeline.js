import React, { useState } from "react";
import Post from "./post/Post";
import Suggestions from "./Suggestions";
import "./Timeline.css";

function Timeline () {
  const [posts, setPosts] = useState([
    {
      user: "mahe_",
      postImage:
        "https://www.bhmpics.com/downloads/suriya-sad-Wallpapers/21.suriya191021_1.jpg",
      likes: 54,
      timestamp: "5d",
    },
    {
      user: "sathya",
      postImage:
        "https://feeds.abplive.com/onecms/images/uploaded-images/2023/10/19/6ccc43d6a89ce9d914c20772f3fcc4421697698784623396_original.jpg?impolicy=abp_cdn&imwidth=650",
      likes: 432,
      timestamp: "5d",
    },
    {
      user: "Rolex_sir",
      postImage:
        "https://www.indiaherald.com/Assets/ArticleUpload/2022101119479916_FebnkhYVIAEs1yj.jpg",
      likes: 140,
      timestamp: "4d",
    },
    {
        user: "vikram_KH",
        postImage:
          "https://i.ytimg.com/vi/3780ohkAnGQ/maxresdefault.jpg",
        likes: 140,
        timestamp: "3d",
      },
    {
      user: "dhoni_7",
      postImage:
        "https://e1.pxfuel.com/desktop-wallpaper/414/13/desktop-wallpaper-scarlet-ibis-on-msd-csk-dhoni-thumbnail.jpg",
      likes: 14,
      timestamp: "2d",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;