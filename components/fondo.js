import React from 'react';
import { Image, TextInput, StyleSheet, ActivityIndicator, View, Text } from 'react-native';
import { Dimensions } from "react-native";

//Dimensiones del dispositivo
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class fondo extends React.Component {

    render() {
        return (
            <View style={{ width: '100%', height: '100%' , borderBottomLeftRadius: 20, borderBottomEndRadius: 20 }}>
                <Image resizeMode={'contain'} source={this.props.imagen} resizeMode={'cover'} style={{ width: '100%', height: '100%', }} />
            </View>
        )
    }
};



