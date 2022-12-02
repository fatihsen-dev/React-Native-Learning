import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, Text } from "react-native";

// packages
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/pages/home/Home";
import Product from "./src/pages/product/Product";

export default function App() {
   const Stack = createNativeStackNavigator();
   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
               name='Home'
               options={{
                  statusBarColor: "#FEFEFE",
                  headerShadowVisible: false,
               }}>
               {(props) => <Home {...props} />}
            </Stack.Screen>
            <Stack.Screen
               name='Product'
               options={{ statusBarColor: "#FEFEFE", headerShadowVisible: false }}>
               {(props) => <Product {...props} />}
            </Stack.Screen>
         </Stack.Navigator>
      </NavigationContainer>
   );
}