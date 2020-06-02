import React from 'react';
import { StyleSheet, View, FlatList, ScrollView, Image } from 'react-native';
import { Formik } from 'formik';
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
    console.log(players[2].score)
    return (
        <View style={styles.wrapper}>
            <Header></Header>
            <MyTransText style={globalStyles.title}>Game results</MyTransText>
            <ScrollView>
                <FlatList
                    style={styles.list}
                    data={players}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => (
                        <View style={styles.playerWrapper}>
                            <View style={styles.place}>
                                <MyTransText style={styles.place}>{item.place.text} place</MyTransText>
                                <Image style={styles.image} source={images[item.place.text]}></Image>
                            </View>
                            <MyText style={styles.name}>{item.name}</MyText>
                            <View style={styles.resoult}>
                                <MyTransText>Total: {item.score}</MyTransText>
                                <MyTransText>Best score: {item.bestScore}</MyTransText>
                            </View>
                        </View>
                    )}
                />
            </ScrollView>
            <Button style={styles.button} onPress={exitGame}>Exit</Button>
        </View>
    )    
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    list: {
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
        fontSize: 30
    },
    name: {
        fontSize: 30,
        textAlign: 'center'
    },
    resoult: {
        flexDirection: 'row',
    },
    button: {
        width: 250,
        marginTop: 10,
        alignSelf: 'center'
    }
});
