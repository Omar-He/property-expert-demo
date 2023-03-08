import React from "react";

interface WizardProps {
  children: React.ReactNode;
  onNext: () => void;
  onPrev: () => void;
  currentPageIndex: number;
  totalPages: number;
  isNextDisabled: boolean;
  onFinish: () => void;
}

function Wizard({
  children,
  onNext,
  onPrev,
  currentPageIndex,
  totalPages,
  isNextDisabled,
  onFinish,
}: WizardProps): JSX.Element {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg w-1/3">
        <div>{children}</div>
        <div className="mt-8 flex justify-end">
          {currentPageIndex !== 0 && (
            <button
              className="px-4 py-2 bg-gray-300 rounded-lg"
              onClick={onPrev}
            >
              Prev
            </button>
          )}
          {currentPageIndex !== totalPages - 1 ? (
            <button
              className={`px-4 py-2 text-white rounded-lg ml-4 ${
                isNextDisabled
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-blue-500"
              }`}
              onClick={onNext}
              disabled={isNextDisabled}
              type="submit"
            >
              Next
            </button>
          ) : (
            <button
              className="px-4 py-2 bg-green-500 text-white rounded-lg ml-4"
              onClick={() => onFinish()}
            >
              Finish
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Wizard;
