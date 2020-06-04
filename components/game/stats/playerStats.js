import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import i18next from 'i18next';
import { colors } from '../../../styles/colors';
import { MyText } from '../../globalComponents/myText';

export const PlayerStats = ({ player }) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.bestScore}>
                <MyText>{i18next.t(`BestScoreNum`, {points: player.bestScore})}</MyText>
            </View>
            <FlatList
                data={player.allPoints}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                    <View style={styles.round}>
                        <MyText style={styles.roundNum}>{i18next.t(`RoundNum`, {num: index + 1})}</MyText>
                        <MyText>{i18next.t('PointsCount.key', {count: item})}</MyText>
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
        width: '50%',
        paddingRight: 10,
        textAlign: 'right'
    },
    button: {
        marginBottom: 5
    }
});
