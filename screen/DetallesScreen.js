import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function DetallesScreen({ navigation }) {

  return (
    <View style={styles.container}>
       <StatusBar barStyle="dark-content" backgroundColor="white" />
       
      <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
      <Text>Inicio!</Text>
      </TouchableOpacity>
     
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
