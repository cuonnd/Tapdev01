// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {useRef, useState} from 'react';
import {
  Text,
  TouchableNativeFeedback,
  View,
  useWindowDimensions,
} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withDelay,
  withDecay,
} from 'react-native-reanimated';
import {TextComponent} from './TextComponent';

export const SwitchAnimation = ({
  onPressChange,
  animatedValue,
  animatedDegView,
}) => {
  const check = useRef(false);

  const {width} = useWindowDimensions();
  const progress = useSharedValue(0);
  const opacity = useSharedValue(0);
  const translateX = useSharedValue(0);
  const duration = 2000;
  const easing = Easing.bezier(0.25, -0.5, 0.25, 1);
  const [isShown, setShown] = useState(false);
  const textHeader = 'Lorem ipsum dolor sit';
  const arrTextHeader = textHeader.split(' ') || [];
  const refs = useRef([]);

  const handlePress = () => {
    // translateX.value = withTiming(check.current ? 0 : width - 130);
    progress.value = withTiming(check.current ? 0 : 1, {duration: 1000});
    check.current = !check.current;
    if (isShown) {
      opacity.value = withDelay(1, withTiming(0, {duration: 2000}));
    } else {
      opacity.value = withDelay(1, withTiming(1, {duration: 2000}));
    }

    setShown(!isShown);

    arrTextHeader.forEach((_, index) => {
      refs.current[index]?.showText();
    });
  };
  const animatedStyle = useAnimatedStyle(() => ({
    left: progress.value * (width - 130),
    transform: [
      {rotate: `${progress.value * 360}deg`},
      {rotateY: `${progress.value * 360}deg`},
      {rotateX: `${progress.value * 360}deg`},

      // {translateX: progress.value * (width - 130)},
    ],
  }));
  const animatedStyle2 = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const progressText = useSharedValue(0);

  const animatedStyle3 = useAnimatedStyle(() => ({
    left: progressText.value * (width - 130),
  }));

  return (
    <View style={{flex: 1, position: 'relative'}}>
      <View style={{position: 'absolute', margin: 15}}>
        <View style={{flexDirection: 'row'}}>
          {arrTextHeader.map((text, index) => (
            <TextComponent
              ref={ref => refs && (refs.current[index] = ref)}
              key={index}
              item={text}
              index={index}
            />
          ))}
        </View>
      </View>
      <TouchableNativeFeedback onPress={handlePress}>
        <View
          style={{
            width: width,
            margin: 10,
            flexDirection: 'row',
          }}>
          <Animated.View
            style={[
              {
                justifyContent: 'center',
                marginVertical: 5,
                alignItems: 'center',
                height: 100,
                width: 100,
                backgroundColor: 'red',
                marginLeft: 5,
                // transform: [
                //  {translateX: translateX},
                //   {rotate: `${deg.value * 360}deg`},
                // ],
              },
              animatedStyle,
            ]}>
            <Animated.Text
              style={{
                color: 'white',
              }}>
              rotate:
            </Animated.Text>
          </Animated.View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};
