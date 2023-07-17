import React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";
import { useFonts } from "expo-font";

function FeaturedPanel({ width = 370, height = 140, borderRadius = 30 }) {
  const [loaded] = useFonts({
    MontserratBold: require("../assets/fonts/Montserrat-Bold.ttf"),
    MontserratRegular: require("../assets/fonts/Montserrat-Regular.ttf"),
    MontserratExtraBold: require("../assets/fonts/Montserrat-ExtraBold.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View
      style={{
        width,
        height,
        justifyContent: "center",
        alignItems: "center",
        
      }}
      
    >
      <LinearGradient
        colors={colors.gradients.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          width,
          height,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View>
          <Text
          
            style={{
              textAlign: "center",
              color: colors.white,
              fontFamily: "MontserratRegular",
              fontSize: 18,
              lineHeight: 30,
              
            }}
          >
            GAME{"\n"}
            <Text style={{ fontFamily: "MontserratExtraBold", fontSize: 30 }}>
              SCHEDULE
            </Text>
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
}


export default FeaturedPanel;
