import { Text, View, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import React from "react";
import {
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

const Home = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View
        // colors={["#8c1c78", "transparent"]}
        style={{
          backgroundColor: "#8c1c78",
          height: "28%",
          borderRadius: 20,

          paddingHorizontal: 55,
        }}
      >
        <Image
          source={require("../../assets/images/flower10.jpg")}
          style={{
            height: 60,
            width: 65,
            marginTop: 10,
            marginLeft: -39.5,
            borderRadius: 50,
          }}
        />
        <Image
          source={require("../../assets/images/flower37.jpg")}
          style={{
            height: 50,
            width: 55,
            marginTop: -40,
            borderRadius: 50,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 15,
            width: "100%",
          }}
        >
          <View style={{ width: "100%" }}>
            {/* <Text
              style={{
                fontSize: 25,
                color: "#FFF",
                fontWeight: "bold",
              }}
            >
              Welcome To Flowerly
            </Text> */}
            <Animatable.Text
              animation="slideInDown"
              // iterationCount={5}
              direction="alternate"
              iterationCount="infinite"
              style={{ textAlign: "center", fontSize: 21,color:"#fff" }}
            >
           
              Welcome To Flowerly
            </Animatable.Text>
          </View>
          {/* <View style={{ width: "50%", alignItems: "flex-end" }}>
            <Image
              source={require("../../assets/images/flower32.jpg")}
              style={{ height: 60, width: 60 }}
            />
          </View> */}
        </View>
      </View>

      <LinearGradient
        // colors={["rgba(0,164,109,0.4)", "transparent"]}
        colors={["#17918f", "transparent"]}
        style={{
          left: 0,
          right: 0,
          height: 90,
          marginTop: -5,
          borderRadius: 16,
        }}
      >
        {/* search bar */}
        <View
          style={{
            backgroundColor: "#FFF",
            paddingVertical: 8,
            paddingHorizontal: 20,
            marginHorizontal: 20,
            borderRadius: 15,
            marginTop: 25,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TextInput
            placeholder="Search"
            placeholderTextColor="#b1e5d3"
            style={{
              fontWeight: "bold",
              fontSize: 18,
              width: 260,
            }}
          />
          <Image
            source={require("../../assets/images/search.jpg")}
            style={{ height: 20, width: 20 }}
          />
        </View>
      </LinearGradient>
      {/* searchbar end */}

      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 20,
          width: "100%",
          alignItems: "center",
        }}
      >
        <View style={{ width: "50%" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 17,
              color: "#585a61",
            }}
          >
            Recommended
          </Text>
          <View
            style={{
              height: 4,
              backgroundColor: "#b1e5d3",
              width: 115,
              marginTop: -5,
            }}
          ></View>
        </View>
        <View style={{ width: "50%", alignItems: "flex-end" }}>
          <View
            style={{
              backgroundColor: "#00a46c",
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 15,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 13,
                color: "#FFF",
              }}
            >
              More
            </Text>
          </View>
        </View>
      </View>

      {/* recommended & more text decoration */}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ height: 400 }}
      >
        <LinearGradient
          colors={["rgba(0,164,109,0.09)", "transparent"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            height: 100,

            marginTop: 220,
            top: 0,
          }}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Details")}
          style={{
            height: 250,
            elevation: 2,
            backgroundColor: "#FFF",
            marginLeft: 19,
            marginTop: 20,

            marginBottom: 10,
            width: 160,
          }}
        >
          <Image
            style={{ objectFit: "cover" }}
            source={require("../../assets/images/flower8.jpg")}
          />
          <View
            style={{
              flexDirection: "row",
              paddingTop: 20,
              paddingHorizontal: 10,
              paddingBottom: 6,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                marginTop: -8,
              }}
            >
              Tulips
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "#00a46c",
                paddingLeft: 65,
                marginTop: -8,
              }}
            >
              Rs800
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: 250,
            elevation: 2,
            backgroundColor: "#FFF",
            marginLeft: 20,
            marginTop: 20,
            borderRadius: 15,
            marginBottom: 10,
            width: 160,
          }}
        >
          <Image source={require("../../assets/images/flower42.jpg")} />
          <View
            style={{
              flexDirection: "row",
              paddingTop: 10,
              paddingHorizontal: 10,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              ANGEL
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "#00a46c",
                paddingLeft: 45,
              }}
            >
              Rs900
            </Text>
          </View>
        </View>
        <View
          // onPress={()=>navigation.navigate("Detail")}
          style={{
            height: 250,
            elevation: 2,
            backgroundColor: "#FFF",
            marginLeft: 20,
            marginTop: 20,
            borderRadius: 15,
            marginBottom: 10,
            width: 160,
          }}
        >
          <Image source={require("../../assets/images/flower22.jpg")} />
          <View
            style={{
              flexDirection: "row",
              paddingTop: 10,
              paddingHorizontal: 10,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              Rounded
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "#00a46c",
                paddingLeft: 35,
              }}
            >
              Rs500
            </Text>
          </View>
        </View>

        <View
          // onPress={()=>navigation.navigate("Detail")}
          style={{
            height: 250,
            elevation: 2,
            backgroundColor: "#FFF",
            marginLeft: 20,
            marginTop: 20,
            borderRadius: 15,
            marginBottom: 10,
            width: 160,
          }}
        >
          <Image source={require("../../assets/images/flower38.jpg")} />
          <View
            style={{
              flexDirection: "row",
              paddingTop: 10,
              paddingHorizontal: 10,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              SunFlower
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "#00a46c",
                paddingLeft: 35,
              }}
            >
              Rs700
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
