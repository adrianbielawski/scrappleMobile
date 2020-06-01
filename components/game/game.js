import React, { useState }from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../styles/colors';
import { WordChecker } from './wordChecker';
import { TwoLetterWords } from './twoLetterWords';
import { CurrentPlayer } from './currentPlayer';
import { Stats } from './stats/stats';

export const Game = (props) => {
    const [players, setPlayers] = useState(props.players)
    const [currentPlayerNum, setCurrentPlayerNum] = useState(0);
    const [currentPlayer, setCurrentPlayer] = useState(players[currentPlayerNum])

    const addPoints = (val) => {
        const points = parseInt(val)
        const updatedPlayer = currentPlayer;
        updatedPlayer.score += points;
        updatedPlayer.allPoints.push(points);
    
        if(points > currentPlayer.bestScore) {
          updatedPlayer.bestScore = points;
        }
    
        const updatedPlayers = players;
        updatedPlayers.splice(currentPlayerNum, 1, updatedPlayer);
        setPlayers(updatedPlayers);
        switchPlayer(false)
    }
    
    const switchPlayer = (timeOut) => {
        if(timeOut) {
            const updatedPlayer = currentPlayer;
            updatedPlayer.allPoints.push(0);
            const updatedPlayers = players;
            updatedPlayers.splice(currentPlayerNum, 1, updatedPlayer);
            setPlayers(updatedPlayers);
        }
        const nextPlayer = currentPlayerNum < players.length -1 ? currentPlayerNum + 1 : 0;
        setCurrentPlayerNum(nextPlayer);
        setCurrentPlayer(players[nextPlayer])
    }

    return (
        <View style={styles.wrapper}>
            <WordChecker></WordChecker>
            <TwoLetterWords language={props.language}></TwoLetterWords>
            <CurrentPlayer player={currentPlayer} timer={props.timer} time={props.time} switchPlayer={switchPlayer} addPoints={addPoints} key={currentPlayer.id}></CurrentPlayer>
            <Stats players={players} currentPlayerNum={currentPlayerNum}></Stats>
        </View>
    )    
}

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 30,
        flex: 1,
        backgroundColor: colors.background,
    }
});
