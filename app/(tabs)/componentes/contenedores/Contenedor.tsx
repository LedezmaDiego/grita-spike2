import { PropsWithChildren } from "react";
import { View } from "react-native";
import { estilosGenerales } from "../../estilos/estilosGenerales";

export default function Contenedor({ children }: PropsWithChildren) {
  return <View style={estilosGenerales.contenedor}>{children}</View>;
}
