import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../styles/colors';
import { MyTransText } from '../globalComponents/myTransText';

export const Button = (props) => {
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
          fontWeight: '700',
          fontSize: 20,
      }
});
