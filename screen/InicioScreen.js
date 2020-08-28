import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import Constants from 'expo-constants';

//DIMENSIONES
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//REDUX
import { connect } from 'react-redux';
import { getanime } from '../redux/actions/acciones';

//COMPONENTES
import Buscador from '../components/buscador'

class App extends Component {
  componentDidMount() {
    this.props.getanime();
  }

  render() {
    return (
      <View style={{ height: '100%', backgroundColor: 'orange' }}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <View style={{ backgroundColor: '', height: '20%', justifyContent: 'center', paddingLeft: '5%', paddingRight: '5%', }}>

          <Buscador
            placeholder={'Buscardor'}
          />
         </View>

        <View style={{ paddingLeft: '2.5%', paddingRight: '2.5%', paddingBottom: '2.5%', height: '80%' }}>
          <View style={{ backgroundColor: 'white', height: '100%', justifyContent: 'center', borderRadius: '15%' }}>

            <FlatList>

            </FlatList>

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

});


const mapStateToProps = state => {
  return {
    anime: state.anime,
    fetching: state.fetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getanime })(App);