import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ImageBackground, View, Text } from "react-native";
import Button from "../../components/Button";
import { RouteStackParamList } from "../../routes/RouteStackParams";
import styles from "./styles";

const Intro = () => {
  type navitationType = NativeStackNavigationProp<RouteStackParamList, "Intro">;
  const navigation = useNavigation<navitationType>();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/img/bg.jpg")}
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
            onPress={() => navigation.navigate("Login")}
            placeholder="Entrar"
            loading={false}
            disabled={false}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Intro;
