import React from "react";
import { Field, ErrorMessage } from "formik";

type CheckboxProps = {
  id: string;
  label: string;
  name: string;
  className: string;
};

const Checkbox = ({ id, label, name, className }: CheckboxProps) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-gray-700 font-bold mb-2">
        {label}
      </label>
      <Field id={id} type="checkbox" name={name} className="mr-2" />
      <ErrorMessage name={name} className="text-red-500" component="div" />
    </div>
  );
};

export default Checkbox;
