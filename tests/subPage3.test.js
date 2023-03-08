import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import { Formik, Form } from "formik";
import SubPage3 from "../components/SubPages/SubPage3";
import "@testing-library/jest-dom/extend-expect";

describe("SubPage3", () => {
  it("should render all form fields and handle file upload", async () => {
    const mockOnDrop = jest.fn();
    const initialValues = {
      item: {
        item3Textarea: "initial text",
        item3File: "",
        item3Textbox: "",
      },
    };
    const { getByLabelText, getByText } = render(
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        <Form>
          <SubPage3 />
        </Form>
      </Formik>
    );

    expect(getByLabelText("Item 3 Textarea")).toBeInTheDocument();
    expect(getByText("File Upload")).toBeInTheDocument();
    expect(getByLabelText("Item 3 Textbox")).toBeInTheDocument();

    const textarea = getByLabelText("Item 3 Textarea");
    fireEvent.change(textarea, { target: { value: "new text" } });
    expect(textarea).toHaveValue("new text");

    const dropzoneInput = getByLabelText("File Upload");
    fireEvent.change(dropzoneInput, {
      target: { files: [new File(["file content"], "filename.png")] },
    });
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    expect(getByText("filename.png")).toBeInTheDocument();
  });
});
