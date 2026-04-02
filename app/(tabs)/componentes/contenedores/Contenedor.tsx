import { PropsWithChildren } from "react";
import { View } from "react-native";
import { useTheme } from "react-native-paper";

export default function Contenedor({ children }: PropsWithChildren) {
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        padding: 16,
        backgroundColor: theme.colors.background,
      }}
    >
      {children}
    </View>
  );
}
