import {View, Text} from 'react-native';
import React, {forwardRef, useEffect, useImperativeHandle} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

export const TextComponent = forwardRef(({item, index}: any, ref) => {
  const progress = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(
    () => ({
      opacity: progress.value,
    }),
    [],
  );

  const showText = () => {
    progress.value = withDelay(index * 500, withTiming(1, {duration: 500}));
  };

  useImperativeHandle(ref, () => ({showText}));

  //   useEffect(() => {
  //   }, [index, progress]);

  return (
    <Animated.Text
      style={[
        {
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
          marginRight: 5,
        },
        animatedStyle,
      ]}>
      {item}
    </Animated.Text>
  );
});
