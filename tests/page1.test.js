import { render, fireEvent, waitFor, act } from "@testing-library/react";
import Page1 from "../components/MainPages/Page1";
import { Formik, Form } from "formik";
import "@testing-library/jest-dom/extend-expect";
import { baseSchema } from "../utils/validations";

beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          { id: 1, title: "Category 1" },
          { id: 2, title: "Category 2" },
        ]),
    })
  );
});

afterAll(() => {
  delete global.fetch;
});

const initialValues = { category: "", input: "" };
const onSubmit = jest.fn();
const setSelectedCategory = jest.fn();
const setFieldValue = jest.fn();

describe("Page1", () => {
  test("renders the category select and input fields", async () => {
    const { getByLabelText } = render(
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Page1
            setSelectedCategory={setSelectedCategory}
            setFieldValue={setFieldValue}
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );

    const selectElement = getByLabelText("Category");

    await waitFor(() => {
      expect(selectElement).toBeInTheDocument();
      expect(selectElement).toHaveValue("");
      expect(selectElement).toContainHTML(
        '<option value="">--Please select a category--</option>'
      );
      expect(selectElement).toContainHTML('<option value="1">1</option>');
      expect(selectElement).toContainHTML('<option value="2">2</option>');
    });
  });

  test("displays an error messages if category is not selected or the input is empty", async () => {
    const { getByLabelText, getByText } = render(
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={baseSchema}
      >
        <Form>
          <Page1
            setSelectedCategory={setSelectedCategory}
            setFieldValue={setFieldValue}
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );
    const inputField = getByLabelText("Input");
    const selectElement = getByLabelText("Category");
    await act(async () => {
      fireEvent.blur(selectElement);
      fireEvent.blur(inputField);
    });
    await waitFor(() => {
      expect(getByText("Category is required")).toBeInTheDocument();
      expect(getByText("input is a required field")).toBeInTheDocument();
    });
  });

  test("calls the setSelectedCategory function when category is selected", async () => {
    const setSelectedCategoryMock = jest.fn();
    const { getByLabelText } = render(
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={baseSchema}
      >
        <Form>
          <Page1 setSelectedCategory={setSelectedCategoryMock} />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );

    const categorySelect = getByLabelText("Category");
    await act(async () => {
      fireEvent.change(categorySelect, { target: { value: "1" } });
    });
    expect(setSelectedCategoryMock).toHaveBeenCalled();
  });
});
