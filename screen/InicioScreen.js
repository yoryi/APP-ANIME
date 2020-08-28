import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Dimensions, FlatList, Image } from 'react-native';
import Constants from 'expo-constants';

//DIMENSIONES
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//REDUX
import { connect } from 'react-redux';
import { getanime } from '../redux/actions/acciones';

//COMPONENTES
import Buscador from '../components/buscador'
import Carta from '../components/carta'

//CONSTANTES
import COLOR from '../constant/Colores'
import TEXTO from '../constant/Textos'
import Iconos from '../constant/Iconos';

//IMAGENES
import LOGO from '../assets/Logo.png'

class Inicio extends Component {

  componentDidMount() {
    this.props.getanime();
  }

  render() {
    return (
      <View style={{ height: '100%', backgroundColor: COLOR.FONDO }}>
        <StatusBar barStyle="light-content" backgroundColor="white" />
        <View style={styles.statusBar} />

        <View style={styles.logo}>
          <Image resizeMode={'contain'} source={LOGO} style={{ width: Iconos.LOGO, height: Iconos.LOGO }} />
        </View>

        <View style={styles.buscador}>
          <Buscador
            placeholder={'Buscardor'}
          />

        </View>

        <View style={styles.cuerpo}>
          <View style={styles.diseño_cuerpo}>

            <FlatList showsVerticalScrollIndicator={false} style={styles.flatlist}
              enableEmptySections={true}
              data={this.props.anime}
              numColumns={2}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => {

                return <Carta
                  nombre={item.name}
                  imagen={{ uri: item.image }}
                  ruta={() => this.props.navigation.navigate('Detalles',
                    {
                      imagen: item.image,
                      nombre: item.name,
                      status: item.status,
                      specie: item.species,
                      genero: item.gender,
                      
                    })}
                />

              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  statusBar: {
    //backgroundColor: "#6C00DB",
    height: Constants.statusBarHeight,
  },

  row: {
    flex: 1,
    justifyContent: "space-around"
  },

  flatlist: {

    flex: 1,
    height: '85%',
    width: '100%',

  },

  logo: {

    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '5%',
    paddingRight: '5%',
    width: '100%'

  },

  buscador: {

    height: '10%',
    justifyContent: 'flex-start',
    paddingLeft: '4%',
    paddingRight: '4%'

  },

  cuerpo: {

    paddingLeft: '3.8%',
    paddingRight: '3.8%',
    paddingBottom: '2%',
    height: '70%'

  },

  diseño_cuerpo: {
    backgroundColor: 'white',
    height: '100%',
    justifyContent: 'center',
    borderRadius: 14
  }

});


const mapStateToProps = state => {
  return {
    anime: state.anime,
    fetching: state.fetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getanime })(Inicio);