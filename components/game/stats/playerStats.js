import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { colors } from '../../../styles/colors';
import { MyText } from '../../globalComponents/myText';
import { MyTransText } from '../../globalComponents/myTransText';

export const PlayerStats = ({ player }) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.bestScore}>
                <MyTransText>Best score: </MyTransText><MyText>{player.bestScore}</MyText>
            </View>
            <FlatList 
                data={player.allPoints}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                    <View style={styles.round}>
                        <View style={styles.roundNum}>
                            <MyTransText>Round</MyTransText><MyText> {index + 1}:</MyText>
                        </View>
                        <MyTransText>{{item}} points</MyTransText>
                    </View>
                )}
            />
        </View>
    )    
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 10,
        flex: 1,
    },
    current: {
        backgroundColor: '#bbb'
    },
    playerName: {
        fontSize: 25,
        fontWeight: '700',
        textAlign: 'center'
    },
    bestScore: {
        flexDirection: 'row',
        marginLeft: 5
    },
    score: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 5
    },
    round: {
        borderBottomWidth: 1,
        borderBottomColor: colors.borderDark,
        flexDirection: 'row',
        width: '95%',
        alignSelf: 'center'
    },
    roundNum: {
        flexDirection: 'row',
        width: '50%',
        paddingRight: 10,
        justifyContent: 'flex-end'
    },
    button: {
        marginBottom: 5
    }
});
