import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";
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
        marginTop: 12,
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
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
        Agregar
      </Button>
    </View>
  );
}
