import { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Stack, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { GlobalStyles } from '@/constants/Styles';

export default function PhoneVerification() {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const validatePhone = () => {
    if (!phone) {
      setError('Phone number is required');
      return false;
    }
    
    // Remove any non-digit characters and check length
    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length !== 10) {
      setError('Please enter exactly 10 digits for your phone number');
      return false;
    }
    
    setError('');
    return true;
  };

  const handlePhoneChange = (text: string) => {
    // Only allow digits, spaces, parentheses, and dashes
    const formattedText = text.replace(/[^\d\s()\-]/g, '');
    setPhone(formattedText);
  };

  const handleSendCode = () => {
    if (validatePhone()) {
      // In a real app, this would send an SMS with a code
      router.push('/code-verification');
    }
  };

  return (
    <View style={GlobalStyles.container}>
      <StatusBar style="light" />
      
      <Text style={GlobalStyles.title}>Verify Your Phone</Text>
      <Text style={GlobalStyles.subtitle}>We'll send a verification code to your phone</Text>
      
      <View style={GlobalStyles.inputContainer}>
        <Text style={GlobalStyles.label}>Cell Phone Number</Text>
        <TextInput
          style={[GlobalStyles.input, error && GlobalStyles.inputError]}
          placeholder="Enter your phone number"
          value={phone}
          onChangeText={handlePhoneChange}
          keyboardType="phone-pad"
          maxLength={14} // Allow for formatting characters
        />
        {error ? <Text style={GlobalStyles.errorText}>{error}</Text> : null}
      </View>

      <TouchableOpacity style={GlobalStyles.primaryButton} onPress={handleSendCode}>
        <Text style={GlobalStyles.buttonText}>Send Confirmation SMS</Text>
      </TouchableOpacity>
    </View>
  );
} 