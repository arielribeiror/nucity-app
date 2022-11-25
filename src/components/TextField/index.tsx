import { View, Text, TextInput } from "react-native";
import styles from "./styles";
import { InputProps } from "./types";

const TextField = ({ label, error, ...inputProps }: InputProps) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={[styles.input, !!error && styles.borderError]}
      {...inputProps}
    />
    {!!error && <Text style={styles.errorMessage}>{error.message}</Text>}
  </View>
);

export default TextField;
