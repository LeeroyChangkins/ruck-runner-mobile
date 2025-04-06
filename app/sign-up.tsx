import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import { Stack, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { GlobalStyles } from '@/constants/Styles';

export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  const validate = () => {
    const newErrors: {
      firstName?: string;
      lastName?: string;
      email?: string;
      password?: string;
      confirmPassword?: string;
    } = {};
    
    if (!firstName) newErrors.firstName = 'First name is required';
    if (!lastName) newErrors.lastName = 'Last name is required';
    
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    
    if (!confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    else if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = () => {
    if (validate()) {
      // In a real app, this is where you would register the user
      router.push('/phone-verification');
    }
  };

  return (
    <ScrollView contentContainerStyle={GlobalStyles.scrollContainer}>
      <View style={GlobalStyles.container}>
        <Stack.Screen options={{ title: 'Sign Up', headerBackVisible: true }} />
        <StatusBar style="auto" />
        
        <Text style={GlobalStyles.title}>Create Account</Text>
        
        <View style={GlobalStyles.inputContainer}>
          <Text style={GlobalStyles.label}>First Name</Text>
          <TextInput
            style={[GlobalStyles.input, errors.firstName && GlobalStyles.inputError]}
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
          />
          {errors.firstName && <Text style={GlobalStyles.errorText}>{errors.firstName}</Text>}

          <Text style={GlobalStyles.label}>Last Name</Text>
          <TextInput
            style={[GlobalStyles.input, errors.lastName && GlobalStyles.inputError]}
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
          />
          {errors.lastName && <Text style={GlobalStyles.errorText}>{errors.lastName}</Text>}

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

          <Text style={GlobalStyles.label}>Confirm Password</Text>
          <TextInput
            style={[GlobalStyles.input, errors.confirmPassword && GlobalStyles.inputError]}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
          {errors.confirmPassword && <Text style={GlobalStyles.errorText}>{errors.confirmPassword}</Text>}
        </View>

        <TouchableOpacity style={GlobalStyles.primaryButton} onPress={handleSignUp}>
          <Text style={GlobalStyles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/sign-in')}>
          <Text style={GlobalStyles.linkText}>
            Already have an account? Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
} 