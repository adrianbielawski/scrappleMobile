import React from 'react';
import {StyleSheet, Text} from 'react-native';

export const MyText = (props) => {
    return (
        <Text style={[styles.text, props.style]}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {        
        fontSize: 22,
        color: '#444',
        fontFamily: 'nunito-regular' 
    }
});