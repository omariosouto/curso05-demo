import { customRender } from "@alura/test-commons/react-testing-library";
import { HomeScreen } from "./HomeScreen";

// TODO: Colocar os providers aqui
const render = customRender();

describe("expect home", () => {
  it("expect home", () => {
    const { container } = render(<HomeScreen />);

    expect(container).toMatchSnapshot();
  });
});
