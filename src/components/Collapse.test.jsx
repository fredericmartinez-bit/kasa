import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Collapse from "./Collapse";

describe("Collapse", () => {
  test("ouvre et ferme le contenu au clic", () => {
    render(
      <Collapse title="Fiabilité" content="Les annonces sont vérifiées." />,
    );

    expect(
      screen.queryByText("Les annonces sont vérifiées."),
    ).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Fiabilité"));
    expect(
      screen.getByText("Les annonces sont vérifiées."),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByText("Fiabilité"));
    expect(
      screen.queryByText("Les annonces sont vérifiées."),
    ).not.toBeInTheDocument();
  });
});
