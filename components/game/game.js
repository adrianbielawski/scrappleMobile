import React, { useState }from 'react';
import Moment from 'react-moment';//important
import moment from 'moment';
import { StyleSheet, View, Alert } from 'react-native';
import { Button } from '../globalComponents/button';
import { RoundButton } from '../globalComponents/roundButton';
import { colors } from '../../styles/colors';
import { globalStyles } from '../../styles/globalStyles';
import { WordChecker } from './wordChecker';
import { TwoLetterWords } from './twoLetterWords';
import { CurrentPlayer } from './currentPlayer';

export const Game = ({ language, players, timer, time }) => {
    const [currentPlayerNum, setCurrentPlayerNum] = useState(0);
    const [currentPlayer, setCurrentPlayer] = useState(players[currentPlayerNum])

    const timeOut = () => {
        const nextPlayer = currentPlayerNum < players.length -1 ? currentPlayerNum + 1 : 0;
        setCurrentPlayerNum(nextPlayer);
        setCurrentPlayer(players[nextPlayer])
    }

    return (
        <View style={styles.wrapper}>
            <WordChecker></WordChecker>
            <TwoLetterWords language={language}></TwoLetterWords>
            <CurrentPlayer player={currentPlayer} timer={timer} time={time} timeOut={timeOut} key={currentPlayer.id}></CurrentPlayer>
        </View>
    )    
}

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 40,
        flex: 1,
        backgroundColor: colors.background,
    }
});
