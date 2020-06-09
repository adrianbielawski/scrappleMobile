import React, { useState } from 'react';
import i18next from 'i18next';
import { StyleSheet, View, Text, ScrollView, Alert } from 'react-native';
import { colors } from '../../../styles/colors';
import { Button } from '../../globalComponents/button';

export const TimePicker = ({ toggleTimePicker, setTime}) => {
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');
    const [minInView, setMinInView] = useState(0);
    const [secInView, setSecInView] = useState(0);

    const mins = [];
    const secs = [];
    for (let i = -1; i <= 60; i++) {
        let min = i;
        let sec = i;
        let id = i + 1;
        if(i < 10) {
            min = `0${i}`;
            sec = `0${i}`;
            id = id < 10 ? `0${id}` : id;
        }
        if(i < 0 || i == 60) {
            min = '';
            sec = '';
        }
        
        let minStyle = minutes == min ? [styles.time, styles.selectedTime] : styles.time;
        let secStyle = seconds == min ? [styles.time, styles.selectedTime] : styles.time;
        mins.push((
            <View style={styles.times} key={i} id={id}>
                <Text style={minStyle}>{min}</Text>
            </View>
        ))
        secs.push((
            <View style={styles.times} key={i} id={id}>
                <Text style={secStyle}>{sec}</Text>
            </View>
        ))
    }

    let minScroll = '';

    const handleScrollMin = (event) => {
        let scrolledItems = event.nativeEvent.contentOffset.y / 40;
        scrolledItems = Math.round(scrolledItems);
        setMinInView(scrolledItems)
        let minutes = mins[scrolledItems];
        setMinutes(minutes.props.id)
    }

    const handleScrollMinStop = () => {
        minScroll.scrollTo({x: 0, y: minInView * 40, animated: true})
    }

    let secScroll = '';

    const handleScrollSec = (event) => {
        let scrolledItems = event.nativeEvent.contentOffset.y / 40;
        scrolledItems = Math.round(scrolledItems);
        setSecInView(scrolledItems)
        let seconds = secs[scrolledItems];
        setSeconds(seconds.props.id)
    }

    const handleScrollSecStop = () => {
        secScroll.scrollTo({x: 0, y: secInView * 40, animated: true})
    }

    const validateTime = () => {
        if(minutes < 1) {
            Alert.alert(
                i18next.t("MinimumTimeLimit"),
                '',
                [{
                    text: 'Ok',
                }])
            return
        }

        setTime(minutes, seconds)
    }
    return (
        <View style={styles.wrapper}>
            <View style={styles.picker} onStartShouldSetResponder={() => true}>
                <ScrollView
                    ref={ref => minScroll = ref}
                    onScroll={handleScrollMin}
                    onMomentumScrollEnd={handleScrollMinStop}
                    style={styles.timeScroll}>
                        {mins}
                </ScrollView>
                <Text style={styles.colon}>:</Text>
                <ScrollView
                    ref={ref => secScroll = ref}
                    onScroll={handleScrollSec}
                    onMomentumScrollEnd={handleScrollSecStop}
                    style={styles.timeScroll}>
                        {secs}
                </ScrollView>
            </View>
            <View style={styles.buttons}>
                <Button style={{zIndex: 1000}} onPress={toggleTimePicker}>Cancel</Button>
                <Button onPress={validateTime}>Ok</Button>
            </View>
        </View>
    )    
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        top: -40,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: colors.offWhite,
        borderWidth: 1,
        borderColor: colors.borderDark,
        maxWidth: 250,
        padding: 10,
        elevation: 60,
    },
    picker: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 135
    },
    timeScroll: {
        alignContent: 'center',
        height: 120,
        width: 50,
        marginHorizontal: 5,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderRightColor: colors.borderLight,
        borderLeftColor: colors.borderLight,
        backgroundColor: '#eee',
        flexDirection: 'column'
    },
    times: {
        alignItems: 'center',
    },
    time: {
        color: '#777',
        fontWeight: '900',
        fontSize: 30,
        height: 40,
        paddingHorizontal: 5,
    },
    colon: {
        fontSize: 30,
        fontWeight: '700'
    },
    selectedTime: {
        color: colors.mainColor,
        fontWeight: '700'
    },
    buttons: {
        flexDirection: 'row',
    },
});
