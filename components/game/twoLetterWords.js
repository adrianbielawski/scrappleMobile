import React, { useState }from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Button } from '../globalComponents/button';
import { colors } from '../../styles/colors';

const images = {
    'en-GB': {
        img: require('../../assets/img/two-letter-words-en-GB.jpg'),
        ratio: 0.963,
    },
    'pl-PL': {
        img: require('../../assets/img/two-letter-words-pl-PL.jpg'),
        ratio: 1.157
    }
}

export const TwoLetterWords = ({ language }) => {
    const [showWords, toggleShowWords] = useState(false)

    return (
        <View style={styles.wrapper}>
            <Button style={styles.button} onPress={() => {toggleShowWords(!showWords)}}>
                {showWords ? 'Show two-letter words' : 'Hide two-letter words'}
            </Button>
            {showWords ?
                <TouchableOpacity style={styles.imageContainer} onPress={() => {toggleShowWords(!showWords)}}>
                    <Image source={images[language].img} style={[styles.img, {aspectRatio: images[language].ratio}]}/>
                </TouchableOpacity>
            : null}
        </View>
    )    
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 15,
    },
    button: {
        width: 300,
        alignSelf: 'center',
    },
    imageContainer: {
        width: '98%',
        alignSelf: 'center',
        flexDirection: 'row',
        position: 'absolute',
        top: 42,
        borderWidth: 1,
        borderColor: colors.borderDark,
        elevation: 5,
        zIndex: 100
    },
    img: {
        resizeMode: 'contain',
        flex: 1,
        width: '100%',
    }
});
