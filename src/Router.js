import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Category from "./pages/Category";
import Meals from "./pages/Meals";
import Detail from "./pages/Detail";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"CategoryPage"} component={Category} options={
          {
            title: "Categories",
            headerStyle: { backgroundColor: "white" },
            headerTitleStyle: { color: "#F2A93B" },
          }
        } />
        <Stack.Screen name={"MealsPage"} component={Meals} options={
          {
            title: "Meals",
            headerStyle: { backgroundColor: "white" },
            headerTitleStyle: { color: "#F2A93B" },
            headerTintColor: "#F2A93B",
          }
        } />
        <Stack.Screen name={"DetailPage"} component={Detail} options={
          {
            title: "Detail",
            headerStyle: { backgroundColor: "white" },
            headerTitleStyle: { color: "#F2A93B" },
            headerTintColor: "#F2A93B",
          }
        } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;