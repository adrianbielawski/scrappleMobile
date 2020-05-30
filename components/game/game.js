import React, { useState }from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Button } from '../globalComponents/button';
import { RoundButton } from '../globalComponents/roundButton';
import { colors } from '../../styles/colors';
import { globalStyles } from '../../styles/globalStyles';

export const Game = (props) => {

    return (
        <View style={styles.wrapper}>
        </View>
    )    
}

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 40,
        flex: 1,
        backgroundColor: colors.background,
    }
});
