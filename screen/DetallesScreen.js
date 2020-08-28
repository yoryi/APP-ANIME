import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';


export default function DetallesScreen({ navigation }) {

  return (
    <View style={styles.container}>
       <StatusBar barStyle="dark-content" backgroundColor="white" />
       
     
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
