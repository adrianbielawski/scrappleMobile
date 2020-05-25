import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import { Header } from '../globalComponents/header';
import { MyTransText } from '../globalComponents/myTransText';
import { MyText } from '../globalComponents/myText';
import { ChooseLanguage } from './language/chooseLanguage';

export const GameMenu = () => {


    return (
        <View>
            <Header/>
            <ChooseLanguage/>
        </View>
    )    
}

const styles = StyleSheet.create({
});
