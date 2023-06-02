import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows two inputs and a submit button", () => {
  //render the component

  render(<UserForm />);

  //Manipulate the component to find the inputs and button

  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  //Assertion = make sure the component is doing what it is supposed to
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});
