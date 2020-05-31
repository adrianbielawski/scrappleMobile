import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import {colors} from '../../styles/colors'

export const Header = () => {
    return (
        <View style={styles.imgContainer}>
            <Image style={styles.img} source={require('../../assets/img/logo.jpg')} />
        </View>
    )
};

const styles = StyleSheet.create({
    imgContainer: {
        flexDirection: 'row',
        paddingTop: 23,
        marginBottom: 20,
        backgroundColor: colors.mainColor
    },
    img: {
        resizeMode: 'contain',
        flex: 1,
        aspectRatio: 5.33,
    }
});