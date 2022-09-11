import { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Button from "./src/components/Button";
import Input from "./src/components/Input";

export default function App() {
  const [email, setEmail] = useState<string>("");
  const [fontsLoaded] = useFonts({
    "Open-Sans-Bold": require("./src/assets/fonts/OpenSans-Bold.ttf"),
    "Open-Sans-Regular": require("./src/assets/fonts/OpenSans-Regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Button
        onPress={() => {}}
        placeholder="Clique aqui"
        loading={false}
        disabled={false}
      />
      <Input
        onChangeText={(e: string) => setEmail(e)}
        placeholder={"Digite seu email"}
        value={email}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
