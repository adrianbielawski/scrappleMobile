import React from 'react';
import {StyleSheet, Text} from 'react-native';

export const MyText = (props) => {
    return (
        <Text style={styles.text}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {        
        fontSize: 20
    }
});