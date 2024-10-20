import React from "react";

import type { IconType } from "../types";

export function IconChevronRight({
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
      <title>Chevron Right</title>
      <path
        d="M2.59342 19.6362L11.0787 11.1509L2.59342 2.6656"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
