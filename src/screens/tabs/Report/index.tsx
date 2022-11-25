import { View, Text } from "react-native";
import styles from "./style";

const Report = () => {
  return (
    <>
      <View style={styles.header}>
        <Text>Header</Text>
      </View>
      <View style={styles.body}>
        <Text>Report</Text>
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </>
  );
};

export default Report;
