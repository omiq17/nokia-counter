import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../app/App";

test("renders learn react link", () => {
  render(<App />);
  const heading = screen.getByText(/nokia counter/i);
  expect(heading).toBeInTheDocument();
});
