import { useState, useEffect } from "react";
import { Field, ErrorMessage, useFormikContext } from "formik";
import { Category, FormValues } from "@/types/form";
import { fetchList } from "../../utils/requests";
import Textbox from "../FormComponents/Textbox";
import Select from "../FormComponents/Select";

interface Page1Props {
  setSelectedCategory: (category: string) => void;
}

function Page1({ setSelectedCategory }: Page1Props) {
  const [categories, setCategories] = useState<Category[]>([]);
  const formik = useFormikContext<FormValues>();

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await fetchList("todos");
      setCategories(data);
    };

    fetchCategories();
    formik.validateForm();
  }, []);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    formik.setFieldValue("category", e.target.value);
    formik.setFieldValue("item", {});
    setSelectedCategory(e.target.value);
    formik.handleChange(e);
  };

  return (
    <>
      <Select
        id="category"
        label="Category"
        name="category"
        onChange={handleCategoryChange}
        className="mb-4"
      >
        <option value="">--Please select a category--</option>
        {categories.map((category) => (
          <option value={category.id} key={category.id}>
            {category.id}
          </option>
        ))}
      </Select>

      <Textbox
        id="input"
        label="Input"
        name="input"
        type="text"
        className="mb-4"
        value={formik.values?.input || ""}
      />
    </>
  );
}

export default Page1;
