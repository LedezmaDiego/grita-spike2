import Contenedor from "./componentes/contenedores/Contenedor";
import FormularioParaItemNuevo from "./componentes/contenidos/FormularioParaItemNuevo";
import ListaDeCompras from "./componentes/contenidos/ListaDeCompras";
import TituloDeLaPagina from "./componentes/contenidos/TituloDeLaPagina";
import useItemsDeCompra from "./hooks/useItemsDeCompra";

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
