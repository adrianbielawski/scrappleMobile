import React, { useState } from 'react';
import { StyleSheet, View, TextInput, FlatList, Alert, Keyboard } from 'react-native';
import { Formik } from 'formik';
import { colors } from '../../../styles/colors';
import { globalStyles } from '../../../styles/globalStyles';
import { MyTransText } from '../../globalComponents/myTransText';
import { RoundButton } from '../../globalComponents/roundButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Player } from './player';

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
    
    const addPlayer = (value) => {
        Keyboard.dismiss()
        const player = value.player;
        const isPlayerExists = checkPlayers(player);
        
        if(currentPlayers.length >= 4) {
            Alert.alert(
                "Max 4 players",
                '',
                [{
                    text: 'Ok',
                }])
            return
        }        
        if(isPlayerExists) {
            Alert.alert(
                `Player with name ${player} already exists`,
                '',
                [{
                    text: 'Ok',
                }])
            return true
        }
        if(player.length < 1) {
            Alert.alert(
                "Please type in player's name",
                '',
                [{
                    text: 'Ok',
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
            <MyTransText>Add Player</MyTransText>
            <Formik
                initialValues={{player: ''}}
                onSubmit={(values, {resetForm}) => {
                    addPlayer(values);
                    resetForm();
                }}
            >
                {(props) => (
                    <View style={styles.addPlayer}>
                        <TextInput
                            style={[globalStyles.input, styles.input]}
                            onChangeText={props.handleChange('player')}
                            values={props.values.player}
                        />
                        <RoundButton title={'submit'} textStyle={styles.plus} onPress={props.handleSubmit}>
                            <FontAwesomeIcon style={styles.plus} icon={ faPlus } size={24} />
                        </RoundButton>
                    </View>
                )}                    
            </Formik>
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
    },
    plus: {
        color: '#fff',
    }
});
