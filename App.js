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
  const [timer, setTimer] = useState(true);
  const [time, setTime] = useState({min: '01', sec: '00'});
  const [players, setPlayers] = useState(['Adrian', 'Joanna', 'John', 'Grzegorz Brzeczyszczykiewicz']);

  const changeLanguage = (lang) => {
    setLanguage(lang)
    i18n.changeLanguage(lang);
  }
  
  const startGame = (timer, time, players) => {
    setTimer(timer);
    setTime(time);
    setPlayers(players);
    setScreen('Game');
    getPlayers(players);
  }

  const getPlayers = (playersNames) => {    
    let players = playersNames.map((player, index) => {
      return {
        name: player,
        id: index,
        score: 0,
        bestScore: 0,
        allPoints: [2, 3, 4],
      }
    });

    setPlayers(players)
  }

  const getContent = () => { 
    let content = '';   
    switch(screen) {
      case 'GameMenu':
        content = <GameMenu changeLanguage={changeLanguage} startGame={startGame} players={players} timer={timer} time={time}/>
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
