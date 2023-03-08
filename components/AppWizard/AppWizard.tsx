import React, { useState, useMemo } from "react";
import { Formik, Form } from "formik";
import { baseSchema, combineSchemas } from "../../utils/validations";
import Wizard from "../Wizard/Wizard";
import Page1 from "../MainPages/Page1";
import Page2 from "../MainPages/Page2";
import Page3 from "../MainPages/Page3";
import { FormValues } from "@/types/form";

const AppWizard = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
  >();
  const [currentPage, setCurrentPage] = useState(0);
  const [formHasErrors, setFormHasErrors] = useState(false);

  const validationSchema = useMemo(
    () => (currentPage === 1 ? combineSchemas(selectedCategory) : baseSchema),
    [selectedCategory, currentPage]
  );

  const handleNext = () => {
    setCurrentPage((prevPageIndex) => prevPageIndex + 1);
  };

  const handlePrev = () => {
    setCurrentPage((prevPageIndex) => prevPageIndex - 1);
  };

  const onSubmit = (values: FormValues) => {
    console.log(values);
    alert("Wizard completed!");
  };

  const isFirstPage = currentPage === 0;
  const isSecondPage = currentPage === 1;
  const isThirdPage = currentPage === 2;

  return (
    <div>
      <Formik
        initialValues={{ category: "", input: "" }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnMount
        validateOnChange
      >
        {({ errors, submitForm }) => {
          const hasErrors = Object.keys(errors).length > 0 || formHasErrors;
          return (
            <Wizard
              totalPages={3}
              onNext={handleNext}
              onPrev={handlePrev}
              currentPageIndex={currentPage}
              isNextDisabled={hasErrors}
              onFinish={submitForm}
            >
              <Form>
                {isFirstPage && (
                  <Page1
                    setSelectedCategory={(value) => setSelectedCategory(value)}
                  />
                )}
                {isSecondPage && <Page2 />}
                {isThirdPage && <Page3 />}
              </Form>
            </Wizard>
          );
        }}
      </Formik>
    </div>
  );
};

export default AppWizard;
