import React, { useState }from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Button } from '../globalComponents/button';
import { RoundButton } from '../globalComponents/roundButton';
import { colors } from '../../styles/colors';
import { globalStyles } from '../../styles/globalStyles';
import { WordChecker } from './wordChecker';
import { TwoLetterWords } from './twoLetterWords';

export const Game = ({ language }) => {

    return (
        <View style={styles.wrapper}>
            <WordChecker></WordChecker>
            <TwoLetterWords language={language}></TwoLetterWords>
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
