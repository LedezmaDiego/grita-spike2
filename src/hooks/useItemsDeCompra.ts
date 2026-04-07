import { useState } from "react";
import { ItemListaDeCompras } from "../tipos/itemListaDeCompras";

export default function useItemsDeCompra() {
  const [items, setItems] = useState<ItemListaDeCompras[]>([]);

  const agregarItem = (nombre: string) => {
    const nuevoItem: ItemListaDeCompras = {
      id: Date.now().toString(),
      nombre,
      estaCompletado: false,
    };

    setItems((previos) => [...previos, nuevoItem]);
  };

  const cambiarEstadoDeItem = (id: string) => {
    setItems((previos) =>
      previos.map((item) =>
        item.id === id
          ? { ...item, estaCompletado: !item.estaCompletado }
          : item,
      ),
    );
  };

  const eliminarItem = (id: string) => {
    setItems((previos) => previos.filter((item) => item.id !== id));
  };

  return {
    items,
    agregarItem,
    cambiarEstadoDeItem,
    eliminarItem,
  };
}
