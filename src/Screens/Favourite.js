import { Image, View } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";

const Favourite = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignContent: "center",
        flex: 1,
      }}
    >
      <Animatable.Text
        animation="slideInDown"
        // iterationCount={5}
        direction="alternate"
        iterationCount="infinite"
        style={{ textAlign: "center" }}
      >
        <Image
          source={require("../../assets/images/flower3.jpg")}
          style={{
            height: 600,
            width: 262,
          }}
        />
      </Animatable.Text>
    </View>
  );
};

export default Favourite;
