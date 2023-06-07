import { Typography } from "./Typography";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant: string;
}

export const Button = (props: ButtonProps) => {
  const { onClick, children, variant } = props;

  const styles: any = {
    primary: "py-2 px-4 bg-[#303030] text-[#efefef] rounded-[4px]",
    outlined: "py-2 px-4 border border-gray-400 text-[#303030] rounded-[4px] ",
    text: "py-2 px-4 border border-transparent text-gray-400",
  };

  return (
    <button
      onClick={onClick}
      className={variant ? styles[variant] : styles["primary"]}
    >
      <Typography variant="primary">{children}</Typography>
    </button>
  );
};
