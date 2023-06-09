import { twMerge } from "tailwind-merge";
import { Typography } from "./Typography";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant: string;
  sx?: string;
}

export const Button = (props: ButtonProps) => {
  const { onClick, children, variant, sx } = props;

  const styles: any = {
    primary: "py-2 px-4 text-center bg-[#303030] text-[#efefef] rounded-[4px]",
    outlined:
      "py-2 px-4 text-center border border-gray-400 text-[#303030] rounded-[4px] ",
    text: "py-2 px-4 text-center border border-transparent text-gray-400",
    disabled: "py-2 px-4 text-center bg-gray-200 text-gray-400 rounded-[4px]",
  };
  const classes = twMerge(sx, variant ? styles[variant] : styles["primary"]);
  return (
    <div onClick={onClick} className={classes}>
      <Typography variant="primary">{children}</Typography>
    </div>
  )
};
