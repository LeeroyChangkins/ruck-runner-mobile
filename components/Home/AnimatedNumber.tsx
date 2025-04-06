import React, { useEffect, useRef } from 'react';
import { Text, Animated, StyleSheet, TextStyle } from 'react-native';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  formatter?: (value: number) => string;
  style?: TextStyle;
  delay?: number;
  refreshKey?: number;
}

export function AnimatedNumber({
  value,
  duration = 1500,
  formatter = (val) => val.toFixed(0),
  style,
  delay = 0,
  refreshKey = 0,
}: AnimatedNumberProps) {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [displayValue, setDisplayValue] = React.useState('0');

  useEffect(() => {
    // Reset and start animation when value changes or component mounts
    animatedValue.setValue(0);

    Animated.timing(animatedValue, {
      toValue: 1,
      duration,
      useNativeDriver: true,
      delay,
    }).start();

    // Listen to animation value and update display
    const listener = animatedValue.addListener(({ value: animValue }) => {
      const calculated = animValue * value;
      setDisplayValue(formatter(calculated));
    });

    // Clean up listener
    return () => {
      animatedValue.removeListener(listener);
    };
  }, [value, duration, animatedValue, formatter, delay, refreshKey]);

  return (
    <Text style={[styles.text, style]}>
      {displayValue}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
}); 