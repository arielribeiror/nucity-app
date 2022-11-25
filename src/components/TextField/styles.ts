import { StyleSheet } from "react-native";
import { colors } from "../../../app.json";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
  },
  input: {
    fontFamily: "Open-Sans-Regular",
    height: 48,
    fontSize: 16,
    backgroundColor: "#fff",
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  label: {
    fontFamily: "Open-Sans-Regular",
    fontSize: 16,
    marginBottom: 4,
  },
  container: {
    marginBottom: 10,
  },
  borderError: {
    borderWidth: 1,
    borderColor: colors.danger,
  },
  errorMessage: {
    fontFamily: "Open-Sans-Regular",
    fontSize: 14,
    color: colors.danger,
    marginTop: 5,
  },
});

export default styles;
