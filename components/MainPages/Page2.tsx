import React from "react";
import { useFormikContext } from "formik";
import SubPage1 from "../SubPages/SubPage1";
import SubPage2 from "../SubPages/SubPage2";
import SubPage3 from "../SubPages/SubPage3";
import { FormValues } from "@/types/form";

const Page2 = () => {
  const formik = useFormikContext<FormValues>();
  const { category } = formik.values;
  return (
    <div>
      {Number(category) === 1 && <SubPage1 />}
      {Number(category) === 2 && <SubPage2 />}
      {Number(category) === 3 && <SubPage3 />}
    </div>
  );
};

export default Page2;
