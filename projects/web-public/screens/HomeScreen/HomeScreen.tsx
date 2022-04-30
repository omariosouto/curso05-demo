import { sum } from "@alura/utils/math/sum";
import { Text } from "@alura/design-system/components/Text";

export function HomeScreen() {
  return (
    <div>
      <Text tag="h2">Home Screen do Projeto :)</Text>
      <Text tag="p">Resultado da soma do commons: {sum(2, 2)}</Text>
    </div>
  );
}
