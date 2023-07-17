import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  ScrollView,
  Text,
  FlatList,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Screen from "../components/Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import FeaturedPanel from "../components/FeaturedPanel";
import TopPlayers from "../components/TopPlayers";
import { useFonts } from "expo-font";
import MatchCard from "../components/MatchCard";

const WIDTH = Dimensions.get("window").width;


const matchesData = [
  {
    fixtureTitle: 'MatchDay A - 1st Game',
    id: 1,
    home: {
      score: 2,
      teamName: 'Brexit Masters'
    },
    away: {
      score: 1,
      teamName: 'Fire Makers',
    },
    state: 1
  }
]

export default function App() {
  const [loaded] = useFonts({
    MontserratBold: require("../assets/fonts/Montserrat-Bold.ttf"),
    MontserratRegular: require("../assets/fonts/Montserrat-Regular.ttf"),
    MontserratExtraBold: require("../assets/fonts/Montserrat-ExtraBold.ttf"),
    sfpdBold: require("../assets/fonts/FontsFree-Net-SFProDisplay-Bold.ttf"),
  });
  if (!loaded) {
    return null;
  }
  StatusBar.setBarStyle("light-content")
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={colors.gradients.background}
      style={{ flex: 1 }}
    >
      <Screen style={styles.container}>
        <View style={styles.navbar}>
          <MaterialCommunityIcons name="menu" color={colors.white} size={30} />
          <View style={{ flex: 1, alignItems: "center" }}>
            <Image
              source={require("../assets/compact-trans.png")}
              style={{ width: 196, height: 60 }}
            />
          </View>
          <MaterialCommunityIcons
            name="magnify"
            color={colors.white}
            size={30}
          />
        </View>
        <View style={styles.featuredPanel}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            <FeaturedPanel width={WIDTH * 0.9} />
            <TopPlayers width={WIDTH * 0.9} />
          </ScrollView>
        </View>
        <View style={{ flexDirection: "row", alignItems: 'baseline' }}>
          <Text
            style={{ flex: 1, color: colors.white, fontFamily: "sfpdBold", fontSize: 20, }}
          >
            Upcoming Matches
          </Text>
          <Text style={{ color: colors.fadedWhite, fontFamily: "sfpdBold"}}>View All</Text>
        </View>
        <ScrollView
        horizontal 
        >
          <FlatList data={matchesData} keyExtractor={match => match.id.toString() } renderItem={({item}) =>{<MatchCard fixtureTitle={item.fixtureTitle}/>}} />
        </ScrollView>
      </Screen>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: WIDTH * 0.9,
    alignSelf: "center",
    alignItems: "center",
    gap: 60,
  },
  navbar: {
    marginTop: 35,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  featuredPanel: {
    width: WIDTH * 0.9,
    height: 140,
    borderRadius: 30,
    flexDirection: "column",
    overflow: "hidden",
  },
});
