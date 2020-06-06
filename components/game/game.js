import React, { useState }from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import i18next from 'i18next';
import { colors } from '../../styles/colors';
import { WordChecker } from './wordChecker';
import { TwoLetterWords } from './twoLetterWords';
import { CurrentPlayer } from './currentPlayer';
import { Stats } from './stats/stats';
import { Button } from '../globalComponents/button';

export const Game = (props) => {
    const [players, setPlayers] = useState(props.players)
    const [currentPlayerNum, setCurrentPlayerNum] = useState(0);
    const [currentPlayer, setCurrentPlayer] = useState(players[currentPlayerNum])

    const addPoints = (points) => {
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

    const handleGameFinish = () => {
        Alert.alert(
            i18next.t("FinishConfirmation"),
            '',
            [{
                text: i18next.t("Cancel"),
            },
            {
                text: i18next.t("Finish game"),
                onPress: props.finishGame
            }]
        )
    }

    return (
        <View style={styles.wrapper}>
            <WordChecker language={props.language}></WordChecker>
            <TwoLetterWords language={props.language}></TwoLetterWords>
            <CurrentPlayer player={currentPlayer} timer={props.timer} time={props.time} switchPlayer={switchPlayer} addPoints={addPoints} key={currentPlayer.id}></CurrentPlayer>
            <Stats players={players} currentPlayerNum={currentPlayerNum}></Stats>
            <Button style={styles.button} onPress={handleGameFinish}>Finish the game</Button>
            <View style={{flex: 1000}}></View>
        </View>
    )    
}

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 30,
        flex: 1,
        backgroundColor: colors.background,
    },
    button : {
        alignSelf: 'center',
    },
});
