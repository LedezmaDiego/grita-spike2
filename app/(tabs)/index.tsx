import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

const PantallaPrincipal = () => {
  return (
    <ThemedView style={styles.contenedor}>
      <ThemedText>¡Hola React Native con Expo + Bun! 👋</ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PantallaPrincipal;
