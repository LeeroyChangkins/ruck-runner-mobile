import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '@/constants/Styles';

interface StatCardProps {
  title: string;
  value: string | number;
  backgroundColor?: string;
  textColor?: string;
  width?: number | string;
}

export function StatCard({ 
  title, 
  value, 
  backgroundColor = '#1c1c1e', 
  textColor = '#FFFFFF',
  width = '48%'
}: StatCardProps) {
  return (
    <View style={[
      styles.container, 
      { 
        backgroundColor,
        width: width as ViewStyle['width']
      }
    ]}>
      <Text style={[styles.title, { color: textColor }]}>{title}</Text>
      <Text style={[styles.value, { color: textColor }]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
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