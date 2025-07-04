import React from "react";
import type { SVGProps } from "react";

export function Success(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={15}
      height={15}
      viewBox="0 0 15 15"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
