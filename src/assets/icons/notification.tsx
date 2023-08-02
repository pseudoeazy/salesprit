import React from "react";

function Notification() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="115"
      height="115"
      fill="none"
      viewBox="0 0 115 115"
    >
      <g filter="url(#filter0_d_43_3545)">
        <rect
          width="55"
          height="55"
          x="30"
          y="26"
          fill="#003048"
          rx="27.5"
        ></rect>
      </g>
      <path
        fill="#fff"
        d="M51.22 58.25h12.394a2.376 2.376 0 002.234-3.183l-2.258-6.243A6.589 6.589 0 0057.242 44a6.588 6.588 0 00-6.43 5.158l-1.86 6.017a2.373 2.373 0 002.268 3.075zM53.62 59.833a3.959 3.959 0 007.758 0H53.62z"
      ></path>
      <defs>
        <filter
          id="filter0_d_43_3545"
          width="115"
          height="115"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="15"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.188235 0 0 0 0 0.282353 0 0 0 0.3 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_43_3545"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_43_3545"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Notification;
