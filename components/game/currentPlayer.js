import React, { useState, useEffect } from 'react';
import { Formik, isInteger } from 'formik';
import i18next from 'i18next';
import Moment from 'react-moment';//important
import moment from 'moment';
import { StyleSheet, View, TextInput, Text, Alert } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { MyText } from '../globalComponents/myText';
import { MyTransText } from '../globalComponents/myTransText';
import { colors } from '../../styles/colors';
import { globalStyles } from '../../styles/globalStyles';
import { RoundButton } from '../globalComponents/roundButton';

export const CurrentPlayer = (props) => {
    const [timeLeft, setTimeLeft] = useState(`${props.time.min}:${props.time.sec}`);
    
    useEffect(() => {
        const newEndTime = moment().add({
            'minutes': props.time.min,
            'seconds': props.time.sec
        });
        
        const interval = props.timer && setInterval(() => {updateTimer(newEndTime)}, 1000);
        
        return function cleanup() {
            clearInterval(interval);
          }
       
    }, []);

    const updateTimer = (endTime) => {
        const now = moment();
        const diff = endTime.diff(now);
        const duration = moment.duration(diff);
        let timeLeft = duration.format('mm:ss',{trim: false});

        const time = moment(timeLeft, 'mm:ss');
        const time0 = moment('00:00', 'mm:ss');

        if(time.isSame(time0)){
            timeLeft = '00:00'
            setTimeout(timeOut, 500);
        }
        setTimeLeft(timeLeft)
    }

    const timeOut = () => {
        props.switchPlayer(true);
    }

    const getTimerClass = () => {
        let time = moment(timeLeft, 'mm:ss')
        let shortTime = moment('00:30', 'mm:ss');
        let timerClass = time.isSameOrBefore(shortTime) ? [styles.timer, styles.shortTime] : [styles.timer];
        return timerClass   
    }

    const handleSubmit = (values) => {
        let points = values.points;
        const isValid = validateUserInput(points);
        if(!isValid) {
            return
        }
        props.addPoints(parseInt(points));
    }

    const validateUserInput = (points) => {
        if(points < 0 || !isInteger(points)) {
            Alert.alert(
                i18next.t("MustBeInt0+"),
                '',
                [{
                    text: 'Ok',
                }]
            )
            return
        }
        return true
    }
    
    return (
        <View style={styles.wrapper}>
            <MyTransText style={styles.nowPlaying}>{i18next.t(`ItsTurnNow`, {name: props.player.name})}<MyText style={styles.playerName}></MyText></MyTransText>
            {props.timer ?
                <Text style={getTimerClass()}>{timeLeft}</Text>
            : null
            }
            <View>
            <Formik
                style={styles.addPoints}
                initialValues={{points: ''}}
                onSubmit={(values) => {
                    handleSubmit(values)
                }}
            >
                {(props) => (
                    <View style={styles.addPoints}>
                        <TextInput
                            style={[globalStyles.input, styles.input]}
                            keyboardType={'numeric'}
                            placeholder={i18next.t("Add points")}
                            onChangeText={props.handleChange('points')}
                            values={props.values.points}
                        />
                        <RoundButton type={'submit'} onPress={props.handleSubmit}>
                            <FontAwesomeIcon style={styles.faCheck} icon={ faCheck } size={24} />
                        </RoundButton>
                    </View>
                )}                    
            </Formik>
            </View>
        </View>
    )    
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
    },
    nowPlaying: {        
        textAlign: 'center'
    },
    playerName: {
        fontWeight: '700',
        fontSize: 35,
    },
    addPoints: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5
    },
    timer: {
        flex: 0,
        fontSize: 45,
        fontWeight: '700',
        color: colors.mainColor,
    },
    shortTime: {
        color: '#f00'
    },
    input: {
        height: 40,
        fontSize: 25,
        textAlign: 'center',
        color: colors.mainColor
    },
    faCheck: {
        color: '#fff'
    },
});
