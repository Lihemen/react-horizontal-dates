import React from "react";

import type { IconType } from "../types";

export function IconChevronLeft({
  color = "#B0B0B0",
  size,
  ...props
}: IconType) {
  return (
    <svg
      width="14"
      height="22"
      fill="none"
      id="chevron-left"
      viewBox="0 0 14 22"
      {...props}
      fontSize={size}
      color={color}
      xmlns="http://www.w3.org/2000/svg">
      <title>Chevron left</title>
      <path
        d="M11.4065 2.80232L2.92126 11.2876L11.4065 19.7729"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
