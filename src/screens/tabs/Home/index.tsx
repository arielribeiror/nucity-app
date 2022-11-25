import { View, Text } from "react-native";
import styles from "./styles";

const Home = () => {
  return (
    <>
      <View style={styles.header}>
        <Text>Header</Text>
      </View>
      <View style={styles.body}>
        <Text>Home</Text>
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </>
  );
};

export default Home;
