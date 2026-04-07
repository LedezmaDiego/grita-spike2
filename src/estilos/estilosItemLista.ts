import { TextStyle } from "react-native";
import { COLORES } from "../constantes/colores";
import { TIPOGRAFIA } from "../constantes/tipografia";

export const obtenerEstiloDeTitulo = (estaCompletado: boolean): TextStyle => {
  return {
    textDecorationLine: estaCompletado ? "line-through" : "none",
    color: estaCompletado ? COLORES.item.completado : COLORES.item.activo,
    fontSize: TIPOGRAFIA.tamanios.normal,
  };
};
