import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../../styles/colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { RoundButton } from '../../globalComponents/roundButton';
import { MyText } from '../../globalComponents/myText';
import { MyTransText } from '../../globalComponents/myTransText';

const grabbedElementTop = 10;

export const Player = ({ player, index, removePlayer, moveUp, moveDown, setGrabbedElement, moveElements, reorderPlayers }) => {
    const [elementD, getElementD] = useState(null);
    const [isGrabbed, setIsGrabbed] = useState(false);
    const [touchStart, setTouchStart] = useState(0);
    const [top, setTop] = useState(0);
    const [stateDistance, setStateDistance] = useState(0);

    const handleGrab = (e) => {
        setIsGrabbed(true)
        setGrabbedElement(index);        
        setTouchStart(e.nativeEvent.pageY);
        setTop(elementD.y);
    };

    const move = (e) => {
        const moveDistance = e.nativeEvent.pageY - touchStart;
        setTop(moveDistance)

        let distance = moveDistance / (elementD.height + grabbedElementTop);
        distance = Math.round(distance);
        if(distance === -0) {
            distance = 0;
        };

        if(distance !== stateDistance) {
            setStateDistance(distance);
            moveElements(distance);
        };
    }

    const handleDrop = (e) => {
        reorderPlayers(index, stateDistance)
        setIsGrabbed(false);
        setStateDistance(0);
        setTop(0)
    };

    const getElementStyle = () => {
        let style = [styles.wrapper, {top: top}];
        if(moveUp){
            style = [styles.wrapper, {top: -elementD.height - grabbedElementTop}]
        };
        if(moveDown){
            style = [styles.wrapper, {top: elementD.height + grabbedElementTop}]
        };
        if(isGrabbed){
            style = [styles.wrapper, styles.grabbed, {top: top}]
        };
        return style
    };

    return (
        <View
            style={getElementStyle()}
            onLayout={(e) => {getElementD(e.nativeEvent.layout)}}>
                <View
                    style={styles.player}
                    onTouchStart={(e) => {handleGrab(e)}}
                    onTouchEnd={(e) => {handleDrop(e)}}
                    onMoveShouldSetResponder={() => {return true}}
                    onResponderMove={(e) => {move(e)}}
                >
                    <MyText><MyTransText>Player</MyTransText> {index + 1} : </MyText>
                    <MyText style={styles.playerName}>{player}</MyText>
                </View>
            <RoundButton onPress={() => {removePlayer(index)}}>
                <FontAwesomeIcon style={styles.faTimes} icon={ faTimes } size={24} />
            </RoundButton>
        </View>
    )    
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 0,
        flexDirection: 'row',
        marginVertical: 5,
        width: '98%',
        backgroundColor: colors.offWhite,
        elevation: 1,
        borderBottomWidth: 1,
        borderBottomColor: colors.borderDark,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
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
    faTimes: {
        color: '#fff'
    },
    grabbed: {
        width: '98%',
        elevation: 4,
        top: grabbedElementTop,
    }
});
