/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Text,
  ScrollView,
  StatusBar,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  useColorScheme,
  useWindowDimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SwitchAnimation} from '../component/SwitchAnimation';

export const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const animatedValue = useRef(new Animated.Value(0)).current;
  const animatedDegView = useRef(new Animated.Value(0)).current;
  const check = useRef(false);
  const check2 = useRef(1);

  const {width} = useWindowDimensions();
  const animatedView1 = useRef(new Animated.Value(0)).current;
  const onPressChange = () => {
    Animated.timing(animatedValue, {
      toValue: check.current ? 0 : width - 130,
      duration: 1000,
      useNativeDriver: false,
    }).start();
    Animated.timing(animatedDegView, {
      toValue: check.current ? 0 : 180,
      duration: 1000,
      useNativeDriver: false,
    }).start();
    console.log(animatedValue, animatedDegView);
    check.current = !check.current;
  };
  // useEffect(() => {
  //   setInterval(() => {
  //     onPressChangeView();
  //   }, 5000);
  // }, []);
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
      } else {
        daoChieu = true;
        Animated.timing(animatedView1, {
          toValue: -Number(width) * check2.current,
          duration: 1000,
          useNativeDriver: false,
        }).start();
        check2.current = check2.current + 1;
      }
    }
  };
  return (
    <>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <SwitchAnimation
          onPressChange={onPressChange}
          animatedValue={animatedValue}
          animatedDegView={animatedDegView}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <View style={{flexDirection: 'row'}}>
            <Animated.View
              style={{
                width: `100%`,
                height: 115,
                backgroundColor: 'red',
                transform: [{translateX: animatedView1}],
              }}
            />
            <Animated.View
              style={{
                // position: 'absolute',
                // top: 0,
                width: `100%`,
                height: 115,
                backgroundColor: 'yellow',
                transform: [{translateX: animatedView1}],
              }}
            />
            <Animated.View
              style={{
                // position: 'absolute',
                // top: 0,
                width: `100%`,
                height: 115,
                backgroundColor: 'blue',

                flexDirection: 'row',
                transform: [{translateX: animatedView1}],
              }}>
              {/* <Text>em</Text> */}
            </Animated.View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              margin: 10,
              padding: 10,
            }}
            onPress={onPressChangeView}>
            <Text style={{color: 'white', textAlign: 'center'}}>onpress</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
