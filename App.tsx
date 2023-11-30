/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Animated,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const animatedValue = useRef(new Animated.Value(0)).current;
  const check = useRef(false);
  // const [addres, setAddres] = useState(check);
  const onPressChange = () => {
    Animated.timing(animatedValue, {
      toValue: check.current ? 0 : 100,
      duration: 1000,
      useNativeDriver: false,
    }).start();
    check.current = !check.current;
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            width: 220,
            height: 115,
            borderColor: 'red',
            borderWidth: 1,
            borderRadius: 20,
            margin: 10,
          }}>
          <TouchableNativeFeedback onPress={onPressChange}>
            <Animated.View
              style={{
                justifyContent: 'center',
                marginVertical: 5,
                alignItems: 'center',
                height: 100,
                width: 100,
                borderRadius: 100 / 2,
                backgroundColor: 'red',
                marginLeft: animatedValue,
              }}
            />
          </TouchableNativeFeedback>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
