import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4CAF50",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  packageSizeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    gap: 10,
  },
  packageContentContainer: {},
  categoryContainer: {
    borderRadius: 50,
    marginBottom: 12,
  },
  categoryLabel: {
    fontSize: 18,
    color: "#fff",
    padding: 12,
    backgroundColor: "green",
    borderRadius: 20,
  },
  categoryButton: {
    backgroundColor: "#E0E0E0",
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
  categoryText: {
    color: "#000",
    fontSize: 16,
  },
});

export default styles;
