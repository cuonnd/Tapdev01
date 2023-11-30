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
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const animatedValue = useRef(new Animated.Value(0)).current;
  const check = useRef(false);
  const check2 = useRef(1);

  const {width} = useWindowDimensions();
  const animatedView1 = useRef(new Animated.Value(0)).current;
  console.log(animatedView1);
  // const [addres, setAddres] = useState(check);
  const onPressChange = () => {
    Animated.timing(animatedValue, {
      toValue: check.current ? 0 : 100,
      duration: 1000,
      useNativeDriver: false,
    }).start();
    check.current = !check.current;
  };
  // Khởi tạo biến để xác định hướng tăng/giảm
  let daoChieu = true;

  const onPressChangeView = () => {
    if (daoChieu) {
      if (check2.current < 2) {
        Animated.timing(animatedView1, {
          toValue: -Number(width) * check2.current,
          duration: 1000,
          useNativeDriver: false,
        }).start();
        check2.current = check2.current + 1;
        console.log(check2.current, 'check2.current++');
      } else {
        daoChieu = false;
      }
    }

    if (!daoChieu) {
      if (check2.current > 0) {
        Animated.timing(animatedView1, {
          toValue: -Number(width) * check2.current,
          duration: 1000,
          useNativeDriver: false,
        }).start();
        check2.current = check2.current - 1;
        console.log(check2.current, 'check2.current--');
      } else {
        daoChieu = true;
      }
    }
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
            flexDirection: 'row',
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
                marginLeft: 5,
                transform: [{translateX: animatedValue}],
              }}
            />
          </TouchableNativeFeedback>
          <Text>hello</Text>
        </View>
        <Text>---------------------</Text>
        <View style={{flexDirection: 'row'}}>
          <Animated.View
            style={{
              width: `100%`,
              height: 115,
              backgroundColor: 'red',
              borderColor: 'red',
              borderWidth: 1,
              borderRadius: 20,
              flexDirection: 'row',
              transform: [{translateX: animatedView1}],
            }}
          />
          <Animated.View
            style={{
              // position: 'absolute',
              // top: 0,
              width: `100%`,
              height: 115,
              borderColor: 'blue',
              borderWidth: 1,
              borderRadius: 20,
              flexDirection: 'row',
              transform: [{translateX: animatedView1}],
            }}
          />
          <Animated.View
            style={{
              // position: 'absolute',
              // top: 0,
              width: `100%`,
              height: 115,
              borderColor: 'green',
              borderWidth: 1,
              borderRadius: 20,
              flexDirection: 'row',
              transform: [{translateX: animatedView1}],
            }}
          />
        </View>
        <TouchableOpacity onPress={onPressChangeView}>
          <Text>onpress</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
