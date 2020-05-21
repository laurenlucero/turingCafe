import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ReservationForm from "./ReservationForm";

describe("ReservationForm", () => {
  it("should render reservation form", () => {
    const { getByText, getByPlaceholderText } = render(<ReservationForm />);
    expect(getByPlaceholderText("Name")).toBeInTheDocument();
    expect(getByText("Make Reservation")).toBeInTheDocument();
  });

  it("should hold input value", () => {
    const { getByPlaceholderText } = render(<ReservationForm />);
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
      target: { value: 7 },
    });
  });
});
