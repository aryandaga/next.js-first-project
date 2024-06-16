import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface TodoObject {
  userId: number;
  id: number;
  value: string;
  done: boolean;
};
