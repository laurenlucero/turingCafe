import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("App", () => {
  it("should let user add a new reservation on Make Reservation click", () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    fireEvent.change(getByPlaceholderText("Name"), {
      target: { value: "Lauren" },
    });
    fireEvent.change(getByPlaceholderText("Date (mm/dd)"), {
      target: { value: "12/20" },
    });
    fireEvent.change(getByPlaceholderText("Time"), {
      target: { value: "8:00" },
    });
    fireEvent.change(getByPlaceholderText("Number of guests"), {
      target: { value: "7" },
    });
    fireEvent.click(getByText("Make Reservation"));
    expect(getByText("Lauren")).toBeInTheDocument();
    expect(getByText("12/20")).toBeInTheDocument();
    expect(getByText("8:00")).toBeInTheDocument();
    expect(getByText("Guests: 7")).toBeInTheDocument();
  });
});
