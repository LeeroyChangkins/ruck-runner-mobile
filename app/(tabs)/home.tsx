import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { colors } from '@/constants/Styles';
import { router, useFocusEffect } from 'expo-router';

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
  // Use a refresh key to force animations to restart
  const [refreshKey, setRefreshKey] = useState(0);

  // Use useFocusEffect to detect when the screen comes into focus
  useFocusEffect(
    React.useCallback(() => {
      // Increment the refresh key to trigger animations
      setRefreshKey(prevKey => prevKey + 1);
      
      return () => {
        // Clean up if needed
      };
    }, [])
  );

  const handleCashOut = () => {
    // Handle cash out functionality
    console.log('Cash out pressed');
  };

  const navigateToProfile = () => {
    router.navigate('/(tabs)/profile');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <UserProfile 
          name="Ryan" 
          onPress={navigateToProfile}
        />
        
        <BalanceCard 
          balance={1245} 
          onCashOut={handleCashOut}
          refreshKey={refreshKey}
        />
        
        <View style={styles.statRow}>
          <StatCard
            title="Rating"
            value={4.8}
            delay={300}
            refreshKey={refreshKey}
          />
          
          <StatCard
            title="Drops this week:"
            value={26}
            delay={500}
            refreshKey={refreshKey}
          />
        </View>
        
        <VehicleInfo vehicle={mockVehicle} />
        
        <StatCard
          title="Total earnings this week:"
          value="$264.62"
          width="100%"
          delay={700}
          refreshKey={refreshKey}
        />
        
        <IncomeChart 
          data={mockIncomeData} 
          refreshKey={refreshKey}
        />
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