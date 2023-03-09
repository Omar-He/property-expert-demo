import React, { ReactElement } from "react";
import { Field, ErrorMessage } from "formik";

interface OptionType {
  id: string | number;
}

type SelectProps = {
  id: string;
  label: string;
  name: string;
  value?: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
};

const Select = ({
  id,
  label,
  name,
  value,
  className = "",
  onChange,
  children,
}: SelectProps) => {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-gray-700 font-bold mb-2">
        {label}
      </label>
      <Field
        id={id}
        as="select"
        data-testid="select"
        name={name}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={onChange}
      >
        {children}
      </Field>
      <ErrorMessage name={name} className="text-red-500" component="div" />
    </div>
  );
};

export default Select;
