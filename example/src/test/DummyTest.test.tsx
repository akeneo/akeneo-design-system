import { render } from "@testing-library/react"
import "@testing-library/jest-dom";
import DummyTest from "./DummyTest.tsx"

test('renders without error', () => {
  render(<DummyTest />);
});

test('renders the expected elements', () => {
  const { baseElement } = render(<DummyTest />);
  expect(baseElement).toMatchSnapshot();
});