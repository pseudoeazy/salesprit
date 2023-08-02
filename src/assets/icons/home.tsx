import React from "react";
import colors from "constants/colors";
import Hover from "types/hover";

function Home({ isHovered }: Hover) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30"
    >
      <path
        fill={isHovered ? colors.primary : "#ccc"}
        d="M15 18.74a3.75 3.75 0 00-3.75 3.75v7.5h7.5v-7.5A3.75 3.75 0 0015 18.74z"
      ></path>
      <path
        fill={isHovered ? colors.primary : "#ccc"}
        d="M21.25 22.49v7.5h5A3.75 3.75 0 0030 26.24v-11.4a2.5 2.5 0 00-.704-1.74L18.674 1.616a5 5 0 00-7.344 0L.726 13.096A2.5 2.5 0 000 14.858v11.383a3.75 3.75 0 003.75 3.75h5v-7.5c.023-3.409 2.775-6.192 6.098-6.272 3.434-.083 6.376 2.748 6.402 6.272z"
      ></path>
      <path
        fill={isHovered ? colors.primary : "#ccc"}
        d="M15 18.74a3.75 3.75 0 00-3.75 3.75v7.5h7.5v-7.5A3.75 3.75 0 0015 18.74z"
      ></path>
    </svg>
  );
}

Home.defaultProps = {
  isHovered: false,
};
export default Home;
