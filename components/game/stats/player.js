import React, { useState }from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from '../../globalComponents/button';
import { MyText } from '../../globalComponents/myText';
import { PlayerStats } from './playerStats';

export const Player = ({ player, isPlayingNow }) => {
    const [showStats, toggleShowStats] = useState(false)
    return (
        <View style={isPlayingNow ? [styles.wrapper, styles.current] : [styles.wrapper]}>
            <MyText style={styles.playerName}>{player.name}</MyText>
            <View style={styles.score}>
                <MyText>Current score {player.score}</MyText>
                <Button style={styles.button} onPress={() => {toggleShowStats(!showStats)}}>All points</Button>
            </View>
            {
                showStats && <PlayerStats player={player}></PlayerStats>
            }
        </View>
    )    
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 10,
        flex: 1,
        backgroundColor: '#ddd'
    },
    current: {
        backgroundColor: '#bbb'
    },
    playerName: {
        fontSize: 25,
        fontWeight: '700',
        textAlign: 'center'
    },
    score: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 5
    },
    button: {
        marginBottom: 5
    }
});
