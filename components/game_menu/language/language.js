import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { MyText } from '../../globalComponents/myText';

export const Language = ({ lang, index, styles, changeLang }) => {
    const handlePress = () => {
        changeLang(index)
    }
    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.language}>
                <Image style={styles.langImg} source={lang.flag} />
                <MyText>{lang.name}</MyText>
            </View>
        </TouchableOpacity>
    )    
}
