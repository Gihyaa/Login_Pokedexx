import { View, Text, StyleSheet } from "react-native";
import { useAuth } from "@/context/AuthContext";
import Button from "@/components/button";

export default function Profile() {
  const { user, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Usuário Logado:</Text>
      <Text style={styles.name}>{user}</Text>
      <View style={{ width: '100%', marginTop: 20 }}>
        <Button title="LOGOUT" onPress={signOut} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20, justifyContent: 'center', alignItems: 'center' },
  label: { color: '#888', fontSize: 14 },
  name: { color: '#FFF', fontSize: 24, fontWeight: 'bold' }
});