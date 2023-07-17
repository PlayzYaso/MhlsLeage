import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';

function MatchCard({fixtureTitle, state, home, away}) {
  return (
     <View style={styles.container}>
       <Text>{fixtureTitle}</Text>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
   width: 250,
   height: 140,
   paddingHorizontal: 15,
   paddingVertical: 10,
   borderRadius: 20,
   backgroundColor: colors.white10P,
  }
});

export default MatchCard;