import React from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import { Dimensions } from "react-native";

//Dimensiones del dispositivo
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//IMAGENES
import LOGO from '../assets/Logo.png'
import Iconos from '../constant/Iconos';

//CONSTANTES
import COLOR from '../constant/Colores'
import TEXTO from '../constant/Textos'
import VISTAS from '../constant/Vistas';

export default class carta extends React.Component {
    render() {
        return (
            <View style={{ width: '45%', marginStart: '3%', marginTop: '4%', borderRadius: 10, }}>
                <View style={{ backgroundColor: '', height: VISTAS.CARTAS, borderRadius: 10, }}>

                    <View style={{ backgroundColor: 'red', height: '72%', borderTopEndRadius: 10, borderTopStartRadius: 10 }}>
                        <Image source={this.props.imagen} resizeMode={'stretch'} style={{ width: '100%', height: '100%', borderTopEndRadius: 10, borderTopStartRadius: 10 }} />
                    </View>

                    <TouchableOpacity onPress={this.props.ruta} style={{ backgroundColor: '#5C485D', height: '30%', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: TEXTO.CARTA, color: 'white' }}>{this.props.nombre}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
};



