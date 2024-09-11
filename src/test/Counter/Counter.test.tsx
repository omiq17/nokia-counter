import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Counter from "../../features/counter";

const errorMessage = "Wait 3 seconds before the next click";

describe("Counter", () => {
  test("renders with initial count of 0", () => {
    render(<Counter />);
    expect(screen.getByText(/Current Count: 0/)).toBeInTheDocument();
  });

  test('increments count on "Increment" button click', () => {
    render(<Counter />);
    fireEvent.click(screen.getByText("Increment"));
    expect(screen.getByText(/Current Count: 1/)).toBeInTheDocument();
  });

  test('decrements count on "Decrement" button click', () => {
    render(<Counter />);
    jest.useFakeTimers();

    fireEvent.click(screen.getByText("Increment")); // Increment first to make count 1
    // Fast-forward time by 3 seconds
    React.act(() => {
      jest.advanceTimersByTime(3000);
    });
    fireEvent.click(screen.getByText("Decrement"));
    expect(screen.getByText(/Current Count: 0/)).toBeInTheDocument();
  });

  test("shows error message if buttons are clicked within 3 seconds", () => {
    render(<Counter />);
    fireEvent.click(screen.getByText("Increment"));
    fireEvent.click(screen.getByText("Increment")); // Click within 3 seconds

    // Check if the error message is displayed
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  test("does not display error message if buttons are clicked after 3 seconds", () => {
    render(<Counter />);
    jest.useFakeTimers();

    fireEvent.click(screen.getByText("Increment"));

    // Fast-forward time by 3 seconds
    React.act(() => {
      jest.advanceTimersByTime(3000);
    });

    fireEvent.click(screen.getByText("Increment")); // Click after 3 seconds

    // Error message should not be displayed
    expect(screen.queryByText(errorMessage)).toBeNull();
  });
});
