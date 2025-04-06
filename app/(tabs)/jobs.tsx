import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { GlobalStyles, colors } from '@/constants/Styles';

export default function JobsScreen() {
  return (
    <View style={[GlobalStyles.container, styles.container]}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Jobs</Text>
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
    color: '#121212',
  },
}); 