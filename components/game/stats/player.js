import React, { useState }from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from '../../globalComponents/button';
import { RoundButton } from '../../globalComponents/roundButton';
import { colors } from '../../../styles/colors';
import { globalStyles } from '../../../styles/globalStyles';
import { MyText } from '../../globalComponents/myText';

export const Player = ({ player, isPlayingNow }) => {
    return (
        <View style={isPlayingNow ? [styles.wrapper, styles.current] : [styles.wrapper]}>
            <MyText style={styles.playerName}>{player.name}</MyText>
            <View style={styles.score}>
                <MyText>Current score {player.score}</MyText>
                <Button style={styles.button}>All points</Button>
            </View>
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
