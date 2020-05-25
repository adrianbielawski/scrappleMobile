import React from 'react';
import { StyleSheet, View } from 'react-native';
import { globalStyles } from './styles/global-styles'
import { GameMenu } from './components/game_menu/game-menu';

export default function App() {
  return (
    <View style={globalStyles.container}>
      <GameMenu/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
