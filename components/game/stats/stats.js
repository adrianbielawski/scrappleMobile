import React, { useState }from 'react';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import { Button } from '../../globalComponents/button';
import { RoundButton } from '../../globalComponents/roundButton';
import { colors } from '../../../styles/colors';
import { globalStyles } from '../../../styles/globalStyles';
import { Player } from './player';

export const Stats = (props) => {
    const [currentPlayerNum, setCurrentPlayerNum] = useState(props.currentPlayerNum);

    return (
        <View style={styles.wrapper}>
            <FlatList
                style={styles.list}
                data={props.players}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <Player
                        player={item}
                        isPlayingNow={currentPlayerNum == item.id ? true : false}
                        index={item.id}>
                    </Player>
                )}
            />
        </View>
    )    
}

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 10,
        flex: 1,
        width: '95%',
        minWidth: 300,
        maxWidth: 450,
        alignSelf: 'center'
    }
});
