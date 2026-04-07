import { FlatList, View } from "react-native";
import { Text } from "react-native-paper";
import { SPACING } from "../../constantes/spacing";
import { TEXTOS } from "../../constantes/textos";
import { ItemListaDeCompras } from "../../tipos/itemListaDeCompras";
import ItemDeListaDeCompras from "./ItemDeListaDeCompras";

type Props = {
  items: ItemListaDeCompras[];
  alPresionarSobreUnItem: (id: string) => void;
  alMantenerPresionSobreUnItem: (id: string) => void;
};

export default function ListaDeCompras({
  items,
  alPresionarSobreUnItem,
  alMantenerPresionSobreUnItem,
}: Props) {
  if (items.length === 0) {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ textAlign: "center", marginTop: SPACING.lg }}>
          {TEXTOS.lista.vacia}
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ItemDeListaDeCompras
          item={item}
          onPress={alPresionarSobreUnItem}
          onLongPress={alMantenerPresionSobreUnItem}
        />
      )}
    />
  );
}
