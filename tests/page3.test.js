import React from "react";
import { render } from "@testing-library/react";
import { Formik } from "formik";
import Page3 from "../components/MainPages/Page3";
import "@testing-library/jest-dom/extend-expect";

describe("Page3", () => {
  it("renders summary information", () => {
    const { getByText } = render(
      <Formik initialValues={{ category: "testCat", input: "testInput" }}>
        <Page3 />
      </Formik>
    );

    expect(getByText("The Category is:")).toBeInTheDocument();
    expect(getByText("testCat")).toBeInTheDocument();
    expect(getByText("The Input is:")).toBeInTheDocument();
    expect(getByText("testInput")).toBeInTheDocument();
  });

  it("renders list items when there are items in values", () => {
    const { getByText } = render(
      <Formik
        initialValues={{
          category: "testCat",
          input: "testInput",
          item: { textBox: "box1", numberBox: "1997" },
        }}
      >
        <Page3 />
      </Formik>
    );

    expect(getByText("textBox:")).toBeInTheDocument();
    expect(getByText("box1")).toBeInTheDocument();
    expect(getByText("numberBox:")).toBeInTheDocument();
    expect(getByText("1997")).toBeInTheDocument();
  });
});
