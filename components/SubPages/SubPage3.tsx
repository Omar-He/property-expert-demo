import React, { useEffect } from "react";
import { useFormikContext, ErrorMessage } from "formik";
import Dropzone, {
  DropzoneRootProps,
  DropzoneInputProps,
} from "react-dropzone";
import { FormValues } from "@/types/form";

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
      <div className="mb-4">
        <label
          htmlFor="item.item3Textarea"
          className="block text-gray-700 font-bold mb-2"
        >
          Item 3 Textarea
        </label>
        <textarea
          id="item.item3Textarea"
          name="item.item3Textarea"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Item 3"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={item?.item3Textarea}
        />
        <ErrorMessage
          name="item.item3Textarea"
          className="text-red-500"
          component="div"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="item.item3File"
          className="block text-gray-700 font-bold mb-2"
        >
          File Upload
        </label>
        <Dropzone onDrop={handleDrop}>
          {({
            getRootProps,
            getInputProps,
          }: {
            getRootProps: () => DropzoneRootProps;
            getInputProps: () => DropzoneInputProps;
          }) => (
            <div
              {...getRootProps()}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <input id="item.item3File" {...getInputProps()} />
              {item?.item3File ? (
                <p>{item?.item3File}</p>
              ) : (
                <p>Click to select a file</p>
              )}
            </div>
          )}
        </Dropzone>
      </div>
      <div className="mb-4">
        <label
          htmlFor="item.item3Textbox"
          className="block text-gray-700 font-bold mb-2"
        >
          Item 3 Textbox
        </label>
        <input
          id="item.item3Textbox"
          name="item.item3Textbox"
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Item 2"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={item?.item3Textbox || ""}
        />
        <ErrorMessage
          name="item.item3Textbox"
          className="text-red-500"
          component="div"
        />
      </div>
    </>
  );
};

export default SubPage3;
