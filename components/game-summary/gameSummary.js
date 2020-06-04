import React from 'react';
import { StyleSheet, View, FlatList, Image } from 'react-native';
import i18next from 'i18next';
import { Header } from '../globalComponents/header';
import { MyText } from '../globalComponents/myText';
import { Button } from '../globalComponents/button';
import { globalStyles } from '../../styles/globalStyles';
import { colors } from '../../styles/colors';
import { MyTransText } from '../globalComponents/myTransText';

const images = {
    '1st': require('../../assets/img/1st-place.png'),
    '2nd': require('../../assets/img/2nd-place.png'),
    '3rd': require('../../assets/img/3rd-place.png')
}

export const GameSummary = ({ players, exitGame }) => {
    return (
        <View style={styles.wrapper}>
            <Header></Header>
            <MyTransText style={globalStyles.title}>Game results</MyTransText>
            <View style={styles.wrapper}>
                <FlatList
                    style={styles.list}
                    data={players}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => (
                        <View style={styles.playerWrapper}>
                            <View style={styles.place}>
                                <MyText style={styles.place}>{i18next.t(`${item.place.text} place`, {num: item.place.text})}</MyText>
                                <Image source={images[item.place.text]}></Image>
                            </View>
                            <MyText style={styles.name}>{item.name}</MyText>
                            <View style={styles.resoult}>
                                <MyText>{i18next.t('Total', {score: item.score})}<MyText style={styles.score}>{item.score}</MyText></MyText>
                                <MyText>{i18next.t('Best score', {score: item.bestScore})}<MyText style={styles.score}>{item.bestScore}</MyText></MyText>
                            </View>
                        </View>
                    )}
                />
                <Button style={styles.button} onPress={exitGame}>Exit</Button>
                <View style={{flex: 1000}}></View>
            </View>
        </View>
    )    
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    list: {
        flex: 0,
        width: '98%',
        alignSelf: 'center'
    },
    playerWrapper: {
        alignSelf: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: 450,
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginVertical: 5,
        backgroundColor: colors.offWhite,
        borderColor: colors.borderLight,
        borderWidth: 1,
        elevation: 2,
    },
    place: {
        flexDirection: 'row',
        fontSize: 30,
        marginRight: 10
    },
    name: {
        fontSize: 30,
        textAlign: 'center'
    },
    resoult: {
        width: '100%',
        height: 30,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly'
    },
    button: {
        width: 250,
        marginTop: 10,
        alignSelf: 'center'
    },
    score: {
        fontSize: 25,
        lineHeight: 25,
        fontWeight: '700'
    }
});
