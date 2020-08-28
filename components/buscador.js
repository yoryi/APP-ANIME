import React from 'react';
import { Image, TextInput, StyleSheet, ActivityIndicator, View } from 'react-native';
import { Dimensions } from "react-native";

//Dimensiones del dispositivo
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class input extends React.Component {

    render() {
        return (
            <View>
                <TextInput
                    style={{
                        width: '100%',
                        height: '60%',
                        paddingLeft: 15,
                        borderRadius: '10%',
                        fontSize: 20,
                        backgroundColor: 'white',
                        paddingRight: this.props.espacio,
                    }}
                    placeholder={this.props.placeholder}
                    placeholderTextColor={'blue'}
                    onChangeText={this.props.onChangeText}
                    value={this.props.value}
                    keyboardType={this.props.type}
                />
            </View>
        )
    }
};



