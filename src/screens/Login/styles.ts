import { StyleSheet } from "react-native";
import { colors } from "../../../app.json";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    padding: 32,
    marginTop: 96,
  },
  title: {
    fontFamily: "Open-Sans-Bold",
    fontSize: 42,
    textAlign: "left",
    lineHeight: 46,
  },
  brand: {
    color: colors.primaryColor,
  },
  subtitle: {
    fontFamily: "Open-Sans-Regular",
    fontSize: 18,
    textAlign: "left",
    marginTop: 16,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginVertical: 34,
  },
});

export default styles;
