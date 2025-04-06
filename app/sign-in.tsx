import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Stack, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { GlobalStyles } from '@/constants/Styles';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{email?: string; password?: string}>({});

  const validate = () => {
    const newErrors: {email?: string; password?: string} = {};
    
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    
    if (!password) newErrors.password = 'Password is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignIn = () => {
    if (validate()) {
      // In a real app, this is where you would authenticate the user
      router.replace('/(tabs)');
    }
  };

  return (
    <View style={GlobalStyles.container}>
      <Stack.Screen options={{ title: 'Sign In', headerBackVisible: true }} />
      <StatusBar style="auto" />
      
      <Text style={GlobalStyles.title}>Sign In</Text>
      
      <View style={GlobalStyles.inputContainer}>
        <Text style={GlobalStyles.label}>Email</Text>
        <TextInput
          style={[GlobalStyles.input, errors.email && GlobalStyles.inputError]}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {errors.email && <Text style={GlobalStyles.errorText}>{errors.email}</Text>}

        <Text style={GlobalStyles.label}>Password</Text>
        <TextInput
          style={[GlobalStyles.input, errors.password && GlobalStyles.inputError]}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {errors.password && <Text style={GlobalStyles.errorText}>{errors.password}</Text>}
      </View>

      <TouchableOpacity style={GlobalStyles.primaryButton} onPress={handleSignIn}>
        <Text style={GlobalStyles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/sign-up')}>
        <Text style={GlobalStyles.linkText}>
          Don't have an account? Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
} 