import { render, screen } from "@testing-library/react";
import ResCart from "../ResCart";
import MOCK_DATA from "../mockData/resData.json";
import "@testing-library/jest-dom";

it("Should render ResCart Component with Restaurant name ", () => {
  render(<ResCart ResData={MOCK_DATA} />);

  const name = screen.getByText("Glen's Bakehouse");
  expect(name).toBeInTheDocument();
});
