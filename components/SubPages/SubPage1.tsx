import React, { useEffect } from "react";
import { Field, ErrorMessage } from "formik";
import { useFormikContext } from "formik";
import { FormValues } from "@/types/form";

const SubPage1 = () => {
  const formik = useFormikContext<FormValues>();
  const { item } = formik.values;

  useEffect(() => {
    formik.validateForm();
  }, []);

  return (
    <>
      <div className="mb-4">
        <label
          htmlFor="item.item1Checkbox"
          className="block text-gray-700 font-bold mb-2"
        >
          Item 1 Checkbox
        </label>
        <Field
          id="item.item1Checkbox"
          type="checkbox"
          name="item.item1Checkbox"
          className="mr-2"
        />
        <ErrorMessage
          name="item.item1Checkbox"
          className="text-red-500"
          component="div"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="item.item1Textbox"
          className="block text-gray-700 font-bold mb-2"
        >
          Item 1 Textbox
        </label>
        <Field
          id="item.item1Textbox"
          type="text"
          name="item.item1Textbox"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={item?.item1Textbox || ""}
        />
        <ErrorMessage
          name="item.item1Textbox"
          className="text-red-500"
          component="div"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="item.item1Numberbox"
          className="block text-gray-700 font-bold mb-2"
        >
          Item 1 Numberbox
        </label>
        <Field
          id="item.item1Numberbox"
          type="number"
          name="item.item1Numberbox"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={item?.item1Numberbox || ""}
        />
        <ErrorMessage
          name="item.item1Numberbox"
          className="text-red-500"
          component="div"
        />
      </div>
    </>
  );
};

export default SubPage1;
