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
    },
})