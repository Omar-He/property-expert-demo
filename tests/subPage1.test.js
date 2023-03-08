import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import { Formik, Form } from "formik";
import SubPage1 from "../components/SubPages/SubPage1";

describe("SubPage1", () => {
  it("should update checkbox value when clicked", async () => {
    const initialValues = { item: { item1Checkbox: false } };
    const onSubmit = jest.fn();
    const { getByLabelText } = render(
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <SubPage1 />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );

    const checkbox = getByLabelText("Item 1 Checkbox");
    await act(async () => {
      fireEvent.click(checkbox);
    });
    expect(checkbox.value).toEqual("true");
  });

  it("should update textbox value when typed into", async () => {
    const initialValues = { item: { item1Textbox: "" } };
    const onSubmit = jest.fn();
    const { getByLabelText } = render(
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <SubPage1 />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );

    const textbox = getByLabelText("Item 1 Textbox");
    await act(async () => {
      fireEvent.change(textbox, { target: { value: "test" } });
    });
    expect(textbox.value).toEqual("test");
  });

  it("should update numberbox value when typed into", async () => {
    const initialValues = { item: { item1Numberbox: "" } };
    const onSubmit = jest.fn();
    const { getByLabelText } = render(
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <SubPage1 />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );

    const numberbox = getByLabelText("Item 1 Numberbox");
    await act(async () => {
      fireEvent.change(numberbox, { target: { value: "123" } });
    });
    expect(numberbox.value).toBe("123");
  });
});
