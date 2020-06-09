import React, { useState, useEffect }from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { Player } from './player';

export const Stats = (props) => {
    const [currentPlayerNum, setCurrentPlayerNum] = useState(props.currentPlayerNum);
    let flatListRef = '';
    useEffect(() => {
        setCurrentPlayerNum(props.currentPlayerNum);
        flatListRef.scrollToIndex({animated: true, index: props.currentPlayerNum})
    });

    return (
        <FlatList
            style={styles.list}
            data={props.players}
            ref={(ref) => { flatListRef = ref; }}
            keyExtractor={(item, index) => index.toString()}
            scrollToIndex={currentPlayerNum}
            renderItem={({item}) => (
                <Player
                    player={item}
                    isPlayingNow={currentPlayerNum == item.id ? true : false}
                    index={item.id}>
                </Player>
            )}
        />
    )    
}

const styles = StyleSheet.create({
    list: {
        flex: 0,
        width: '95%',
        minWidth: 300,
        maxWidth: 450,
        alignSelf: 'center'
    },
});
