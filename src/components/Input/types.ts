import { ImageSourcePropType } from "react-native";

export interface IInput {
  icon?: ImageSourcePropType;
  placeholder: string;
  style?: any;
  secureText?: boolean;
  value: string;
  onChangeText: (e: string) => void;
}
