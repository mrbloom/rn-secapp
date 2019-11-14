import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';


import Card from '../components/Card'
import Input from '../components/Input'
import Colors from '../constatnts/color'

export default function StartGameScreen(props) {
    const { title, inputContainer, buttonContainer, button, screen } = styles
    return (
        <View style={screen}>
            <Text style={title}>Start new game</Text>
            <Card style={inputContainer}>

                <Text>Select a number</Text>
                <Input blurOnSubmit={true} autoCapitalize='none' autoCorrect={false} keyboardType="number-pad" maxLength={2} />
                <View style={buttonContainer}>
                    <View style={button}><Button title="Reset" onPress={() => { }} color={Colors.accent} /></View>
                    <View style={button}><Button title="Confirm" onPress={() => { }} color={Colors.primary} /></View>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    button: {
        width: "40%"
    }
});