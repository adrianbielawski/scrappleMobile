import React from 'react';
import { StyleSheet, View, FlatList, TextInput } from 'react-native';
import { Formik } from 'formik';
import { Header } from '../globalComponents/header';
import { MyText } from '../globalComponents/myText';
import { MyTransText } from '../globalComponents/myTransText';
import { Button } from '../globalComponents/button';
import { globalStyles } from '../../styles/globalStyles';
import { colors } from '../../styles/colors';

export const SubtractPoints = ({ players, getPlaces }) => {
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
        
        getPlaces(newPlayers)
    }

    return (
        <View style={styles.wrapper}>
            <Header></Header>
            <MyTransText style={globalStyles.title}>Subtract points of unused letters</MyTransText>
            <Formik
                style={styles.list}
                initialValues={getValues}
                onSubmit={(values) => {
                    subtractPoints(values);
                }}
            >
                {(props) => (
                    <View>
                        <FlatList
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
    )    
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    list: {
        width: '98%',
        alignSelf: 'center'
    },
    playerWrapper: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        width: '98%',
        maxWidth: 450,
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginVertical: 5,
        backgroundColor: colors.offWhite,
        borderColor: colors.borderLight,
        borderWidth: 1,
        elevation: 2,
    },
    name: {
        flex: 1,
        flexWrap: 'wrap',
        fontSize: 25,
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
