import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="MealsCategories">
            <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
            {console.log('Stack Screen')}
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24180F',
    paddingTop: 20,
  },
});
