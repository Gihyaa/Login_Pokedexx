import { View, Text, StyleSheet } from "react-native";

export default function Team() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ainda não há Pokémons no seu time.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", justifyContent: 'center', alignItems: 'center' },
  text: { color: '#FFF' }
});