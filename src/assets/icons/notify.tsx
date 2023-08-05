import React from "react";
import colors from "constants/colors";
import Hover from "types/hover";

function Notify({ isHovered }: Hover) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="33"
      fill="none"
      viewBox="0 0 30 33"
    >
      <g 
             fill={isHovered ? colors.primary : "#000"}
             opacity={isHovered ? "1" : "0.14"}>
        <path d="M4.424 24h20.874a4 4 0 003.762-5.361L25.257 8.125A11.097 11.097 0 0014.567 0 11.095 11.095 0 003.735 8.688L.602 18.821A4 4 0 004.424 24zM8.467 26.667a6.667 6.667 0 0013.066 0H8.467z"></path>
      </g>
    </svg>
  );
}
Notify.defaultProps = {
    isHovered: false,
  };
export default Notify;