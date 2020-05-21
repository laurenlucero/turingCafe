import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ReservationCard from "./ReservationCard";

describe("ReservationCard", () => {
  it("should render reservation cards and information", () => {
    const { getByText } = render(
      <ReservationCard name={"Pam"} date={"1/21"} time={"6:00"} number={4} />
    );
    const name = getByText("Pam");
    const date = getByText("1/21");
    const time = getByText("6:00");
    const guests = getByText("Guests: 4");
    const cancelBtn = getByText("Cancel");
    expect(name).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(time).toBeInTheDocument();
    expect(guests).toBeInTheDocument();
    expect(cancelBtn).toBeInTheDocument();
  });
});
