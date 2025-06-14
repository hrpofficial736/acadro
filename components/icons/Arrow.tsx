import React from "react";
import type { SVGProps } from "react";

export function Arrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 12H3"
          strokeWidth={1}
        ></path>
        <path
          fill="currentColor"
          d="m21.643 11.786l-3.431-2.059a.8.8 0 0 0-1.212.686v3.174a.8.8 0 0 0 1.212.686l3.43-2.059a.25.25 0 0 0 0-.428"
        ></path>
      </g>
    </svg>
  );
}
