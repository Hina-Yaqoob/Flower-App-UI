import { Text, View } from "react-native";
import React from "react";
// import { TouchableOpacity } from "react-native-gesture-handler";
// import Swiper from "react-native-swiper";
import MySwiper from "../Components/MySwiper";

const Details = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ width: "100%", height: "90%", flexDirection: "row" }}>
        <View style={{ width: "90%" }}>
          <MySwiper />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: -80,
          marginHorizontal: 20,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 28,
            color: "#62636a",
          }}
        >
          Tulips
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            color: "#00a46c",
            paddingLeft: 170,
            fontSize: 20,
          }}
        >
          Rs800
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
        }}
      >
        <View
          style={{
            width: "25%",
            backgroundColor: "#00a46c",
            height: 40,
            marginTop: 20,

            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#FFF",
              fontSize: 17,
            }}
          >
            Buy Now
          </Text>
        </View>
        <View
          style={{
            width: "70%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: "#62636a",
              fontWeight: "bold",
              fontSize: 14,
              marginLeft: 37,
            }}
          >
            Available in many colors,shades of purple ranging from softest lilac
            to almost black, solid,or with stripes.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Details;
