import React from 'react';
import { Image, TextInput, TouchableOpacity, View, Text } from 'react-native';
import { Dimensions } from "react-native";

//IMAGEN
import ATRAS from '../assets/atras.png'

//CONSTANTES
import COLOR from '../constant/Colores'
import TEXTO from '../constant/Textos'
import ICONOS from '../constant/Iconos'

//Dimensiones del dispositivo
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class atras extends React.Component {
    render() {
        return (
            <View style={{ width: '100%', height: '20%', justifyContent: 'center', paddingStart: '3%', paddingTop: '15%', position: 'absolute', backgroundColor: '' }}>
                <TouchableOpacity style={{width: '15%', backgroundColor: '#5C485D', height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 10}} onPress={this.props.ruta}>
                    <Image resizeMode={'contain'} source={ATRAS} style={{ width: ICONOS.ATRAS, height: ICONOS.ATRAS }} />
                </TouchableOpacity>
            </View>
        )
    }
};



