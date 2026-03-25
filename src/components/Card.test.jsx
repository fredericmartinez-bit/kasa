import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Card from "./Card";

describe("Card", () => {
  test("affiche le titre du logement", () => {
    render(
      <BrowserRouter>
        <Card
          id="1"
          title="Appartement cosy"
          cover="https://via.placeholder.com/300x200"
        />
      </BrowserRouter>,
    );

    expect(screen.getByText("Appartement cosy")).toBeInTheDocument();
  });
});
