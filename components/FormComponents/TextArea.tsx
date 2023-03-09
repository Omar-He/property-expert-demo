import React from "react";
import { useFormikContext, ErrorMessage } from "formik";
import { FormValues } from "@/types/form";

interface Props {
  id: string;
  label: string;
  placeholder: string;
  name: string;
  value: string;
}

const TextArea: React.FC<Props> = ({ id, label, placeholder, name, value }) => {
  const formik = useFormikContext<FormValues>();

  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 font-bold mb-2">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder={placeholder}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={value}
      />
      <ErrorMessage name={name} className="text-red-500" component="div" />
    </div>
  );
};

export default TextArea;
