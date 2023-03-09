import React, { useEffect } from "react";
import { useFormikContext } from "formik";
import { FormValues } from "@/types/form";
import Checkbox from "../FormComponents/Checkbox";
import Textbox from "../FormComponents/Textbox";
import Numberbox from "../FormComponents/Numberbox";

const SubPage1 = () => {
  const formik = useFormikContext<FormValues>();
  const { item } = formik.values;

  useEffect(() => {
    formik.validateForm();
  }, []);

  return (
    <>
      <Checkbox
        id="item.item1Checkbox"
        label="Item 1 Checkbox"
        name="item.item1Checkbox"
        className="mb-4"
      />
      <Textbox
        id="item.item1Textbox"
        label="Item 1 Textbox"
        name="item.item1Textbox"
        type="text"
        className="mb-4"
        value={item?.item1Textbox || ""}
      />
      <Numberbox
        id="item.item1Numberbox"
        label="Item 1 Numberbox"
        name="item.item1Numberbox"
        className="mb-4"
        value={item?.item1Numberbox || ""}
      />
    </>
  );
};

export default SubPage1;
