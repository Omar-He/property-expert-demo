import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import { Formik, Form } from "formik";
import SubPage2 from "../components/SubPages/SubPage2";
import "@testing-library/jest-dom/extend-expect";

beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          { id: 1, title: "post 1" },
          { id: 2, title: "post 2" },
        ]),
    })
  );
});

afterAll(() => {
  delete global.fetch;
});

describe("SubPage2", () => {
  it("should render all form fields", () => {
    const { getByLabelText, getByText } = render(
      <Formik initialValues={{ item: {} }} onSubmit={() => {}}>
        <Form>
          <SubPage2 />
        </Form>
      </Formik>
    );

    expect(getByLabelText("Item 2 Checkbox")).toBeInTheDocument();
    expect(getByText("Item 2 Selecbox")).toBeInTheDocument();
    expect(getByLabelText("Item 2 Textbox")).toBeInTheDocument();
    expect(getByLabelText("Item 2 Numberbox")).toBeInTheDocument();
  });

  it("should update checkbox field value when clicked", async () => {
    const { getByLabelText } = render(
      <Formik initialValues={{ item: {} }} onSubmit={() => {}}>
        <Form>
          <SubPage2 />
        </Form>
      </Formik>
    );

    const checkbox = getByLabelText("Item 2 Checkbox");
    expect(checkbox.checked).toBe(false);
    await act(async () => {
      fireEvent.click(checkbox);
    });
    expect(checkbox.checked).toBe(true);
  });

  it("should update text field value when typed", async () => {
    const { getByLabelText } = render(
      <Formik initialValues={{ item: {} }} onSubmit={() => {}}>
        <Form>
          <SubPage2 />
        </Form>
      </Formik>
    );

    const textField = getByLabelText("Item 2 Textbox");
    expect(textField.value).toBe("");
    await act(async () => {
      fireEvent.change(textField, { target: { value: "test" } });
    });
    expect(textField.value).toBe("test");
  });

  it("should update number field value when typed", async () => {
    const { getByLabelText } = render(
      <Formik initialValues={{ item: {} }} onSubmit={() => {}}>
        <Form>
          <SubPage2 />
        </Form>
      </Formik>
    );

    const numberField = getByLabelText("Item 2 Numberbox");
    expect(numberField.value).toBe("");
    await act(async () => {
      fireEvent.change(numberField, { target: { value: "123" } });
    });
    expect(numberField.value).toBe("123");
  });
});
