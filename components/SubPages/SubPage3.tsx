import React, { useEffect } from "react";
import { useFormikContext, ErrorMessage } from "formik";
import { FormValues } from "@/types/form";
import TextArea from "../FormComponents/TextArea";
import FileUpload from "../FormComponents/FileUpload";
import Textbox from "../FormComponents/Textbox";

const SubPage3: React.FC = () => {
  const formik = useFormikContext<FormValues>();
  const { item } = formik.values;

  const handleDrop = (acceptedFiles: File[]) => {
    formik.setFieldValue("item.item3File", acceptedFiles[0].name);
  };

  useEffect(() => {
    formik.validateForm();
  }, []);

  return (
    <>
      <TextArea
        id="item.item3Textarea"
        name="item.item3Textarea"
        label="Item 3 Textarea"
        placeholder="Item 3"
        value={item?.item3Textarea || ""}
      />
      <FileUpload
        id="item.item3File"
        name="item.item3File"
        label="File Upload"
        handleDrop={handleDrop}
        value={item?.item3File || ""}
      />
      <Textbox
        id="item.item3Textbox"
        name="item.item3Textbox"
        label="Item 3 Textbox"
        type="text"
        value={item?.item3Textbox || ""}
      />
    </>
  );
};

export default SubPage3;
