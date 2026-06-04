import { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@/context/AuthContext";
import Card from "@/components/card";
import Input from "@/components/input";
import Button from "@/components/button";
import PasswordToggle from "@/components/passwordToggle";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);
  const { signIn } = useAuth();
  const router = useRouter();

  function handleLogin() {
    const success = signIn(user, password);
    if (success) {
      router.replace("/pokedex");
    } else {
      Alert.alert("Erro", "Usuário ou senha inválidos.");
    }
  }

  return (
    <ImageBackground 
      source={{ uri: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3" }} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.logo}>POKÉMON</Text>
        <Card>
          <Text style={styles.title}>Entrar na Pokédex</Text>
          <Input placeholder="Usuário" value={user} onChangeText={setUser} />
          <Input placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry={secure} />
          <PasswordToggle secure={secure} setSecure={setSecure} />
          <Button title="ACESSAR" onPress={handleLogin} />
        </Card>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  overlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.7)", justifyContent: "center", padding: 24 },
  logo: { color: "#FFF", fontSize: 40, fontWeight: "900", textAlign: 'center', marginBottom: 20 },
  title: { color: "#FFF", fontSize: 20, marginBottom: 20, textAlign: 'center' }
});