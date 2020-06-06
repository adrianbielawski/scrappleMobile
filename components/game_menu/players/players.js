import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';
import i18next from 'i18next';
import { colors } from '../../../styles/colors';
import { Player } from './player';
import { AddPlayer } from '../add_player/addPlayer';

export const Players = ({ players, setPlayers }) => {
    const [currentPlayers, setCurrentPlayers] = useState(players);
    const [grabbedElement, setGrabbedElement] = useState(null);
    const [elementsMovedUp, setElementsMovedUp] = useState([]);
    const [elementsMovedDown, setElementsMovedDown] = useState([]);

    const checkPlayers = (player) => {
        const lowPlayer = player.toLowerCase();
        const statePlayers = currentPlayers.map((player) => {
            const lowStatePlayer = player.toLowerCase();
            return lowStatePlayer
        })        
        return statePlayers.includes(lowPlayer) ? true : false;
    }
    
    const addPlayer = (player) => {
        const isPlayerExists = checkPlayers(player);
        
        if(currentPlayers.length >= 4) {
            Alert.alert(
                i18next.t("MaxPlayers"),
                '',
                [{
                    text: i18next.t('Ok'),
                }])
            return
        }        
        if(isPlayerExists) {
            Alert.alert(
                i18next.t(`PlayerExists`, {name: player}),
                '',
                [{
                    text: i18next.t('Ok'),
                }])
            return true
        }
        if(player.length < 1) {
            Alert.alert(
                i18next.t("TypeName"),
                '',
                [{
                    text: i18next.t('Ok'),
                }])
            return
        }
        setCurrentPlayers((currentPlayers) => {
            return [...currentPlayers, player]
        })
        setPlayers([...currentPlayers, player]);
    }

    const removePlayer = (i) => {
        const newPlayers = currentPlayers.filter((player, index) => i !== index)
        setCurrentPlayers(newPlayers)
        setPlayers(newPlayers);
    }

    const moveElements = (distance) => {
        if(distance > 0) {
            const elementToMove = grabbedElement + distance;
            if(elementsMovedUp.includes(elementToMove)) {
                const newElementsMovedUp = elementsMovedUp.filter((element, i) => elementToMove + 1 !== element);
                setElementsMovedUp(newElementsMovedUp)
            } else {
                setElementsMovedUp([...elementsMovedUp, elementToMove])
            }
        } else if (distance < 0) {
            const elementToMove = grabbedElement + distance;
            if(elementsMovedDown.includes(elementToMove)) {
                const newElementsMovedDown = elementsMovedDown.filter((element, i) => elementToMove - 1 !== element);
                setElementsMovedDown(newElementsMovedDown)
            } else {
                setElementsMovedDown([...elementsMovedDown, elementToMove])
            }
        } else if (distance == 0) {
            setElementsMovedUp([]);
            setElementsMovedDown([]);
        }
    }

    const reorderPlayers = (index, distance) => {
    const newPlayers = currentPlayers;
        let newIndex = index + distance
        
        if(newIndex < 1) {
            newIndex = 0;
        } else if(newIndex >= currentPlayers.length) {
            newIndex = currentPlayers.players.length -1;
        }
        
        newPlayers.splice(newIndex, 0, currentPlayers.splice(index, 1)[0]);
        
        setPlayers(newPlayers);
        setGrabbedElement(null);
        setElementsMovedDown([]);
        setElementsMovedUp([]);
    }
    
    return (
        <View style={styles.wrapper}>
            <AddPlayer addPlayer={addPlayer}/>
            <FlatList
                style={styles.list}
                data={currentPlayers}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                    <Player
                        player={item}
                        index={index}
                        key={index}
                        moveUp={elementsMovedUp.includes(index)}
                        moveDown={elementsMovedDown.includes(index)}
                        removePlayer={removePlayer}
                        setGrabbedElement={(index) => {setGrabbedElement(index)}}
                        moveElements={(distance) => {moveElements(distance)}}
                        reorderPlayers={(index, distance) => {reorderPlayers(index, distance)}}>
                    </Player>
                )}
            />
        </View>
    )    
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 10,
        alignSelf: 'center',
        alignItems: 'center',
        minWidth: 350,
        width: '50%'
    },
    input: {
        textAlign: 'center',
        minWidth: 250,
        marginRight: 5,
        height: 40,
        fontSize: 25,
        color: colors.mainColor,
        fontWeight: '700'
    },
    addPlayer: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center'
    },
    list: {
        width: '100%',
        position: 'relative'
    },
    plus: {
        color: '#fff',
    }
});
