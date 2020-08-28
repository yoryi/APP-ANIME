import React from 'react';
import { Image, TextInput, StyleSheet, View } from 'react-native';
import { Dimensions } from "react-native";

//Dimensiones del dispositivo
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//CONSTANTES
import COLOR from '../constant/Colores'
import TEXTO from '../constant/Textos'
import Iconos from '../constant/Iconos';

//IMAGENES
import LUPA from '../assets/lupa.png'
import BORRAR from '../assets/borrar.png'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class input extends React.Component {

    render() {
        return (
            <View style={{ width: '100%', backgroundColor: '', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ position: 'absolute', backgroundColor: '#3F3356', width: '100%', height: '100%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', borderRadius: 10, paddingRight: '5%', paddingLeft: '5%' }}>

                    <Image resizeMode={'contain'} source={LUPA} style={{ width: Iconos.LUPA, height: Iconos.LUPA }} />

                    <TouchableOpacity>
                        <Image resizeMode={'contain'} source={BORRAR} style={{ width: Iconos.LUPA, height: Iconos.LUPA }} />
                    </TouchableOpacity>

                </View>
                <TextInput
                    style={{
                        width: '70%',
                        height: '70%',
                        paddingLeft: 2,
                        borderRadius: 10,
                        fontSize: 18,
                        paddingHorizontal: '5%'
                    }}
                    placeholder={this.props.placeholder}
                    placeholderTextColor={'white'}
                    onChangeText={this.props.onChangeText}
                    value={this.props.value}
                    keyboardType={this.props.type}
                />
            </View>
        )
    }
};



