import React, { useState } from 'react';
import { StyleSheet, View, Switch, Text, TouchableOpacity } from 'react-native';
import { colors } from '../../../styles/colors';
import { globalStyles } from '../../../styles/globalStyles';
import { MyTransText } from '../../globalComponents/myTransText';
import { TimePicker } from './timePicker';

export const TimeLimit = ({ setTimeLimit, defaultTime, toggleTimer, timer}) => {
    const [showTimer, setShowTimer] = useState(timer);
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
        <View style={globalStyles.elevatedWrapper}>
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
                <View style={[globalStyles.input, styles.input, showTimer && styles.showInput]} >
                    <Text style={styles.time}>{min}:{sec}</Text>
                </View>
            </TouchableOpacity>
            {timePicker && <TimePicker toggleTimePicker={toggleTimePicker} setTime={setTime}/>}
        </View>
    )    
}

const styles = StyleSheet.create({
    timer: {
        flexDirection: 'row',
    },
    switch: {
        marginRight: 5,
        marginLeft: -10
    },
    input: {
        width: 150,
        height: 0,
        borderWidth: 0,
        overflow: 'hidden'
    },
    showInput: {
        marginTop: 10,
        height: 'auto',
        borderWidth: 1,
    },
    time: {
        color: colors.mainColor,
        fontFamily:'nunito-extraBold',
        fontSize: 34,
    }
});
