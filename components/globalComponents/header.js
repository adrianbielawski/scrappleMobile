import React from 'react';
import { StyleSheet, Image } from 'react-native';

export const Header = () => {
    return (
        <Image style={styles.header} source={require('../../assets/img/logo.jpg')} />
    )
};

const styles = StyleSheet.create({
    header: {
        marginBottom: 20
    }
});