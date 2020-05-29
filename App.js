import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import i18n from './i18n';
import './i18n';
import { colors } from './styles/colors';
import { GameMenu } from './components/game_menu/gameMenu';

export default function App() {
  const [language, setLanguage] = useState('en-GB');

  const changeLanguage = (lang) => {
      setLanguage(lang)
      i18n.changeLanguage(lang);
  }
  
  const startGame = (timer, time, players) => {}

  return (
    <View style={styles.container}>
      <GameMenu changeLanguage={changeLanguage} startGame={startGame}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
});
