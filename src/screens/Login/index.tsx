import { ImageBackground, View, Text } from "react-native";
import Button from "../../components/Button";
import styles from "./styles";

const Login = () => {
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
            onPress={() => {}}
            placeholder="Entrar"
            loading={false}
            disabled={false}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
