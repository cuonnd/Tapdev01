/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useRef, useState} from 'react';
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
  ImageBackground,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SwitchAnimation} from '../component/SwitchAnimation';
import {Screen} from 'react-native-screens';

const mocData = [
  {
    id: 1,
    name: 'Nhân viên 1',
    img: 'https://i.pravatar.cc/300?img=1',
  },
  {
    id: 2,
    name: 'Nhân viên 2',
    img: 'https://i.pravatar.cc/300?img=2',
  },
  {
    id: 3,
    name: 'Nhân viên 3',
    img: 'https://i.pravatar.cc/300?img=3',
  },
];

export const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  // const animatedValue = useRef(new Animated.Value(0)).current;
  // const animatedDegView = useRef(new Animated.Value(0)).current;
  // const check = useRef(false);
  const check2 = useRef(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const {width} = useWindowDimensions();
  const animatedView1 = useRef(new Animated.Value(0)).current;
  const animatedText = useRef(new Animated.Value(0)).current;
  // const animatedView3 = useRef(new Animated.Value(0)).current;

  // const onPressChange = () => {
  //   Animated.timing(animatedValue, {
  //     toValue: check.current ? 0 : width - 130,
  //     duration: 1000,
  //     useNativeDriver: false,
  //   }).start();
  //   Animated.timing(animatedDegView, {
  //     toValue: check.current ? 0 : 180,
  //     duration: 1000,
  //     useNativeDriver: false,
  //   }).start();
  //   console.log(animatedValue, animatedDegView);
  //   check.current = !check.current;
  // };
  useEffect(() => {
    const interval = setInterval(() => {
      onPressChangeView();
    }, 5000);

    return () => clearInterval(interval);
  }, []);
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
  const onPressChangeText = () => {
    Animated.timing(animatedText, {
      toValue: 1000,
      duration: 2000,
      useNativeDriver: false,
    });
  };
  return (
    <>
      <SafeAreaView style={backgroundStyle}>
        <SwitchAnimation />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <ScrollView horizontal>
            {mocData?.map((item, index) => (
              <Animated.View
                key={index}
                style={{
                  width: width,
                  height: 250,
                  backgroundColor: 'red',
                  transform: [{translateX: animatedView1}],
                }}>
                <ImageBackground
                  source={{uri: item?.img}}
                  style={{
                    width: width,
                    height: '100%',
                  }}>
                  <Animated.Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 20,
                      transform: [{translateX: animatedText}],
                    }}>
                    {item?.name}
                  </Animated.Text>
                </ImageBackground>
              </Animated.View>
            ))}
            {/* <Animated.View
              style={{
                // position: 'absolute',
                // top: 0,
                width: `100%`,
                height: 115,
                backgroundColor: 'blue',

                flexDirection: 'row',
                transform: [{translateX: animatedView1}],
              }}>
            </Animated.View> */}
          </ScrollView>
          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              margin: 10,
              padding: 10,
            }}
            onPress={onPressChangeText}>
            <Text style={{color: 'white', textAlign: 'center'}}>onpress</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
