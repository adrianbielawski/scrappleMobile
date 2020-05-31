import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import i18n from './i18n';
import './i18n';
import { colors } from './styles/colors';
import { GameMenu } from './components/game_menu/gameMenu';
import { Game } from './components/game/game';

export default function App() {
  const [language, setLanguage] = useState('en-GB');
  const [screen, setScreen] = useState('GameMenu')
  const [timer, setTimer] = useState(false);
  const [time, setTime] = useState(null);
  const [players, setPlayers] = useState([]);

  const changeLanguage = (lang) => {
    setLanguage(lang)
    i18n.changeLanguage(lang);
  }
  
  const startGame = (timer, time, players) => {
    setTimer(timer);
    setTime(time);
    setPlayers(players);
    setScreen('Game');
  }

  const getContent = () => { 
    let content = '';   
    switch(screen) {
      case 'GameMenu':
        content = <GameMenu changeLanguage={changeLanguage} startGame={startGame}/>
        break;
      case 'Game':
        content = <Game language={language} players={players} timer={timer} time={time}/>;
        break;
    }
    return content
  }

  return (
    <View style={styles.container}>
      {getContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
});
