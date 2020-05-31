import React, { useState } from 'react';
import i18next from 'i18next';
import { StyleSheet, View, TextInput, Image } from 'react-native';
import { colors } from '../../styles/colors';
import { globalStyles } from '../../styles/globalStyles';

const images = {
    thumbUp: require('../../assets/img/thumb-up.png'),
    thumbDown: require('../../assets/img/thumb-down.png')
};

export const WordChecker = (props) => {
    const [valid, setValid] = useState(false);
    const [word, setWord] = useState('');
    const [fetching, setFetching] = useState(false);
    let timeout = null;

    const handleInputChange = (word) => {
        setWord(word);   
        if (timeout) {
          clearTimeout(timeout);
        };

        timeout = setTimeout(
          () => checkWord(word),
          300,
        );
    }

    const checkWord = (word) => {
        if (word.length < 2) {
            setFetching(false);
            setValid(null);
            return;
        };
    
        setFetching(true);
        setValid(null);       

        let url = '';
        let params = '';
        if(props.language === 'en-GB') {
            url = 'https://burek.it/sowpods/';
            params = new URLSearchParams({
                word: word
            });
        } else if(props.language === 'pl-PL') {
            url = 'https://burek.it/osps/files/php/osps_funkcje2.php';
            params = new URLSearchParams({
                s: 'spr',
                slowo_arbiter2: word
            });
        };
        
        fetch(`${url}?${params.toString()}`).then(
            response => response.text()
        ).then(
            response => {
                setFetching(false);
                setValid(response === '1' ? true : false);
            }
        );
    }

    return (
        <View style={styles.wrapper}>
                <TextInput
                    style={[globalStyles.input, styles.input]}
                    autoCapitalize={'characters'}
                    onChangeText={(word) => {handleInputChange(word)}}
                    onTouchStart={() => {setWord('')}}
                    placeholder={i18next.t("Check your word")}
                    value={word}>
                </TextInput>
            <View>
                <Image source={valid ? images.thumbUp : images.thumbDown} style={styles.image}/>
            </View>
        </View>
    )    
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center'
    },
    input: {
        height: 45,
        textAlign: 'center',
        fontSize: 30,
        color: colors.mainColor,
        fontWeight: '700',
        width: '90%',
    },
    image: {
        marginTop: 20,
    }
});
