import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import colors from '../config/colors';

function TopPlayers({ width = 370, height = 140, borderRadius = 30 }) {
  const [loaded] = useFonts({
    MontserratBold: require("../assets/fonts/Montserrat-Bold.ttf"),
    MontserratRegular: require("../assets/fonts/Montserrat-Regular.ttf"),
    MontserratExtraBold: require("../assets/fonts/Montserrat-ExtraBold.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <ImageBackground
    source={require('../assets/wp2235202.jpg')}
      style={{
        width,
        height,
        borderRadius,
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
            TOP{"\n"}
            <Text style={{ fontFamily: "MontserratExtraBold", fontSize: 30 }}>
              PLAYERS
            </Text>
          </Text>
        </View>
    </ImageBackground>
  );
}
export default TopPlayers;