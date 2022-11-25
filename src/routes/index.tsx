import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Login from "../screens/Login";
import Intro from "../screens/Intro";
import Home from "../screens/tabs/Home";
import BottomTab from "../components/BottomTab";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Intro"
        screenOptions={{
          gestureEnabled: true,
          // ...TransitionPresets.ModalPresentationIOS
        }}
      >
        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen
            name="Intro"
            component={Intro}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "" }}
          />
        </Stack.Group>
        <Stack.Screen
          name="TabNav"
          component={BottomTab}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
