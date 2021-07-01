import React from "react";
import clap from "./../../public/icons/clap.png";

const Like = ({ post }) => {
  return (
    <div>
      <img src={clap} alt="like this" />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
