import React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { colors } from '@/constants/Styles';

import { UserProfile } from '@/components/Home/UserProfile';
import { BalanceCard } from '@/components/Home/BalanceCard';
import { StatCard } from '@/components/Home/StatCard';
import { VehicleInfo } from '@/components/Home/VehicleInfo';
import { IncomeChart } from '@/components/Home/IncomeChart';

// Mock data for demo purposes
const mockIncomeData = [
  { day: 'Mon', amount: 10 },
  { day: 'Tue', amount: 25 },
  { day: 'Wed', amount: 15 },
  { day: 'Thu', amount: 30 },
  { day: 'Fri', amount: 45 },
  { day: 'Sat', amount: 60 },
  { day: 'Sun', amount: 40 }
];

const mockVehicle = {
  make: 'Ford',
  model: 'F350',
  location: 'UT - FFB400'
};

export default function Home() {
  const handleCashOut = () => {
    // Handle cash out functionality
    console.log('Cash out pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <UserProfile name="Ryan" />
        
        <BalanceCard balance={1245} onCashOut={handleCashOut} />
        
        <View style={styles.statRow}>
          <StatCard
            title="Rating"
            value={4.8}
          />
          
          <StatCard
            title="Drops this week:"
            value={26}
          />
        </View>
        
        <VehicleInfo vehicle={mockVehicle} />
        
        <StatCard
          title="Total earnings this week:"
          value="$264.62"
          width="100%"
        />
        
        <IncomeChart data={mockIncomeData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingTop: 20,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}); 