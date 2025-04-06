import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors } from '@/constants/Styles';
import { AnimatedNumber } from './AnimatedNumber';

interface StatCardProps {
  title: string;
  value: string | number;
  backgroundColor?: string;
  textColor?: string;
  width?: number | string;
  delay?: number;
  refreshKey?: number;
}

export function StatCard({ 
  title, 
  value, 
  backgroundColor = '#1c1c1e', 
  textColor = '#FFFFFF',
  width = '48%',
  delay = 200,
  refreshKey,
}: StatCardProps) {
  const isNumeric = typeof value === 'number';
  const isFormattedNumber = typeof value === 'string' && value.startsWith('$');
  
  // Extract numeric value if it's a formatted string like "$264.62"
  const numericValue = isFormattedNumber 
    ? parseFloat(value.replace('$', '')) 
    : (isNumeric ? value : 0);
  
  const valueStyle: TextStyle = {
    ...styles.value,
    color: textColor,
  };
  
  return (
    <View style={[
      styles.container, 
      { 
        backgroundColor,
        width: width as ViewStyle['width']
      }
    ]}>
      <Text style={[styles.title, { color: textColor }]}>{title}</Text>
      
      {isNumeric ? (
        <AnimatedNumber 
          value={numericValue as number}
          formatter={(val) => val.toFixed(1)}
          style={valueStyle}
          delay={delay}
          refreshKey={refreshKey}
        />
      ) : isFormattedNumber ? (
        <View style={styles.rowContainer}>
          <Text style={valueStyle}>$</Text>
          <AnimatedNumber 
            value={numericValue as number}
            formatter={(val) => val.toFixed(2)}
            style={valueStyle}
            delay={delay}
            refreshKey={refreshKey}
          />
        </View>
      ) : (
        <Text style={[styles.value, { color: textColor }]}>{value}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 14,
    marginBottom: 4,
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
  },
}); 