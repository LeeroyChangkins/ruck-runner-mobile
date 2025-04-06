import { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Redirect, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { colors } from '@/constants/Styles';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isRegistered, setIsRegistered] = useState(false);
  
  useEffect(() => {
    // In a real app, this would check authentication status
    // For now, we'll simulate a delay to ensure the root layout is mounted
    const checkRegistration = async () => {
      try {
        // Adding a small delay to ensure the root layout is mounted
        await new Promise(resolve => setTimeout(resolve, 100));
        setIsLoading(false);
        // Don't use router.replace here - we'll use Redirect component instead
      } catch (error) {
        console.error("Error checking registration:", error);
        setIsLoading(false);
      }
    };
    
    checkRegistration();
  }, []);

  // If not loading anymore, redirect to the appropriate screen
  if (!isLoading) {
    return <Redirect href="/(tabs)/home" />;
  }

  // This shows a loading screen while checking status
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.lightText,
    fontSize: 18,
  }
}); 