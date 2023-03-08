import React from "react";
import { useFormikContext } from "formik";
import { FormValues } from "@/types/form";

const Page3 = () => {
  const formik = useFormikContext<FormValues>();
  const { values } = formik;

  const listItems = values.item
    ? Object.keys(values.item).map((entry, index) => (
        <li className="mb-2" key={index}>
          <span>{entry}: </span>
          <span className="py-[2px] px-2 bg-yellow-200 border border-gray-300 rounded-md">
            {`${values.item ? values.item[entry] : ""}`}
          </span>
        </li>
      ))
    : null;

  return (
    <div>
      <h2 className="block text-gray-700 font-bold mb-2">Summary</h2>
      <ul className="list-disc pl-5">
        <li className="mb-2">
          <span>The Category is:</span>{" "}
          <span className="py-[2px] px-2 bg-yellow-200 border border-gray-300 rounded-md">
            {values.category}
          </span>
        </li>
        <li className="mb-2">
          <span>The Input is:</span>{" "}
          <span className="py-[2px] px-2 bg-yellow-200 border border-gray-300 rounded-md">
            {values.input}
          </span>
        </li>
        {listItems}
      </ul>
    </div>
  );
};

export default Page3;
