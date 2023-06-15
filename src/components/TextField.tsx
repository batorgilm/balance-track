import React from "react";
import { Typography } from "./Typography";
interface ITextField extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  onChange?: any;
  helperText?: any;
}

export const TextField = React.forwardRef(
  (props: ITextField, ref: React.Ref<HTMLInputElement> | null) => {
    const { label, helperText, ...rest } = props;

    return (
      <div className="mt-2 w-full">
        <label className="block mb-2 text-sm font-medium">{props?.label}</label>
        <input
          ref={ref}
          {...rest}
          className="px-4 py-2 border rounded-md w-full"
        />
        {helperText && <Typography variant="caption">{helperText}</Typography>}
      </div>
    );
  }
);
TextField.displayName = "TextField";
