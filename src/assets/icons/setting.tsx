import React from "react";
import colors from "constants/colors";
import Hover from "types/hover";

function Setting({ isHovered }: Hover) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="30"
      fill="none"
      viewBox="0 0 28 30"
    >
      <path
        fill={isHovered ? colors.primary : "#000"}
        opacity={isHovered ? "1" : "0.14"}
        d="M26.247 17.163l-.56-.323A2.103 2.103 0 0124.626 15c0-.768.398-1.457 1.063-1.84l.559-.323a3.186 3.186 0 001.166-4.354l-1.062-1.84a3.19 3.19 0 00-4.354-1.167l-.56.322a2.101 2.101 0 01-2.124 0 2.104 2.104 0 01-1.063-1.84v-.646A3.191 3.191 0 0015.063.126h-2.125A3.191 3.191 0 009.75 3.313v.645c0 .769-.397 1.456-1.062 1.84a2.103 2.103 0 01-2.125 0l-.559-.322a3.192 3.192 0 00-4.355 1.166L.586 8.482a3.186 3.186 0 001.167 4.355l.56.323A2.103 2.103 0 013.375 15c0 .768-.397 1.457-1.062 1.84l-.559.323a3.186 3.186 0 00-1.167 4.354l1.063 1.84a3.191 3.191 0 004.354 1.167l.559-.322a2.1 2.1 0 012.125 0 2.104 2.104 0 011.062 1.84v.645a3.191 3.191 0 003.188 3.188h2.125a3.191 3.191 0 003.187-3.188v-.646c0-.768.398-1.455 1.063-1.84a2.103 2.103 0 012.125 0l.559.323a3.193 3.193 0 004.354-1.166l1.062-1.84a3.186 3.186 0 00-1.166-4.355zM14 20.313A5.319 5.319 0 018.688 15 5.319 5.319 0 0114 9.687 5.319 5.319 0 0119.313 15 5.319 5.319 0 0114 20.313z"
      ></path>
    </svg>
  );
}

Setting.defaultProps = {
  isHovered: false,
};
export default Setting;
