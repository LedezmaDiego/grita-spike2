import Contenedor from "@/src/componentes/contenedores/Contenedor";
import FormularioParaItemNuevo from "@/src/componentes/contenidos/FormularioParaItemNuevo";
import ListaDeCompras from "@/src/componentes/contenidos/ListaDeCompras";
import TituloDeLaPagina from "@/src/componentes/contenidos/TituloDeLaPagina";
import useItemsDeCompra from "@/src/hooks/useItemsDeCompra";

export default function App() {
  const { items, eliminarItem, cambiarEstadoDeItem, agregarItem } =
    useItemsDeCompra();

  return (
    <Contenedor>
      <TituloDeLaPagina />

      <FormularioParaItemNuevo alCompletarFormulario={agregarItem} />
      <ListaDeCompras
        items={items}
        alPresionarSobreUnItem={cambiarEstadoDeItem}
        alMantenerPresionSobreUnItem={eliminarItem}
      />
    </Contenedor>
  );
}
