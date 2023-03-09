import React from "react";
import { Field, ErrorMessage } from "formik";

type NumberboxProps = {
  id: string;
  label: string;
  name: string;
  className?: string;
  value?: string | number;
};

const Numberbox = ({
  id,
  label,
  name,
  className = "",
  value = "",
}: NumberboxProps) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-gray-700 font-bold mb-2">
        {label}
      </label>
      <Field name={name}>
        {({ field }: { field: any }) => (
          <input
            id={id}
            type="number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...field}
            value={value}
          />
        )}
      </Field>
      <ErrorMessage name={name} className="text-red-500" component="div" />
    </div>
  );
};

export default Numberbox;
