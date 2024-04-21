import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactUS from "../ContactUS";

test("Should render Contact Us Page", () => {
  render(<ContactUS />);
  const heading = screen.getByRole("heading");
  //Assertion
  expect(heading).toBeInTheDocument();
});
test("Should button in Contact Us Page", () => {
  render(<ContactUS />);
  // const button = screen.getByRole("button");
  const button = screen.getByText("Submit");
  //Assertion
  expect(button).toBeInTheDocument();
});
test("Should button in Contact Us Page", () => {
  render(<ContactUS />);
  // const button = screen.getByRole("button");
  const button = screen.getByText("Submit");
  //Assertion
  expect(button).toBeInTheDocument();
});
test("Should input name in Contact Us Page", () => {
  render(<ContactUS />);
  // const button = screen.getByRole("button");
  const inputName = screen.getByPlaceholderText("name");
  //Assertion
  expect(inputName).toBeInTheDocument();
});
