import React, { useEffect, useState } from "react";
import { Field, ErrorMessage, useFormikContext } from "formik";
import { FormValues } from "@/types/form";
import { fetchList } from "../../utils/requests";
import MultiSelect from "../MultiSelect/MultiSelect";
import { optimizeOptions } from "../../utils/optimizeOptions";

interface PostType {
  id: number;
  title: string;
}
const SubPage2 = () => {
  const formik = useFormikContext<FormValues>();
  const { item } = formik.values;

  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    formik.validateForm();
  }, []);

  useEffect(() => {
    const fetchPostsData = async () => {
      const data = await fetchList("posts");
      setPosts(data);
    };

    fetchPostsData();
  }, []);

  return (
    <>
      <div className="mb-4">
        <label
          htmlFor="item.item2Checkbox"
          className="block text-gray-700 font-bold mb-2"
        >
          Item 2 Checkbox
        </label>
        <Field
          id="item.item2Checkbox"
          type="checkbox"
          name="item.item2Checkbox"
          className="mr-2"
        />
        <ErrorMessage
          name="item.item2Checkbox"
          className="text-red-500"
          component="div"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="item.item2SelectBox"
          className="block text-gray-700 font-bold mb-2"
        >
          Item 2 Selecbox
        </label>
        <MultiSelect
          name="item.item2SelectBox"
          options={optimizeOptions(posts)}
        />
        <ErrorMessage
          name="item.item2SelectBox"
          className="text-red-500"
          component="div"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="item.item2Textbox"
          className="block text-gray-700 font-bold mb-2"
        >
          Item 2 Textbox
        </label>
        <Field
          id="item.item2Textbox"
          type="text"
          name="item.item2Textbox"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={item?.item2Textbox || ""}
        />
        <ErrorMessage
          name="item.item2Textbox"
          className="text-red-500"
          component="div"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="item.item2Numberbox"
          className="block text-gray-700 font-bold mb-2"
        >
          Item 2 Numberbox
        </label>
        <Field
          id="item.item2Numberbox"
          type="number"
          name="item.item2Numberbox"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={item?.item2Numberbox || ""}
        />
        <ErrorMessage
          name="item.item2Numberbox"
          className="text-red-500"
          component="div"
        />
      </div>
    </>
  );
};

export default SubPage2;
