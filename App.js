import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GameMenu } from './components/game-menu';

export default function App() {
  return (
    <View style={styles.container}>
      <GameMenu/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
