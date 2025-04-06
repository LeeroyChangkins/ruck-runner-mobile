import { useEffect } from 'react';
import { Stack, router } from 'expo-router';

export default function Index() {
  useEffect(() => {
    // Redirect to the phone verification screen for now
    router.replace('/phone-verification');
  }, []);

  return null;
} 