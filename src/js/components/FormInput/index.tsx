import React, { HTMLAttributes } from "react";
import clsx from "clsx";
import "./index.scss";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  handleChange: React.ChangeEventHandler;
  value: string;
  label?: string;
  [others: string]: any;
}
const FormInput: React.FC<FormInputProps> = ({
  handleChange,
  value,
  label,
  ...otherProps
}) => {
  return (
    <div className="group">
      <input className="form-input" value={value} onChange={handleChange} {...otherProps} />
      {label && (
        <label htmlFor={label} className={clsx(value && "shrink", "form-input-label")}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
