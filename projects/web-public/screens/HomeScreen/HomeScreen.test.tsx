import { screen, customRender } from '@alura/test-commons/react-testing-library';
import { HomeScreen } from "./HomeScreen";

const render = customRender();

describe("expect home", () => {
  it("expect home", () => {
    const { container } = render(<HomeScreen />);
    
    expect(container).toMatchSnapshot();
  });
});
