import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { MyTransText } from '../globalComponents/myTransText';
import { colors } from '../../styles/colors';

export const RoundButton = (props) => {
    return (
        <TouchableOpacity style={[styles.button, props.style]} onPress={props.onPress}>
            <MyTransText style={[styles.buttonText, props.textStyle]}>{props.children}</MyTransText>
        </TouchableOpacity>
    )    
}

const styles = StyleSheet.create({
    button: {
        flex: 0,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.borderLight,
        backgroundColor: colors.mainColor,
        borderRadius: 17.5,
        minWidth: 35,
        height: 35,
        marginHorizontal: 5,
        marginVertical: 5,
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 20,
    }
});
