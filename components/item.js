import React from 'react';
import { Image, TextInput, StyleSheet, ActivityIndicator, View , Text} from 'react-native';
import { Dimensions } from "react-native";

//Dimensiones del dispositivo
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class item extends React.Component {

    render() {
        return (
            <View>
                <Text style={{ fontSize: 20, color: 'white' }}>{this.props.nombre}: {this.props.valor}</Text>
                <View style={{ height: '8%' }} />
            </View>
        )
    }
};



