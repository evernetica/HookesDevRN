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
import {createStackNavigator} from '@react-navigation/stack';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import RegistrationPage from './pages/Registration/RegistrationPage';
import Tutorial from './pages/Tutorial/Tutorial';
import DrawerHeader from './components/combinedComponents/DrawerHeader';
import {StyledSafeArea} from './components/simpleComponents/StyledSafeArea';
import CreateAnAccountPage from './pages/CreateAnAccount/CreateAnAccountPage';
import { CommonDrawerHeader } from "./components/combinedComponents/CommonDrawerHeader";

const Stack = createStackNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.white,
  };
  return (
    <StyledSafeArea>
      <NavigationContainer>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Stack.Navigator initialRouteName="Tutorial">
          <Stack.Screen
            name="Registration"
            component={RegistrationPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Tutorial"
            component={Tutorial}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CreateAnAccount"
            component={CreateAnAccountPage}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StyledSafeArea>
  );
}

export default App;
