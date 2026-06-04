import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

import { Pokemon } from "../../@type/pokemon";
import { getPokemon } from "../../integration/pokemonIntegration";
import { styles } from "./style";

function getStatColor(statName: string) {
  switch (statName) {
    case "hp":
      return "#22C55E";
    case "attack":
      return "#EF4444";
    case "defense":
      return "#3B82F6";
    case "special-attack":
      return "#A855F7";
    case "special-defense":
      return "#14B8A6";
    case "speed":
      return "#FACC15";
    default:
      return "#FFCB05";
  }
}

function formatStatName(statName: string) {
  switch (statName) {
    case "hp":
      return "HP";
    case "attack":
      return "ATK";
    case "defense":
      return "DEF";
    case "special-attack":
      return "SP.ATK";
    case "special-defense":
      return "SP.DEF";
    case "speed":
      return "SPD";
    default:
      return statName;
  }
}

function getTypeColor(type: string) {
  switch (type) {
    case "fire":
      return "#EF4444";
    case "water":
      return "#3B82F6";
    case "grass":
      return "#22C55E";
    case "electric":
      return "#FACC15";
    case "poison":
      return "#A855F7";
    case "bug":
      return "#84CC16";
    case "normal":
      return "#A8A29E";
    case "flying":
      return "#38BDF8";
    case "ground":
      return "#CA8A04";
    case "fairy":
      return "#F472B6";
    case "psychic":
      return "#EC4899";
    case "rock":
      return "#78716C";
    case "fighting":
      return "#DC2626";
    case "ghost":
      return "#6366F1";
    case "ice":
      return "#67E8F9";
    case "dragon":
      return "#7C3AED";
    default:
      return "#FFCB05";
  }
}

export default function PokemonList() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    async function carregarPokemons() {
      const dados = await getPokemon(15);
      setPokemons(dados);
      setLoading(false);
    }

    carregarPokemons();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FFCB05" />
        <Text style={styles.loadingText}>Carregando Pokémons...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>POKÉDEX</Text>

      <Text style={styles.subtitle}>
        15 Pokémon aleatórios da 1ª geração
      </Text>

      <View style={styles.grid}>
        {pokemons.map((pokemon) => {
          const isSelected = selected === pokemon.index;
          const mainType = pokemon.tipos[0];
          const mainColor = getTypeColor(mainType);

          return (
            <TouchableOpacity
              key={pokemon.index}
              activeOpacity={0.85}
              onPress={() => setSelected(isSelected ? null : pokemon.index)}
              style={[
                styles.card,
                {
                  borderColor: mainColor,
                  shadowColor: mainColor,
                },
                isSelected && styles.cardSelected,
              ]}
            >
              <View style={styles.topRow}>
                <Text style={styles.number}>#{pokemon.index}</Text>

                <Text
                  style={[
                    styles.typeBadge,
                    {
                      backgroundColor: mainColor,
                    },
                  ]}
                >
                  {mainType}
                </Text>
              </View>

              <View
                style={[
                  styles.imageContainer,
                  {
                    borderColor: mainColor,
                  },
                ]}
              >
                <Image source={{ uri: pokemon.imagem }} style={styles.image} />
              </View>

              <Text style={styles.name}>{pokemon.nome}</Text>

              <View style={styles.typeContainer}>
                {pokemon.tipos.map((tipo) => (
                  <Text
                    key={tipo}
                    style={[
                      styles.type,
                      {
                        backgroundColor: getTypeColor(tipo),
                      },
                    ]}
                  >
                    {tipo}
                  </Text>
                ))}
              </View>

              <View style={styles.statsContainer}>
                {pokemon.poderes.map((poder) => (
                  <View key={poder.nome} style={styles.statBox}>
                    <View style={styles.statHeader}>
                      <Text style={styles.statName}>
                        {formatStatName(poder.nome)}
                      </Text>

                      <Text style={styles.statValue}>{poder.forca}</Text>
                    </View>

                    <View style={styles.barBackground}>
                      <View
                        style={[
                          styles.barFill,
                          {
                            width: `${Math.min(poder.forca, 100)}%`,
                            backgroundColor: getStatColor(poder.nome),
                          },
                        ]}
                      />
                    </View>
                  </View>
                ))}
              </View>

              {isSelected && (
                <Text style={styles.selectedText}>Selecionado</Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}