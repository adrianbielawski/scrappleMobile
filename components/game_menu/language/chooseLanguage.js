import React, { useState } from 'react';
import i18n from '../../../i18n';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { MyTransText } from '../../globalComponents/myTransText';
import { Language } from './language';
import { colors } from '../../../styles/colors';
import { globalStyles } from '../../../styles/globalStyles'

export const ChooseLanguage = ( {language, changeLanguage} ) => {
    const [currentLanguage, setCurrentLanguage] = useState(language)
    const [showLanguages, setShowLanguages] = useState(false)
    const languages = {
        'en-GB': {
            name: 'English',
            symbol: 'en-GB',
            flag: require('../../../assets/img/en-GB-flag.png')
        },
        'pl-PL': {
            name: 'Polski',
            symbol: 'pl-PL',
            flag: require('../../../assets/img/pl-PL-flag.png')
        }
    }

    const toggleShowLanguages = () => {
        setShowLanguages(!showLanguages)
    }

    const changeLang = (symbol) => {
        setCurrentLanguage(symbol);
        setShowLanguages(!showLanguages);
        i18n.changeLanguage(symbol);
        changeLanguage(symbol);
    }
    
    const languagesStyle = showLanguages ? styles.showLanguages : '';

    return (
        <View style={globalStyles.elevatedWrapper}>
            <TouchableOpacity onPress={toggleShowLanguages}>
                <View style={styles.language}>
                    <Image style={styles.langImg} source={languages[currentLanguage].flag} />
                    <MyTransText>Language</MyTransText>
                </View>
            </TouchableOpacity>
            <View style={[styles.languages, languagesStyle]}>
                {Object.entries(languages).map((lang, i) => {
                    return <Language lang={lang} key={i} changeLang={changeLang}/>
                })}
            </View>
        </View>
    )    
}

const styles = StyleSheet.create({
    langImg: {
        alignSelf: 'center',
        marginRight: 10,
    },
    languages: {
        flexDirection: 'row',
        height: 0,
        overflow: 'hidden'
    },
    showLanguages: {
        marginTop: 10,
        height: 'auto',
    },
    language: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
