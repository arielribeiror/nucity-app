import { StyleSheet } from "react-native";
import { colors } from "../../../app.json";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    padding: 32,
  },
  text: {
    fontSize: 16,
    fontFamily: "Open-Sans-Regular",
  },
  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginVertical: 34,
  },
});

export default styles;
