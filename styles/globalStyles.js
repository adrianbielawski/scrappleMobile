import {StyleSheet} from 'react-native';
import { colors } from './colors';

export const globalStyles = StyleSheet.create({
    input: {
        backgroundColor: colors.offWhite,
        borderColor: colors.borderLight,
        borderWidth: 1,
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        fontFamily: 'nunito-extraBold'
    },
    title: {
        fontSize: 35,
        marginBottom: 20,
        marginTop: 10,
        textAlign: 'center',
        fontFamily: 'nunito-extraBold'
    },
    elevatedWrapper: {
        backgroundColor: colors.offWhite,
        elevation: 3,
        width: '98%',
        maxWidth: 400,
        padding: 10,
        marginBottom: 10,
        flex: 0,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
})