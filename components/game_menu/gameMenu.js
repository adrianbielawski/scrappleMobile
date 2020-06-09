import React, { useState }from 'react';
import { StyleSheet, View, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import i18next from 'i18next';
import { Header } from '../globalComponents/header';
import { ChooseLanguage } from './language/chooseLanguage';
import { TimeLimit } from './time_limit/timeLimit';
import { Players } from './players/players';
import { Button } from '../globalComponents/button';

export const GameMenu = (props) => {
    const [timer, toggleTimer] = useState(props.timer)
    const [time, setTime] = useState(props.time)
    const [players, setPlayers] = useState(props.players);

    const validateForm = () => {
        if(timer === true && time.min < 1) {
            Alert.alert(
                i18next.t("MinimumTimeLimit"),
                '',
                [{
                    text: i18next.t('Ok'),
                }])
            return
        }
        if(players.length < 2) {
            Alert.alert(
                i18next.t("add2Players"),
                '',
                [{
                    text: i18next.t('Ok'),
                }])
            return
        }
        props.startGame(timer, time, players)
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.wrapper}>
                <Header />
                <View>
                    <ChooseLanguage language={props.language} changeLanguage={props.changeLanguage}/>
                    <TimeLimit
                        toggleTimer={() => {toggleTimer(!timer)}}
                        setTimeLimit={(min, sec) => {setTime({min, sec})}}
                        timer={timer}
                        defaultTime={time}/>
                    <Players setPlayers={(newPlayers) => {setPlayers(newPlayers)}} players={players}/>
                    <Button onPress={validateForm} style={[styles.button, players.length <= 1 && styles.disabledButton]}>Start game</Button>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )    
}

const styles = StyleSheet.create({
    disabledButton: {
        backgroundColor: '#aaa',
        opacity: .7
    },
    button: {
        alignSelf: 'center',
    },
});
