import { useState, useEffect } from "react";
import { Field, ErrorMessage, useFormikContext } from "formik";
import { Category } from "@/types/form";
import { fetchList } from "../../utils/requests";

interface Page1Props {
  setSelectedCategory: (category: string) => void;
}

function Page1({ setSelectedCategory }: Page1Props) {
  const [categories, setCategories] = useState<Category[]>([]);
  const formik = useFormikContext();

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
      <div className="mb-4">
        <label
          htmlFor="category"
          className="block text-gray-700 font-bold mb-2"
        >
          Category
        </label>
        <Field
          id="category"
          as="select"
          data-testid="select"
          name="category"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleCategoryChange}
        >
          <option value="">--Please select a category--</option>
          {categories.map((category) => (
            <option value={category.id} key={category.id}>
              {category.id}
            </option>
          ))}
        </Field>
        <ErrorMessage
          name="category"
          className="text-red-500"
          component="div"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="input" className="block text-gray-700 font-bold mb-2">
          Input
        </label>
        <Field
          id="input"
          type="text"
          name="input"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <ErrorMessage name="input" className="text-red-500" component="div" />
      </div>
    </>
  );
}

export default Page1;
