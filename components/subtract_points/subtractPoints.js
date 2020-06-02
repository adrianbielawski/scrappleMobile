import React from 'react';
import { StyleSheet, View, FlatList, TextInput } from 'react-native';
import { Formik } from 'formik';
import { Header } from '../globalComponents/header';
import { MyText } from '../globalComponents/myText';
import { Button } from '../globalComponents/button';
import { globalStyles } from '../../styles/globalStyles';
import { colors } from '../../styles/colors';

export const SubtractPoints = ({ players, handleSubtraction }) => {
    const getValues = () => {
        const values = players.map((player, index) => {
            return `player${index}`
        });
        return values
    }

    const subtractPoints = (values) => {
        const newPlayers = players.map((player, index) => {
            if(values[`player${index}`] === undefined) {
                return player
            } else {
                player.score -= values[`player${index}`]
            }
            return player
        })
        
        handleSubtraction(newPlayers)
    }

    return (
        <View>
            <Header></Header>
            <View style={styles.wrapper}>
                <MyText style={styles.title}>Subtract points of unused letters</MyText>
                <Formik
                    style={styles.list}
                    initialValues={getValues}
                    onSubmit={(values) => {
                        subtractPoints(values);
                    }}
                >
                    {(props) => (
                        <View style={styles.player}>
                            <FlatList
                                contentContainerStyle={styles.list}
                                data={players}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({item, index}) => (
                                    <View style={styles.playerWrapper}>
                                        <MyText style={styles.name}>{item.name}</MyText>
                                        <TextInput
                                            style={[globalStyles.input, styles.input]}
                                            onChangeText={props.handleChange(`player${index}`)}
                                            placeholder={'0'}
                                            keyboardType={'numeric'}
                                        />
                                    </View>
                                )}
                            >
                            </FlatList>
                            <Button style={styles.button} onPress={props.handleSubmit}>Continue</Button>
                        </View>                                 
                    )}                    
                </Formik>
            </View>
        </View>
    )    
}

const styles = StyleSheet.create({
    wrapper: {
        width: '98%',
        alignSelf: 'center'
    },
    title: {
        fontSize: 35,
        marginBottom: 30,
        textAlign: 'center'
    },
    list: {
        flex: 0,
    },
    playerWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: 450,
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginVertical: 5,
        backgroundColor: colors.background,
        borderColor: colors.borderLight,
        borderWidth: 1,
        elevation: 2,
    },
    name: {
        flex: 1,
        flexWrap: 'wrap',
        fontSize: 35,
        textAlign: 'center',
        
    },
    input: {
        fontSize: 35,
        color: colors.mainColor,
        width: 70,
        height: 45,
        marginLeft: 10,
        textAlign: 'center'
    },
    button: {
        width: 250,
        marginTop: 20,
        alignSelf: 'center'
    }
});
