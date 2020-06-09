import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Trans } from 'react-i18next';

export const MyTransText = (props) => {
    return (
        <Text style={[styles.text, props.style]}><Trans>{props.children}</Trans></Text>
    )
}

const styles = StyleSheet.create({
    text: {        
        fontSize: 22,
        color: '#444',
        fontFamily: 'nunito-regular' 
    }
});
