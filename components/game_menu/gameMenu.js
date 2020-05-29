import React, { useState }from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from '../globalComponents/header';
import { ChooseLanguage } from './language/chooseLanguage';
import { TimeLimit } from './time_limit/timeLimit';
import { Players } from './players/players';
import { Button } from '../globalComponents/button';

export const GameMenu = ({ changeLanguage }) => {
    const [time, setTime] = useState({min: '05', sec: '00'})
    const [players, setPlayers] = useState(['aaa']);

    return (
        <View>
            <Header />
            <View>
                <ChooseLanguage changeLanguage={changeLanguage}/>
                <TimeLimit setTimeLimit={(min, sec) => {setTime({min, sec})}} defaultTime={time}/>
                <Players setPlayers={(newPlayers) => {setPlayers(newPlayers)}} players={players}/>
                <Button style={styles.button}>Start game</Button>
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
