import React from 'react';
import { StyleSheet, View, TextInput, Keyboard } from 'react-native';
import { Formik } from 'formik';
import { colors } from '../../../styles/colors';
import { globalStyles } from '../../../styles/globalStyles';
import { MyTransText } from '../../globalComponents/myTransText';
import { RoundButton } from '../../globalComponents/roundButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export const AddPlayer = ({ addPlayer }) => {
    
    return (
        <View style={[styles.wrapper]}>
            <MyTransText>Add Player</MyTransText>
            <Formik
                initialValues={{player: ''}}
                onSubmit={(values, {resetForm}) => {
                    Keyboard.dismiss()
                    resetForm()
                    addPlayer(values.player);
                    values.player = '';
                }}
            >
                {(props) => (
                    <View style={styles.addPlayer}>
                        <TextInput
                            style={[globalStyles.input, styles.input]}
                            onChangeText={props.handleChange('player')}
                            value={props.values.player}
                        />
                        <RoundButton title={'submit'} textStyle={styles.plus} onPress={props.handleSubmit}>
                            <FontAwesomeIcon style={styles.plus} icon={ faPlus } size={24} />
                        </RoundButton>
                    </View>
                )}                    
            </Formik>
        </View>
    )    
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        zIndex: -1,
    },
    input: {
        textAlign: 'center',
        minWidth: 250,
        marginRight: 5,
        height: 40,
        fontSize: 26,
        color: colors.mainColor,
    },
    addPlayer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    plus: {
        color: '#fff',
    }
});
