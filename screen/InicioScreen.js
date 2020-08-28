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

//CONSTANTES
import COLOR from '../constant/Colores'
import TEXTO from '../constant/Textos'
import Iconos from '../constant/Iconos';

//IMAGENES
import LOGO from '../assets/Logo.png'
import { TouchableOpacity } from 'react-native-gesture-handler';


class INICIO extends Component {

  componentDidMount() {
    this.props.getanime();
  }

  render() {
    return (
      <View style={{ height: '100%', backgroundColor: COLOR.FONDO }}>
        <StatusBar barStyle="light-content" backgroundColor="white" />
        <View style={styles.statusBar} />

        <View style={{ backgroundColor: '', height: '15%', alignItems: 'center', justifyContent: 'center', paddingLeft: '5%', paddingRight: '5%', width: '100%' }}>
          <Image resizeMode={'contain'} source={LOGO} style={{ width: Iconos.LOGO, height: Iconos.LOGO }} />
        </View>

        <View style={{ height: '10%', backgroundColor: '', justifyContent: 'center', paddingLeft: '4%', paddingRight: '4%' }}>
          <Buscador
            placeholder={'Buscardor'}
          />

        </View>

        <View style={{ paddingLeft: '3.8%', paddingRight: '3.8%', paddingBottom: '2%', height: '70%' }}>
          <View style={{ backgroundColor: 'white', height: '100%', justifyContent: 'center', borderRadius: '15%' }}>

            <FlatList showsVerticalScrollIndicator={false} style={styles.flatlist}
              enableEmptySections={true}
              data={this.props.anime}
              numColumns={2}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => {

                return <View style={{ width: '45%', backgroundColor: 'blue', paddingBottom: '60%', margin: 6, borderRadius: 10 }}>
                  <TouchableOpacity onPress={() => navigation.navigate('Detalles')}>
                    <Text>{item}</Text>
                  </TouchableOpacity>
                </View>
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
    //alignItems: 'center',
    //justifyContent: 'center',
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

    height: '85%',
    width: '100%',

  },


});


const mapStateToProps = state => {
  return {
    anime: state.anime,
    fetching: state.fetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getanime })(INICIO);