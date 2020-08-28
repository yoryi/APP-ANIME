import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import Constants from 'expo-constants';

//CONSTANTES
import COLOR from '../constant/Colores'
import TEXTO from '../constant/Textos'
import ICONOS from '../constant/Iconos';

//COMPONENTES
import Item from '../components/item'

//IMAGEN
import ATRAS from '../assets/atras.png'
import { TouchableOpacity } from 'react-native-gesture-handler';

class Detalles extends Component {

  render() {
    return (
      <View style={{ height: '100%', backgroundColor: COLOR.FONDO }}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <View style={{ backgroundColor: '#3F3356', height: '40%', borderBottomLeftRadius: 20, borderBottomEndRadius: 20 }}>
          <View style={{ width: '100%', height: '20%', justifyContent: 'center', paddingStart: '4%', paddingTop: '10%' }}>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Inicio')}>
              <Image resizeMode={'contain'} source={ATRAS} style={{ width: ICONOS.ATRAS, height: ICONOS.ATRAS }} />
            </TouchableOpacity>

          </View>
        </View>

        <View style={{ backgroundColor: '', height: '60%', padding: '5%' }}>

          <Item
            nombre={'Nombre'}
            valor={'jss'}
          />

          <Item
            nombre={'Status'}
            valor={'jss'}
          />

          <Item
            nombre={'Species'}
            valor={'jss'}
          />

          <Item
            nombre={'Genero'}
            valor={'jss'}
          />

        </View>
      </View >
    );
  }
}

export default Detalles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  statusBar: {
    //backgroundColor: "#6C00DB",
    height: Constants.statusBarHeight,

  },

});
