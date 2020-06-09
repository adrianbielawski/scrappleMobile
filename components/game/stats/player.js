import React, { useState }from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from '../../globalComponents/button';
import { MyText } from '../../globalComponents/myText';
import { PlayerStats } from './playerStats';
import { MyTransText } from '../../globalComponents/myTransText';
import { colors } from '../../../styles/colors';

export const Player = ({ player, isPlayingNow }) => {
    const [showStats, toggleShowStats] = useState(false)
    
    return (
        <View
            style={isPlayingNow ? [styles.wrapper, styles.current] : [styles.wrapper]}
            onStartShouldSetResponder={() => true}
        >
            <MyText style={styles.playerName}>{player.name}</MyText>
            <View style={styles.scoreWrapper}>
                <View style={styles.score}>
                    <MyTransText>Current score </MyTransText>
                    <MyText>{player.score}</MyText>
                </View>
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
        marginBottom: 8,
        marginTop: 2,
        flex: 1,
        width: '98%',
        alignSelf: 'center',
        backgroundColor: '#ddd',
        elevation: 1.5
    },
    current: {
        backgroundColor: colors.offWhite,
        elevation: 3
    },
    playerName: {
        fontSize: 30,
        fontWeight: '700',
        textAlign: 'center'
    },
    scoreWrapper: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 5
    },
    score: {
        flexDirection: 'row'
    },
    button: {
        marginBottom: 10
    }
});
