import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Wizard from "../components/Wizard/Wizard";
import "@testing-library/jest-dom/extend-expect";

describe("Wizard", () => {
  const onNext = jest.fn();
  const onPrev = jest.fn();
  const onFinish = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing", () => {
    render(
      <Wizard
        onNext={onNext}
        onPrev={onPrev}
        currentPageIndex={0}
        totalPages={3}
        isNextDisabled={false}
        onFinish={onFinish}
      >
        <div>Page 1</div>
      </Wizard>
    );
  });

  it("displays the current page", () => {
    const { getByText } = render(
      <Wizard
        onNext={onNext}
        onPrev={onPrev}
        currentPageIndex={0}
        totalPages={3}
        isNextDisabled={false}
        onFinish={onFinish}
      >
        <div>Page 1</div>
      </Wizard>
    );

    expect(getByText("Page 1")).toBeInTheDocument();
  });

  it("calls onPrev when Prev button is clicked", () => {
    const { getByText } = render(
      <Wizard
        onNext={onNext}
        onPrev={onPrev}
        currentPageIndex={1}
        totalPages={3}
        isNextDisabled={false}
        onFinish={onFinish}
      >
        <div>Page 2</div>
      </Wizard>
    );

    fireEvent.click(getByText("Prev"));

    expect(onPrev).toHaveBeenCalledTimes(1);
  });

  it("calls onNext when Next button is clicked", () => {
    const { getByText } = render(
      <Wizard
        onNext={onNext}
        onPrev={onPrev}
        currentPageIndex={1}
        totalPages={3}
        isNextDisabled={false}
        onFinish={onFinish}
      >
        <div>Page 2</div>
      </Wizard>
    );

    fireEvent.click(getByText("Next"));

    expect(onNext).toHaveBeenCalledTimes(1);
  });

  it("calls onFinish when Finish button is clicked", () => {
    const { getByText } = render(
      <Wizard
        onNext={onNext}
        onPrev={onPrev}
        currentPageIndex={2}
        totalPages={3}
        isNextDisabled={false}
        onFinish={onFinish}
      >
        <div>Page 3</div>
      </Wizard>
    );

    fireEvent.click(getByText("Finish"));

    expect(onFinish).toHaveBeenCalledTimes(1);
  });

  it("disables the Next button when isNextDisabled is true", () => {
    const { getByText } = render(
      <Wizard
        onNext={onNext}
        onPrev={onPrev}
        currentPageIndex={0}
        totalPages={3}
        isNextDisabled={true}
        onFinish={onFinish}
      >
        <div>Page 1</div>
      </Wizard>
    );

    const nextButton = getByText("Next");
    expect(nextButton).toBeDisabled();
  });
});
