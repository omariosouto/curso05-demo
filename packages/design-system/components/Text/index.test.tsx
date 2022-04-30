import { customRender } from "@alura/test-commons/react-testing-library";
import { Text } from "./index";

const render = customRender();

describe("expect home", () => {
  it("expect home", () => {
    const { container } = render(<Text tag="h1">Sample text</Text>);
    expect(container).toMatchSnapshot();
  });
});
