import React from "react";
import colors from "constants/colors";
import Hover from "types/hover";

function Customer({ isHovered }: Hover) {
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
        d="M27.357 24.657c0 1.518-.462 2.717-1.385 3.596-.924.879-2.15 1.318-3.681 1.318H5.708c-1.53 0-2.757-.44-3.68-1.318-.924-.88-1.385-2.078-1.385-3.596 0-.67.022-1.325.066-1.963.044-.64.133-1.328.266-2.068.132-.74.3-1.427.502-2.059.203-.633.475-1.25.816-1.85A6.67 6.67 0 013.47 15.18a4.949 4.949 0 011.622-1.015 5.697 5.697 0 012.115-.38c.114 0 .38.137.797.409.418.272.889.575 1.414.91.525.336 1.208.64 2.049.911a8.192 8.192 0 002.533.408c.847 0 1.691-.136 2.533-.408.84-.272 1.524-.575 2.049-.91.525-.336.996-.64 1.413-.911.418-.272.683-.408.797-.408.772 0 1.477.126 2.116.38.638.252 1.18.59 1.622 1.014a6.67 6.67 0 011.176 1.537c.342.6.614 1.218.816 1.85.202.632.37 1.319.503 2.059.133.74.221 1.429.266 2.068.044.638.066 1.293.066 1.963zM21.285 7.714c0 2.011-.711 3.729-2.134 5.152S16.011 15 14 15c-2.011 0-3.729-.711-5.152-2.134s-2.134-3.14-2.134-5.152c0-2.01.712-3.728 2.134-5.15C10.271 1.14 11.988.428 14 .428c2.01 0 3.728.711 5.151 2.134 1.423 1.423 2.134 3.14 2.134 5.151z"
        
      ></path>
    </svg>
  );
}
Customer.defaultProps = {
    isHovered: false,
  };
export default Customer;