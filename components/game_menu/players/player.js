import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { colors } from '../../../styles/colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { RoundButton } from '../../globalComponents/roundButton';
import { MyText } from '../../globalComponents/myText';
import { MyTransText } from '../../globalComponents/myTransText';

export const Player = ({ player, index, removePlayer }) => {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity>
                <View style={styles.player}>
                    <MyText><MyTransText>Player</MyTransText> {index + 1} : </MyText>
                    <MyText style={styles.playerName}>{player}</MyText>
                </View>
            </TouchableOpacity>
            <RoundButton onPress={() => {removePlayer(index)}} style={styles.button}>
                <FontAwesomeIcon style={styles.faTimes} icon={ faTimes } size={24} />
            </RoundButton>
        </View>
    )    
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 0,
        flexDirection: 'row',
        marginTop: 10,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: colors.borderDark,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    player:{
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    playerName: {
        fontWeight: '700',
        width: '60%',
    },
    button: {
        zIndex: 1
    },
    faTimes: {
        color: '#fff'
    }
});
