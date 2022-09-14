import { useCallback, useEffect, useState } from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Button from "./src/components/Button";
import { colors } from "./app.json";

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
    <View onLayout={onLayoutRootView} style={styles.container}>
      <ImageBackground
        source={require("./src/assets/img/bg.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Bem-vindo</Text>
          <Text style={styles.title}>
            ao <Text style={styles.brand}>NuCity</Text>
          </Text>
          <Text style={styles.subtitle}>Sua cidade, em detalhes.</Text>
        </View>
        <View style={styles.footer}>
          <Button
            onPress={() => {}}
            placeholder="Entrar"
            loading={false}
            disabled={false}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    padding: 32,
    marginTop: 96
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
