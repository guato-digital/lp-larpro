import * as React from "react";
export const PlayStoreLogo = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={30}
    fill="none"
    {...props}
  >
    <g fill="#fff" stroke="#000" clipPath="url(#a)">
      <path
        strokeWidth={0.5}
        d="m12.606 14.669 6.136 6.704-13.79 7.894-.003.001a3.127 3.127 0 0 1-3.913-.624 3.162 3.162 0 0 1-.643-1.115l12.213-12.86Z"
      />
      <path
        strokeWidth={0.25}
        d="m12.503 14.607 6.677-5.89 5.991 3.45-.002.008a3.21 3.21 0 0 1 0 5.666l-.004.003-5.952 3.416-6.71-6.653Z"
      />
      <path
        strokeWidth={0.5}
        d="m.049 2.774.222.208c.012-.1.028-.198.05-.296l-.21-.196a3.258 3.258 0 0 0-.062.284Zm12.806 11.694-.177.176.182.171.178-.176-.183-.171ZM.32 27.256a3.186 3.186 0 0 1-.05-.303l-.22.22c.016.097.037.193.062.29l.208-.207ZM.25 26.6H0h.25Z"
      />
      <path
        strokeWidth={0.5}
        d="m4.995.693.002.001 13.76 7.924-6.055 6.006L.395 2.409A3.141 3.141 0 0 1 3.38.25a3.201 3.201 0 0 1 1.615.443Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h27v30H0z" />
      </clipPath>
    </defs>
  </svg>
);
