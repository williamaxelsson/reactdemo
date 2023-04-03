import { render, screen } from "@testing-library/react";
import App from "../App";
import { Textarea } from "@chakra-ui/react";

test("renders learn react link", () => {
  render(<App />);
  const textAreaElement = screen.getByRole("textbox", { text: /Api response will be displayed here/i });
  expect(textAreaElement).toBeInTheDocument();
  expect(textAreaElement.value).toEqual("Api response will be displayed here");
});
