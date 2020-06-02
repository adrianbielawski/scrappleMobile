import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { MyText } from '../../globalComponents/myText';

export const Language = ({ lang, changeLang }) => {
    const handlePress = () => {
        changeLang(lang[1].symbol)
    }
    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.language}>
                <Image style={styles.img} source={lang[1].flag} />
                <MyText>{lang[1].name}</MyText>
            </View>
        </TouchableOpacity>
    )    
}

const styles = StyleSheet.create({
    img: {
        alignSelf: 'center',
        marginRight: 10,
    },
    language: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 15,
    },
});
