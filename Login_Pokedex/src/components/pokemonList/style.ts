import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 8,
    paddingBottom: 40,
    alignItems: "center",
  },

  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  loadingText: {
    color: "#FFFFFF",
    marginTop: 12,
    fontSize: 16,
    fontWeight: "bold",
  },

  title: {
    color: "#FFCB05",
    fontSize: 42,
    fontWeight: "900",
    textAlign: "center",
    letterSpacing: 4,
    textShadowColor: "#2563EB",
    textShadowOffset: {
      width: 3,
      height: 3,
    },
    textShadowRadius: 12,
  },

  subtitle: {
    color: "#E5E7EB",
    fontSize: 12,
    marginTop: 4,
    marginBottom: 18,
    textAlign: "center",
    fontWeight: "bold",
  },

  grid: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "31.5%",
    backgroundColor: "rgba(15,23,42,0.98)",
    borderRadius: 22,
    padding: 8,
    alignItems: "center",
    marginBottom: 14,

    borderWidth: 2,

    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.9,
    shadowRadius: 14,

    elevation: 14,
  },

  cardSelected: {
    backgroundColor: "#1E293B",
    transform: [{ scale: 1.06 }],
    elevation: 24,
  },

  topRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },

  number: {
    color: "#E5E7EB",
    fontSize: 10,
    fontWeight: "900",
  },

  typeBadge: {
    color: "#111827",
    fontSize: 7,
    fontWeight: "900",
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 999,
    textTransform: "uppercase",
    overflow: "hidden",
  },

  imageContainer: {
    width: 105,
    height: 105,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.10)",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 6,
  },

  image: {
    width: 105,
    height: 105,
    resizeMode: "contain",
  },

  name: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "900",
    textTransform: "capitalize",
    textAlign: "center",
    marginTop: 2,
    marginBottom: 6,
  },

  typeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 4,
    marginBottom: 8,
  },

  type: {
    color: "#FFFFFF",
    fontSize: 8,
    fontWeight: "900",
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 999,
    textTransform: "capitalize",
    overflow: "hidden",
  },

  statsContainer: {
    width: "100%",
    gap: 4,
  },

  statBox: {
    width: "100%",
  },

  statHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  statName: {
    color: "#CBD5E1",
    fontSize: 7,
    fontWeight: "900",
    textTransform: "uppercase",
  },

  statValue: {
    color: "#FFFFFF",
    fontSize: 8,
    fontWeight: "900",
  },

  barBackground: {
    height: 5,
    backgroundColor: "#334155",
    borderRadius: 999,
    overflow: "hidden",
    marginTop: 2,
  },

  barFill: {
    height: "100%",
    borderRadius: 999,
  },

  selectedText: {
    color: "#38BDF8",
    fontSize: 8,
    fontWeight: "900",
    marginTop: 6,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});