import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { expect, test } from "vitest";
import App from "./App";

test("renders hello text", () => {
  render(<App />);
  const element = screen.getByText(/h there/i);
  expect(element).toBeInTheDocument();
});