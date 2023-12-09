/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './src/screen/HomeScreem';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from './src/component/Tabar';
type RootStackParamList = {
  Home: undefined;
  Feed: undefined;
  Profile: undefined;
  Settings: undefined;
};
function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  const BottomTab = createBottomTabNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <BottomTab.Navigator tabBar={props => <TabBar {...props} />}>
        <BottomTab.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeScreen}
        />
        <BottomTab.Screen
          options={{headerShown: false}}
          name="Profile"
          component={HomeScreen}
        />
        <BottomTab.Screen
          options={{headerShown: false}}
          name="Settings"
          component={HomeScreen}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

export default App;
