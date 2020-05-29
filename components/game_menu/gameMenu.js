import React, { useState }from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Header } from '../globalComponents/header';
import { ChooseLanguage } from './language/chooseLanguage';
import { TimeLimit } from './time_limit/timeLimit';
import { Players } from './players/players';
import { Button } from '../globalComponents/button';

export const GameMenu = ({ changeLanguage, startGame }) => {
    const [timer, toggleTimer] = useState(false)
    const [time, setTime] = useState({min: '05', sec: '00'})
    const [players, setPlayers] = useState(['aaa']);

    const validateForm = () => {
        if(timer === true && time.min < 1) {
            Alert.alert(
                "Minimum player's time limit is 1 min",
                '',
                [{
                    text: 'Ok',
                }])
            return
        }
        if(players.length < 2) {
            Alert.alert(
                "Please add at least 2 players",
                '',
                [{
                    text: 'Ok',
                }])
            return
        }
        startGame(timer, time, players)
    }

    return (
        <View>
            <Header />
            <View>
                <ChooseLanguage changeLanguage={changeLanguage}/>
                <TimeLimit toggleTimer={() => {toggleTimer(!timer)}} setTimeLimit={(min, sec) => {setTime({min, sec})}} defaultTime={time}/>
                <Players setPlayers={(newPlayers) => {setPlayers(newPlayers)}} players={players}/>
                <Button onPress={validateForm} style={styles.button}>Start game</Button>
            </View>
        </View>
    )    
}

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        maxWidth: 200,
        alignSelf: 'center'
    }
});
