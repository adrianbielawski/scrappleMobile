import React, { useState } from 'react';
import { StyleSheet, View, Switch, Text, TouchableOpacity } from 'react-native';
import { colors } from '../../../styles/colors';
import { globalStyles } from '../../../styles/globalStyles';
import { MyTransText } from '../../globalComponents/myTransText';
import { TimePicker } from './timePicker';

export const TimeLimit = ({ setTimeLimit, defaultTime, toggleTimer}) => {
    const [showTimer, setShowTimer] = useState(false);
    const [min, setMin] = useState(defaultTime.min);
    const [sec, setSec] = useState(defaultTime.sec);
    const [timePicker, setTimePicker] = useState(false)

    const toggleShowTimer = () => {
        setShowTimer(previousState => !previousState);
        toggleTimer();
    }

    const toggleTimePicker = () => {        
        setTimePicker(previousState => !previousState)
    }

    const setTime = (minutes, seconds) => {
        setMin(minutes);
        setSec(seconds);
        toggleTimePicker();
        setTimeLimit(minutes, seconds)
    }

    return (
        <View style={styles.wrapper}>
            <View style={styles.timer}>
                <Switch
                    style={styles.switch}
                    trackColor={{ true: "#888", false: "#ccc"}}
                    thumbColor={showTimer ? colors.mainColor : "#888"}
                    onValueChange={toggleShowTimer}
                    value={showTimer}/>
                <MyTransText>Player's time limit</MyTransText>
            </View>
            <TouchableOpacity onPress={toggleTimePicker}>
                <View style={[globalStyles.input, showTimer ? styles.showInput : styles.hiddenInput]} >
                    <Text style={styles.time}>{min} : {sec}</Text>
                </View>
            </TouchableOpacity>
            {timePicker && <TimePicker toggleTimePicker={toggleTimePicker} setTime={setTime}/>}
        </View>
    )    
}

const styles = StyleSheet.create({
    wrapper: {
        alignSelf: 'center',
        alignItems: 'center',
    },
    timer: {
        flex: 0,
        flexDirection: 'row',
        marginBottom: 10
    },
    switch: {
        marginRight: 10
    },
    hiddenInput: {
        height: 0,
        borderWidth: 0,
        overflow: 'hidden'
    },
    showInput: {
        height: 'auto',
        borderWidth: 1,
    },
    time: {
        color: colors.mainColor,
        fontWeight: '700',
        fontSize: 30,
        
    }
});
