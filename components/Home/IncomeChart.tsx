import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '@/constants/Styles';

interface IncomeData {
  amount: number;
  day: string;
}

interface IncomeChartProps {
  data: IncomeData[];
  title?: string;
}

export function IncomeChart({ data, title = 'Daily income' }: IncomeChartProps) {
  const maxValue = Math.max(...data.map(item => item.amount)) || 1;

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
                <View 
                  style={[
                    styles.bar, 
                    { 
                      height: `${barHeight}%`, 
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