import { useState } from "react";

export default function useFormularioItem() {
  const [nombreDelItem, setNombreDelItem] = useState("");

  function limpiarTexto() {
    setNombreDelItem("");
  }

  return {
    nombreDelItem,
    setNombreDelItem,
    limpiarTexto,
  };
}
