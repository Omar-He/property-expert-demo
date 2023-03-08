import { fireEvent, render, waitFor, act } from "@testing-library/react";
import AppWizard from "../components/AppWizard/AppWizard";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

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

describe("AppWizard", () => {
  test("should render Page1 by default", () => {
    const { getByLabelText } = render(<AppWizard />);
    expect(getByLabelText("Category")).toBeInTheDocument();
  });

  test("should navigate to Page2 when Next button is clicked on Page1", async () => {
    const { getByLabelText, getByText, getByTestId } = render(<AppWizard />);

    //Check the first page elements
    const inputElement = getByLabelText("Input");
    const selectorElement = getByTestId("select");
    fireEvent.change(inputElement, {
      target: { value: "HelloWorld" },
    });
    await waitFor(() => {
      expect(inputElement).toHaveValue("HelloWorld");
    });
    await waitFor(() => {
      userEvent.selectOptions(getByTestId("select"), "1");
      expect(selectorElement).toHaveValue("1");
    });

    //----------------------
    //Move to the second page
    fireEvent.click(getByText("Next"));
    await waitFor(() => {
      expect(getByLabelText("Item 1 Checkbox")).toBeInTheDocument();
    });
    //Change the values of the elements
    const checkbox = getByLabelText("Item 1 Checkbox");
    const textbox = getByLabelText("Item 1 Textbox");
    await act(async () => {
      fireEvent.click(checkbox);
      fireEvent.change(textbox, { target: { value: "test" } });
    });
    //Expect to see the correct result
    await waitFor(() => {
      expect(textbox).toHaveValue("test");
    });

    //----------------------
    //Move to the third page
    fireEvent.click(getByText("Next"));
    //Check for the final results
    expect(getByText("Summary")).toBeInTheDocument();
    expect(getByText("The Category is:")).toBeInTheDocument();
    expect(getByText("1")).toBeInTheDocument();
    expect(getByText("The Input is:")).toBeInTheDocument();
    expect(getByText("HelloWorld")).toBeInTheDocument();
    expect(getByText("item1Textbox:")).toBeInTheDocument();
    expect(getByText("test")).toBeInTheDocument();
    expect(getByText("item1Checkbox:")).toBeInTheDocument();
    expect(getByText("true")).toBeInTheDocument();
  });
});
