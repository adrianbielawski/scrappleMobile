import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors } from '../../styles/colors';
import { MyTransText } from '../globalComponents/myTransText';

export const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={[styles.button, props.style]}>
                <MyTransText style={[styles.buttonText, props.textStyle]}>{props.children}</MyTransText>
            </View>
        </TouchableOpacity>
    )    
}

const styles = StyleSheet.create({
    button: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.borderLight,
        backgroundColor: colors.mainColor,
        height: 35,
        minWidth: 100,
        paddingHorizontal: 20,
        paddingVertical: 3,
        marginHorizontal: 5,
        marginVertical: 5,
        borderRadius: 17.5,
        elevation: 3,
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'nunito-extraBold',
        fontSize: 22,
    }
});
