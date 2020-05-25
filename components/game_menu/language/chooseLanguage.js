import React, { useState } from 'react';
import i18n from '../../../i18n';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { MyTransText } from '../../globalComponents/myTransText';
import { Language } from './language';

export const ChooseLanguage = () => {
    const [currentLanguage, setCurrentLanguage] = useState(0)
    const [showLanguages, setShowLanguages] = useState(false)
    const languages = [
        {
            name: 'English',
            symbol: 'en-GB',
            flag: require('../../../assets/img/en-GB-flag.png')
        },
        {
            name: 'Polski',
            symbol: 'pl-PL',
            flag: require('../../../assets/img/pl-PL-flag.png')
        }
    ]

    const toggleShowLanguages = () => {
        setShowLanguages(!showLanguages)
    }

    const changeLang = (index) => {
        setCurrentLanguage(index);
        setShowLanguages(!showLanguages);
        i18n.changeLanguage(languages[index].symbol);
    }
    
    const languagesStyle = showLanguages ? styles.showLanguages : '';

    return (
        <View style={styles.chooseLanguage}>
            <TouchableOpacity onPress={toggleShowLanguages}>
                <View style={styles.language}>
                    <Image style={styles.langImg} source={languages[currentLanguage].flag} />
                    <MyTransText>Language</MyTransText>
                </View>
            </TouchableOpacity>
            <View style={[styles.languages, languagesStyle]}>
                {languages.map((lang, i) => {
                    return <Language lang={lang} key={i} index={i} styles={styles} changeLang={changeLang}/>
                })}
            </View>
        </View>
    )    
}

const styles = StyleSheet.create({
    chooseLanguage: {
        alignSelf: 'center',
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    langImg: {
        alignSelf: 'center',
        marginRight: 10,
    },
    languages: {
        flexDirection: 'row',
        marginTop: 10,
        height: 0,
        overflow: 'hidden'
    },
    showLanguages: {
        height: 'auto',
    },
    language: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 15,
    },
});
