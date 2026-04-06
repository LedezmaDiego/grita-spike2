import { Text } from "react-native-paper";
import { TEXTOS } from "../../constantes/textos";
import { TIPOGRAFIA } from "../../constantes/tipografia";

export default function TituloDeLaPagina() {
  return (
    <Text
      variant="headlineMedium"
      style={{
        fontWeight: TIPOGRAFIA.pesos.bold,
      }}
    >
      {TEXTOS.lista.titulo}
    </Text>
  );
}
