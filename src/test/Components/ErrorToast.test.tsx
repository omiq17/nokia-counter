import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ErrorToast from "../../components/ErrorToast";

const errorMessage = "Wait 3 seconds before the next click";

describe("ErrorToast", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders the toast with the error message", () => {
    React.act(() => {
      render(<ErrorToast message={errorMessage} />);
    });

    // The toast is rendered
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  test("hides the toast after 3 seconds", () => {
    jest.useFakeTimers();

    React.act(() => {
      render(<ErrorToast message={errorMessage} />);
    });

    // The toast should be visible initially
    expect(screen.getByText(errorMessage)).toBeInTheDocument();

    // Fast-forward time by 3 seconds
    React.act(() => {
      jest.advanceTimersByTime(3000);
    });

    // The toast is no longer visible
    expect(screen.queryByText(errorMessage)).toBeNull();

    jest.useRealTimers();
  });

  test("does not display toast if no message is provided", () => {
    React.act(() => {
      render(<ErrorToast message='' />);
    });

    // The toast is not rendered
    expect(screen.queryByText(errorMessage)).toBeNull();
  });
});
