import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { SPACING } from "../../constantes/spacing";
import { TEXTOS } from "../../constantes/textos";
import useFormularioItem from "../../hooks/useFormularioItem";

type Props = {
  alCompletarFormulario: (nombre: string) => void;
};

export default function FormularioParaItemNuevo({
  alCompletarFormulario,
}: Props) {
  const { nombreDelItem, setNombreDelItem, limpiarTexto } = useFormularioItem();

  const handleSubmit = () => {
    const nombreLimpio = nombreDelItem.trim();
    if (!nombreLimpio) return;

    alCompletarFormulario(nombreLimpio);
    limpiarTexto();
  };

  return (
    <View
      style={{
        marginTop: SPACING.md,
        flexDirection: "row",
        alignItems: "center",
        gap: SPACING.sm,
      }}
    >
      <TextInput
        style={{ flex: 1 }}
        label="Agregar producto (ej: Leche)"
        value={nombreDelItem}
        onChangeText={setNombreDelItem}
        onSubmitEditing={handleSubmit}
      />

      <Button mode="contained" onPress={handleSubmit}>
        {TEXTOS.botones.agregar}
      </Button>
    </View>
  );
}
