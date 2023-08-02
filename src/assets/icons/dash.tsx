import React from "react";
import colors from "constants/colors";
import Hover from "types/hover";


function Dash({ isHovered }: Hover) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30"
    >
      <g
        fill={isHovered ? colors.primary : "#000"}
        opacity={isHovered ? "1" : "0.14"}
      >
        <path d="M5 0h3.75a5 5 0 015 5v3.75a5 5 0 01-5 5H5a5 5 0 01-5-5V5a5 5 0 015-5zM21.25 0H25a5 5 0 015 5v3.75a5 5 0 01-5 5h-3.75a5 5 0 01-5-5V5a5 5 0 015-5zM5 16.25h3.75a5 5 0 015 5V25a5 5 0 01-5 5H5a5 5 0 01-5-5v-3.75a5 5 0 015-5zM21.25 16.25H25a5 5 0 015 5V25a5 5 0 01-5 5h-3.75a5 5 0 01-5-5v-3.75a5 5 0 015-5z"></path>
      </g>
    </svg>
  );
}

Dash.defaultProps = {
  isHovered: false,
};

export default Dash;
