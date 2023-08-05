import React from "react";
import colors from "constants/colors";
import Hover from "types/hover";

function Message({ isHovered }: Hover) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30"
    >
      <path
         fill={isHovered ? colors.primary : "#000"}
         opacity={isHovered ? "1" : "0.14"}
        d="M28.459 13.725L3.1.975C1.825.408.408 1.542.975 2.817l3.542 9.491L20.667 15l-16.15 2.692-3.542 9.491c-.425 1.275.85 2.409 2.125 1.7l25.359-12.75c.991-.425.991-1.841 0-2.408z"
      
      ></path>
    </svg>
  );
}
Message.defaultProps = {
    isHovered: false,
  };

export default Message;