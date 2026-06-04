import { Tabs, Redirect } from "expo-router";
import { useAuth } from "@/context/AuthContext";
import { Text } from "react-native";

export default function AuthLayout() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) return null;
  if (!isAuthenticated) return <Redirect href="/" />;

  return (
    <Tabs screenOptions={{ 
      headerShown: true,
      tabBarStyle: { backgroundColor: '#111' },
      tabBarActiveTintColor: '#FFCB05' 
    }}>
      <Tabs.Screen 
        name="pokedex" 
        options={{ 
          title: "Pokédex",
          tabBarIcon: ({ color }) => <Text style={{color}}>🐙</Text> 
        }} 
      />
      <Tabs.Screen 
        name="team" 
        options={{ 
          title: "Meu Time",
          tabBarIcon: ({ color }) => <Text style={{color}}>⚡</Text> 
        }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{ 
          title: "Perfil",
          tabBarIcon: ({ color }) => <Text style={{color}}>👤</Text> 
        }} 
      />
    </Tabs>
  );
}