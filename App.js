import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';

export default function App() {
  return (
    <>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <View style={styles.container}>
        <CategoriesScreen />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#24180F',
    paddingTop: 20,
  },
});
