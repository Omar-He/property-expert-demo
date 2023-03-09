import React from "react";
import { Field, ErrorMessage } from "formik";

type TextInputProps = {
  id: string;
  label: string;
  name: string;
  type: string;
  value?: string;
  className?: string;
};

const Textbox = ({
  id,
  label,
  name,
  type,
  value,
  className = "",
}: TextInputProps) => {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-gray-700 font-bold mb-2">
        {label}
      </label>
      <Field
        id={id}
        type={type}
        name={name}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={value}
      />
      <ErrorMessage name={name} className="text-red-500" component="div" />
    </div>
  );
};

export default Textbox;
