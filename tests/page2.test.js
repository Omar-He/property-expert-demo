import React from "react";
import { render } from "@testing-library/react";
import { Formik, Form } from "formik";
import Page2 from "../components/MainPages/Page2";
import "@testing-library/jest-dom/extend-expect";

describe("Page2", () => {
  it("renders SubPage1 when category is 1", () => {
    const { getByText } = render(
      <Formik initialValues={{ category: "1" }}>
        <Form>
          <Page2 />
        </Form>
      </Formik>
    );

    expect(getByText("Item 1 Checkbox")).toBeInTheDocument();
  });

  it("renders SubPage2 when category is 2", () => {
    const { getByText } = render(
      <Formik initialValues={{ category: "2" }}>
        <Form>
          <Page2 />
        </Form>
      </Formik>
    );

    expect(getByText("Item 2 Checkbox")).toBeInTheDocument();
  });

  it("renders SubPage3 when category is 3", () => {
    const { getByText } = render(
      <Formik initialValues={{ category: "3" }}>
        <Form>
          <Page2 />
        </Form>
      </Formik>
    );

    expect(getByText("Item 3 Textarea")).toBeInTheDocument();
  });

  it("does not render any subpage when category is not 1, 2 or 3", () => {
    const { queryByText } = render(
      <Formik initialValues={{ category: "4" }}>
        <Form>
          <Page2 />
        </Form>
      </Formik>
    );

    expect(queryByText("Item 1 Checkbox")).not.toBeInTheDocument();
    expect(queryByText("Item 2 Checkbox")).not.toBeInTheDocument();
    expect(queryByText("Item 3 Textarea")).not.toBeInTheDocument();
  });
});
