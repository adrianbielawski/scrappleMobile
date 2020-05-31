import React, { useState }from 'react';
import i18next from 'i18next';
import { StyleSheet, View, TouchableOpacity, TextInput, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { MyTransText } from '../globalComponents/myTransText';
import { colors } from '../../styles/colors';
import { globalStyles } from '../../styles/globalStyles';
import { RoundButton } from '../globalComponents/roundButton';

export const CurrentPlayer = ({player, timer, time}) => {
    const [timeLeft, setTimeLeft] = useState(time)

    const addPoints = () => {

    }

    return (
        <View style={styles.wrapper}>
            <MyTransText i18nKey="ItsTurnNow">It is <Text style={styles.playerName}>{player}</Text>'s turn now!</MyTransText>
            {timer ?
                <Text style={styles.timer}>{timeLeft.min}:{timeLeft.sec}</Text>
            : null
            }
            <View style={styles.addPoints}>
                <TextInput style={[globalStyles.input, styles.input]} autoCapitalize={'characters'} placeholder={i18next.t("Add points")}></TextInput>
                <RoundButton onPress={addPoints}>
                    <FontAwesomeIcon style={styles.faCheck} icon={ faCheck } size={24} />
                </RoundButton>
            </View>
        </View>
    )    
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 15,
        alignItems: 'center',
    },
    playerName: {
        fontWeight: '700',
        fontSize: 35
    },
    addPoints: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
    },
    timer: {
        flex: 0,
        fontSize: 45,
        fontWeight: '700',
        color: colors.mainColor,
    },
    input: {
        height: 40,
        fontSize: 30,
        textAlign: 'center',
        color: colors.mainColor
    },
    faCheck: {
        color: '#fff'
    },
});
