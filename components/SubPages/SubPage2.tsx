import React, { useEffect, useState } from "react";
import { Field, ErrorMessage, useFormikContext, FieldProps } from "formik";
import { FormValues } from "@/types/form";
import { fetchList } from "../../utils/requests";
import MultiSelect from "../FormComponents/MultiSelect";
import { optimizeOptions } from "../../utils/optimizeOptions";
import Checkbox from "../FormComponents/Checkbox";
import Textbox from "../FormComponents/Textbox";
import Numberbox from "../FormComponents/Numberbox";

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
      <Checkbox
        id="item.item2Checkbox"
        label="Item 2 Checkbox"
        name="item.item2Checkbox"
        className="mb-4"
      />

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

      <Textbox
        id="item.item2Textbox"
        label="Item 2 Textbox"
        name="item.item2Textbox"
        type="text"
        value={item?.item2Textbox || ""}
      />

      <Numberbox
        id="item.item2Numberbox"
        label="Item 2 Numberbox"
        name="item.item2Numberbox"
        value={item?.item2Numberbox || ""}
      />
    </>
  );
};

export default SubPage2;
