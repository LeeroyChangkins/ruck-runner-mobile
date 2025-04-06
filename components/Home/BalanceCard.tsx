import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '@/constants/Styles';
import { AnimatedNumber } from './AnimatedNumber';

interface BalanceCardProps {
  balance: number;
  onCashOut: () => void;
  refreshKey?: number;
}

export function BalanceCard({ balance, onCashOut, refreshKey }: BalanceCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Balance</Text>
      <View style={styles.balanceContainer}>
      <Text style={styles.balance}>$</Text>
        <AnimatedNumber 
          value={balance} 
          formatter={(val) => val.toFixed(2)}
          style={styles.balance}
          refreshKey={refreshKey}
        />
        
      </View>
      <TouchableOpacity 
        style={styles.button}
        onPress={onCashOut}
      >
        <Text style={styles.buttonText}>Cash out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: colors.secondary,
    marginBottom: 4,
  },
  balanceContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  balance: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.secondary,
  },
  button: {
    backgroundColor: colors.secondary,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
}); 