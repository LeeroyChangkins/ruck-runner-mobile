import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '@/constants/Styles';
import { IconSymbol } from '@/components/ui/IconSymbol';

interface VehicleInfoProps {
  vehicle: {
    make: string;
    model: string;
    location: string;
  };
}

export function VehicleInfo({ vehicle }: VehicleInfoProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your car</Text>
      <View style={styles.infoContainer}>
        <IconSymbol name="car.fill" size={24} color="#FFFFFF" />
        <Text style={styles.vehicleText}>
          {vehicle.make} {vehicle.model}, {vehicle.location}
        </Text>
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
    marginBottom: 8,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vehicleText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginLeft: 10,
  },
}); 