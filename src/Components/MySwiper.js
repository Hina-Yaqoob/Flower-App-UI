import { View, StyleSheet, Image } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";

const MySwiper = () => {
  return (
    <Swiper
      style={StyleSheet.wrapper}
      dotStyle={{
        marginTop: -200,
        width: 15,
        height: 15,
        borderRadius: 10,
        backgroundColor: "red",
      }}
      activeDotColor="#FFF"
      activeDotStyle={{
        marginTop: -200,
        width: 15,
        height: 15,
        borderRadius: 10,
        backgroundColor: "blue",
        activeDotColor: "blue",
      }}
    >
      <View style={styles.slide}>
        <Image
          source={require("../../assets/images/flower8.jpg")}
          style={{
            // marginLeft: 120,
            marginBottom: 130,
            height: 320,
            width: 380,
            marginTop: 40,
            resizeMode: "repeat",
          }}
        />
      </View>

      <View style={styles.slide}>
        <Image
          source={require("../../assets/images/flower8.jpg")}
          style={{
            // marginLeft: 120,
            marginBottom: 130,
            height: 320,
            width: 380,
            marginTop: 40,
            resizeMode: "contain",
          }}
        />
      </View>

      <View style={styles.slide}>
        <Image
          source={require("../../assets/images/flower8.jpg")}
          style={{
            // marginLeft: 120,
            marginBottom: 130,
            height: 320,
            width: 380,
            marginTop: 40,
            resizeMode: "center",
          }}
        />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
});

export default MySwiper;
