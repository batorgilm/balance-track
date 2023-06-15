import React from "react";
import { Typography } from "./Typography";
import { startCase } from "lodash";
import { Loading } from "./Loading";
interface ISelect extends React.InputHTMLAttributes<HTMLInputElement> {
  categories?: any;
  loading?: boolean;
  label?: string;
}

export const Select = React.forwardRef(
  (props: ISelect, ref: React.Ref<HTMLSelectElement> | null) => {
    const { categories, loading, label } = props;

    return (
      <div className="w-full">
        <label className="block mb-2 text-sm font-medium">{label}</label>
        <select className="px-4 py-2 border rounded-md w-full" ref={ref}>
          <option selected>
            {!loading ? "Choose a category" : "Loading..."}
          </option>

          {categories?.map((category: any) => (
            <option key={category?.id} value={category?.id}>
              {startCase(category?.text ?? "")}
            </option>
          ))}
        </select>
      </div>
    );
  }
);
Select.displayName = "Select";
