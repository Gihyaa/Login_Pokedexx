import { View, StyleSheet } from "react-native";
import PokemonList from "@/components/pokemonList";

export default function Pokedex() {
  return (
    <View style={styles.container}>
      <PokemonList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" }
});