import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/tabs/Home";
import Report from "../../screens/tabs/Report";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Report"
        component={Report}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
