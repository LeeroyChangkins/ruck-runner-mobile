import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { colors } from '@/constants/Styles';

interface IncomeData {
  amount: number;
  day: string;
}

interface IncomeChartProps {
  data: IncomeData[];
  title?: string;
  refreshKey?: number;
}

export function IncomeChart({ data, title = 'Daily income', refreshKey = 0 }: IncomeChartProps) {
  const maxValue = Math.max(...data.map(item => item.amount)) || 1;
  // Create an animated value for each bar
  const barAnimations = useRef(data.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    // Animate all bars simultaneously
    const animations = barAnimations.map((anim, index) => {
      // Reset animation when component mounts or data changes
      anim.setValue(0);
      return Animated.timing(anim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false, // Height animations require JS driver
        delay: 300, // Slight delay for better effect
      });
    });

    // Run all animations together
    Animated.parallel(animations).start();
  }, [data, barAnimations, refreshKey]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      
      <View style={styles.chartContainer}>
        {data.map((item, index) => {
          const barHeight = (item.amount / maxValue) * 100;
          const barColor = item.amount > 0 ? '#34C759' : '#FF3B30';
          
          return (
            <View key={index} style={styles.barWrapper}>
              <View style={styles.barContainer}>
                <Animated.View 
                  style={[
                    styles.bar, 
                    { 
                      height: barAnimations[index].interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0%', `${barHeight}%`],
                      }), 
                      backgroundColor: barColor 
                    }
                  ]} 
                />
              </View>
              <Text style={styles.dayLabel}>{item.day}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c1c1e',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 16,
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 100,
  },
  barWrapper: {
    alignItems: 'center',
    flex: 1,
  },
  barContainer: {
    width: 8,
    height: '100%',
    justifyContent: 'flex-end',
  },
  bar: {
    width: '100%',
    borderRadius: 4,
  },
  dayLabel: {
    color: '#AAAAAA',
    fontSize: 10,
    marginTop: 4,
  },
}); 