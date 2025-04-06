import { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Stack, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { GlobalStyles } from '@/constants/Styles';

export default function DriverIdentification() {
  const [licensePhoto, setLicensePhoto] = useState<string | null>(null);
  const [insurancePhoto, setInsurancePhoto] = useState<string | null>(null);
  const [errors, setErrors] = useState<{license?: string, insurance?: string}>({});

  const validate = () => {
    const newErrors: {license?: string, insurance?: string} = {};
    
    if (!licensePhoto) {
      newErrors.license = 'Driver license photo is required';
    }
    
    if (!insurancePhoto) {
      newErrors.insurance = 'Insurance card photo is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleUploadLicense = () => {
    // In a real app, this would open the camera/image picker
    setLicensePhoto('https://placeholder.com/license');
    setErrors({...errors, license: undefined});
  };

  const handleUploadInsurance = () => {
    // In a real app, this would open the camera/image picker
    setInsurancePhoto('https://placeholder.com/insurance');
    setErrors({...errors, insurance: undefined});
  };

  const handleNext = () => {
    if (validate()) {
      router.push('/vehicle-information');
    }
  };

  return (
    <View style={GlobalStyles.container}>
      <StatusBar style="light" />
      
      <Text style={GlobalStyles.title}>Driver Identification</Text>
      <Text style={GlobalStyles.subtitle}>Please provide your driver documents</Text>
      
      <View style={GlobalStyles.inputContainer}>
        <Text style={GlobalStyles.label}>Driver's License</Text>
        <View style={[GlobalStyles.photoContainer, errors.license && GlobalStyles.inputError]}>
          {licensePhoto ? (
            <Image source={{ uri: licensePhoto }} style={GlobalStyles.photoPreview} />
          ) : (
            <TouchableOpacity 
              style={GlobalStyles.photoUploadButton} 
              onPress={handleUploadLicense}
            >
              <Text style={GlobalStyles.photoUploadText}>Upload License Photo</Text>
            </TouchableOpacity>
          )}
        </View>
        {errors.license ? <Text style={GlobalStyles.errorText}>{errors.license}</Text> : null}
      </View>
      
      <View style={GlobalStyles.inputContainer}>
        <Text style={GlobalStyles.label}>Insurance Card</Text>
        <View style={[GlobalStyles.photoContainer, errors.insurance && GlobalStyles.inputError]}>
          {insurancePhoto ? (
            <Image source={{ uri: insurancePhoto }} style={GlobalStyles.photoPreview} />
          ) : (
            <TouchableOpacity 
              style={GlobalStyles.photoUploadButton} 
              onPress={handleUploadInsurance}
            >
              <Text style={GlobalStyles.photoUploadText}>Upload Insurance Photo</Text>
            </TouchableOpacity>
          )}
        </View>
        {errors.insurance ? <Text style={GlobalStyles.errorText}>{errors.insurance}</Text> : null}
      </View>

      <TouchableOpacity style={GlobalStyles.primaryButton} onPress={handleNext}>
        <Text style={GlobalStyles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
} 