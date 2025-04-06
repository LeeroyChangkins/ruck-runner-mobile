import { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Stack, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { GlobalStyles } from '@/constants/Styles';
import { colors } from '@/constants/Styles';

export default function CodeVerification() {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const validateCode = () => {
    if (!code) {
      setError('Verification code is required');
      return false;
    }
    
    if (!/^\d{6}$/.test(code)) {
      setError('Please enter a valid 6-digit code');
      return false;
    }
    
    setError('');
    return true;
  };

  const handleVerify = () => {
    if (validateCode()) {
      // In a real app, this would validate the code with an API
      router.push('/driver-identification');
    }
  };

  return (
    <View style={GlobalStyles.container}>
      <StatusBar style="light" />
      
      <Text style={GlobalStyles.title}>Enter Verification Code</Text>
      <Text style={GlobalStyles.subtitle}>Enter the 6-digit code sent to your phone</Text>
      
      <View style={GlobalStyles.inputContainer}>
        <Text style={GlobalStyles.label}>Verification Code</Text>
        <TextInput
          style={[GlobalStyles.input, error && GlobalStyles.inputError]}
          placeholder="Enter 6-digit code"
          placeholderTextColor={colors.placeholder}
          value={code}
          onChangeText={setCode}
          keyboardType="number-pad"
          maxLength={6}
        />
        {error ? <Text style={GlobalStyles.errorText}>{error}</Text> : null}
      </View>

      <TouchableOpacity style={GlobalStyles.primaryButton} onPress={handleVerify}>
        <Text style={GlobalStyles.buttonText}>Verify Code</Text>
      </TouchableOpacity>
    </View>
  );
} 