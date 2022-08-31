import { render, screen } from "@testing-library/react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import LiveScore from "./components/LiveScore/LiveScore";
import Layout from "./components/Layout/Layout";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
