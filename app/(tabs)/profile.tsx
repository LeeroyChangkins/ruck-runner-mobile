import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';

import { GlobalStyles } from '@/constants/Styles';

export default function ProfileScreen() {
  const handleSignOut = () => {
    router.replace('/sign-in');
  };

  return (
    <View style={[GlobalStyles.container, styles.container]}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Profile</Text>
      
      <TouchableOpacity style={GlobalStyles.dangerButton} onPress={handleSignOut}>
        <Text style={GlobalStyles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
}); 