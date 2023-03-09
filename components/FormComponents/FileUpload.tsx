import React from "react";
import { useFormikContext } from "formik";
import Dropzone, {
  DropzoneRootProps,
  DropzoneInputProps,
} from "react-dropzone";
import { FormValues } from "@/types/form";

interface Props {
  id: string;
  label: string;
  name: string;
  value: string;
  handleDrop: (acceptedFiles: File[]) => void;
}

const FileUpload: React.FC<Props> = ({
  id,
  label,
  name,
  value,
  handleDrop,
}) => {
  const formik = useFormikContext<FormValues>();
  const { item } = formik.values;

  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 font-bold mb-2">
        {label}
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
            <input id={id} {...getInputProps()} />
            {value ? <p>{value}</p> : <p>Click to select a file</p>}
          </div>
        )}
      </Dropzone>
    </div>
  );
};

export default FileUpload;
