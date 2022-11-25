import { CommonActions, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { Alert, View } from "react-native";
import Button from "../../components/Button";
import { RouteStackParamList } from "../../routes/RouteStackParams";
import styles from "./styles";
import TextField from "../../components/TextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const fieldValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required("O email não pode ser vazio")
    .email("Digite um email válido"),
  password: yup
    .string()
    .required("A senha não pode ser vazia")
    .min(6, "A senha deve conter pelo menos 6 dígitos"),
});

const Login = () => {
  type navitationType = NativeStackNavigationProp<RouteStackParamList, "Login">;
  const navigation = useNavigation<navitationType>();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(fieldValidationSchema) });
  const onSubmit = (data: any) => {
    navigation.dispatch(CommonActions.reset({ routes: [{ name: "TabNav" }] }));
  };

  useEffect(() => {
    register("email");
    register("password");
  }, [register]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextField
          label={"Email"}
          error={errors?.email}
          placeholder={"Digite seu email"}
          onChangeText={(text) => setValue("email", text)}
        />
        <TextField
          label={"Senha"}
          error={errors?.password}
          placeholder={"Digite sua senha"}
          onChangeText={(text) => setValue("password", text)}
        />
      </View>
      <View style={styles.footer}>
        <Button
          onPress={handleSubmit(onSubmit)}
          placeholder="Entrar"
          loading={false}
          disabled={false}
        />
      </View>
    </View>
  );
};

export default Login;
