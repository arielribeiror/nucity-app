import { useFonts } from "expo-font";
import Routes from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Open-Sans-Bold": require("./src/assets/fonts/OpenSans-Bold.ttf"),
    "Open-Sans-Regular": require("./src/assets/fonts/OpenSans-Regular.ttf"),
  });

  return fontsLoaded ? <Routes /> : null;
}
