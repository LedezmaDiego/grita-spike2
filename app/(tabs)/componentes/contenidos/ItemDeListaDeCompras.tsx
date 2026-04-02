import { List } from "react-native-paper";
import { ItemListaDeCompras } from "../../tipos/itemListaDeCompras";

type Props = {
  item: ItemListaDeCompras;
  onPress: (id: string) => void;
  onLongPress: (id: string) => void;
};

export default function ItemDeListaDeCompras({
  item,
  onPress,
  onLongPress,
}: Props) {
  return (
    <List.Item
      title={item.nombre}
      titleStyle={{
        textDecorationLine: item.estaCompletado ? "line-through" : "none",
        color: item.estaCompletado ? "#777" : "#000",
      }}
      onPress={() => onPress(item.id)}
      onLongPress={() => onLongPress(item.id)}
      right={() => (
        <List.Icon icon={item.estaCompletado ? "check" : "circle-outline"} />
      )}
    />
  );
}
