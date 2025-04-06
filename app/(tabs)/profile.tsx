import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';

import { GlobalStyles, colors } from '@/constants/Styles';

export default function ProfileScreen() {
  const handleSignOut = () => {
    router.replace('/sign-in');
  };

  return (
    <View style={[GlobalStyles.container, styles.container]}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Profile</Text>
      
      <TouchableOpacity style={styles.dangerButton} onPress={handleSignOut}>
        <Text style={GlobalStyles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#121212',
  },
  dangerButton: {
    backgroundColor: colors.danger,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    paddingHorizontal: 20,
  },
}); 