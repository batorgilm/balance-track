import React from "react";
import { colors } from "./theme";

interface TypographyProps {
  variant: string;
  children: React.ReactNode;
}

const typography: any = {
  heading: `text-[36px] font-[590] text-[${colors.primary}]`,
  caption: `text-[14px] font-[390] text-[${colors.caption}]`,
};

export const Typography = ({ variant, children }: TypographyProps) => {
  return <div className={typography[variant]}>{children}</div>;
};
