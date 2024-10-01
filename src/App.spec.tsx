import { cleanup, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "./App";

describe("App", () => {
    afterEach (() => {
        cleanup();
    });

    it("should render", () => {
        render(<App />);
    });

    it("should super", () => {
        render(<App />);
        expect(screen.getByText(/Super/ig)).toBeInTheDocument();
    });

    it("should be puper", () => {
        render(<App />);
        expect(screen.getByText(/puper/ig)).toBeInTheDocument();
    });
});