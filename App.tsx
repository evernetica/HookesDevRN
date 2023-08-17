/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import RegistrationPage from './pages/RegistrationPage';
import DrawerHeader from './components/DrawerHeader';

const Drawer = createDrawerNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.white,
  };
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Registration"
          component={RegistrationPage}
          options={({navigation}) => ({
            header: ({scene, previous}) => (
              <DrawerHeader navigation={navigation} />
            ),
          })}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;
