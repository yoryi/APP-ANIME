import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import Constants from 'expo-constants';

//CONSTANTES
import COLOR from '../constant/Colores'
import TEXTO from '../constant/Textos'
import ICONOS from '../constant/Iconos';

//COMPONENTES
import Item from '../components/item'
import Atras from '../components/atras'
import Fondo from '../components/fondo'


function Detalles({ route, navigation }) {

  const { imagen } = route.params;
  const { nombre } = route.params;
  const { status } = route.params;
  const { specie } = route.params;
  const { genero } = route.params;

  return (
    <View style={{ height: '100%', backgroundColor: COLOR.FONDO }}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.fondo}>

        <Fondo
          imagen={{ uri: imagen }}
        />

        <Atras
          ruta={() => navigation.navigate('Inicio')}
        />

      </View>

      <View style={styles.items}>
        <Item
          nombre={'Nombre'}
          valor={nombre}
        />

        <Item
          nombre={'Status'}
          valor={status}
        />

        <Item
          nombre={'Species'}
          valor={specie}
        />

        <Item
          nombre={'Genero'}
          valor={genero}
        />

      </View>
    </View >
  );
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

  fondo: {

    backgroundColor: '#3F3356',
    height: '40%',
    borderBottomLeftRadius: 20,
    borderBottomEndRadius: 20

  },

  items: {

    height: '60%',
    padding: '4%',
    paddingTop: '14%'

  },

});
