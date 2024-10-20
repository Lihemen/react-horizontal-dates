import type { SVGProps } from "react";

export interface IconType extends SVGProps<SVGSVGElement> {
  /**icon size */
  size?: number;

  /**icon color and fill */
  color?: string;
}
