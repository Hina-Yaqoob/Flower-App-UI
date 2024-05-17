import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "../../src/Navigations/Navigator";

const App = () => {
  return (
    <>
      <NavigationContainer independent={true}>
        <HomeStackNavigator />
      </NavigationContainer>
    </>
  );
};
export default App;
