import { useState } from 'react';
import { 
  Text, 
  View, 
  TouchableOpacity, 
  Image, 
  ScrollView,
  TextInput
} from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { GlobalStyles } from '@/constants/Styles';

export default function VehiclePhotos() {
  const [exteriorFrontPhoto, setExteriorFrontPhoto] = useState<string | null>(null);
  const [exteriorSidePhoto, setExteriorSidePhoto] = useState<string | null>(null);
  const [vinPhoto, setVinPhoto] = useState<string | null>(null);
  const [licensePlatePhoto, setLicensePlatePhoto] = useState<string | null>(null);
  const [vinNumber, setVinNumber] = useState('');
  const [errors, setErrors] = useState<{
    exteriorFront?: string;
    exteriorSide?: string;
    vin?: string;
    vinNumber?: string;
    licensePlate?: string;
  }>({});

  const validate = () => {
    const newErrors: {
      exteriorFront?: string;
      exteriorSide?: string;
      vin?: string;
      vinNumber?: string;
      licensePlate?: string;
    } = {};
    
    if (!exteriorFrontPhoto) {
      newErrors.exteriorFront = 'Front exterior photo is required';
    }
    
    if (!exteriorSidePhoto) {
      newErrors.exteriorSide = 'Side exterior photo is required';
    }
    
    if (!vinPhoto) {
      newErrors.vin = 'VIN photo is required';
    }
    
    if (!vinNumber) {
      newErrors.vinNumber = 'VIN number is required';
    } else if (vinNumber.length !== 17) {
      newErrors.vinNumber = 'VIN must be exactly 17 characters';
    }
    
    if (!licensePlatePhoto) {
      newErrors.licensePlate = 'License plate photo is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleUploadExteriorFront = () => {
    // In a real app, this would open the camera/image picker
    setExteriorFrontPhoto('https://placeholder.com/vehicle-front');
    setErrors({...errors, exteriorFront: undefined});
  };

  const handleUploadExteriorSide = () => {
    // In a real app, this would open the camera/image picker
    setExteriorSidePhoto('https://placeholder.com/vehicle-side');
    setErrors({...errors, exteriorSide: undefined});
  };

  const handleUploadVin = () => {
    // In a real app, this would open the camera/image picker
    setVinPhoto('https://placeholder.com/vin');
    setErrors({...errors, vin: undefined});
  };

  const handleUploadLicensePlate = () => {
    // In a real app, this would open the camera/image picker
    setLicensePlatePhoto('https://placeholder.com/license-plate');
    setErrors({...errors, licensePlate: undefined});
  };

  const handleVinChange = (text: string) => {
    // VIN is alphanumeric - uppercase it all
    const upperCaseVin = text.toUpperCase().replace(/[^A-Z0-9]/g, '');
    setVinNumber(upperCaseVin);
    
    if (errors.vinNumber && upperCaseVin.length === 17) {
      setErrors({...errors, vinNumber: undefined});
    }
  };

  const handleNext = () => {
    if (validate()) {
      if (hasTrailer) {
        // Make sure trailer-photos screen is registered in _layout.tsx
        router.push({
          pathname: '/trailer-photos'
        });
      } else {
        // In a real app, this would save the vehicle photos and navigate to the main app
        router.push('/');
      }
    }
  };

  // Check if user has a trailer from previous screen
  const hasTrailer = true; // This would be passed from navigation or stored in state management

  return (
    <View style={GlobalStyles.container}>
      <StatusBar style="light" />
      
      <ScrollView style={GlobalStyles.scrollContainer} contentContainerStyle={{ paddingBottom: 20 }}>
        <Text style={GlobalStyles.title}>Vehicle Photos</Text>
        <Text style={GlobalStyles.subtitle}>Please provide clear photos of your vehicle</Text>
        
        <View style={GlobalStyles.inputContainer}>
          <Text style={GlobalStyles.label}>Front Exterior Photo</Text>
          <View style={[GlobalStyles.photoContainer, errors.exteriorFront && GlobalStyles.inputError]}>
            {exteriorFrontPhoto ? (
              <Image source={{ uri: exteriorFrontPhoto }} style={GlobalStyles.photoPreview} />
            ) : (
              <TouchableOpacity 
                style={GlobalStyles.photoUploadButton} 
                onPress={handleUploadExteriorFront}
              >
                <Text style={GlobalStyles.photoUploadText}>Take Front Photo</Text>
              </TouchableOpacity>
            )}
          </View>
          {errors.exteriorFront ? <Text style={GlobalStyles.errorText}>{errors.exteriorFront}</Text> : null}
        </View>
        
        <View style={GlobalStyles.inputContainer}>
          <Text style={GlobalStyles.label}>Side Exterior Photo</Text>
          <View style={[GlobalStyles.photoContainer, errors.exteriorSide && GlobalStyles.inputError]}>
            {exteriorSidePhoto ? (
              <Image source={{ uri: exteriorSidePhoto }} style={GlobalStyles.photoPreview} />
            ) : (
              <TouchableOpacity 
                style={GlobalStyles.photoUploadButton} 
                onPress={handleUploadExteriorSide}
              >
                <Text style={GlobalStyles.photoUploadText}>Take Side Photo</Text>
              </TouchableOpacity>
            )}
          </View>
          {errors.exteriorSide ? <Text style={GlobalStyles.errorText}>{errors.exteriorSide}</Text> : null}
        </View>
        
        <View style={GlobalStyles.inputContainer}>
          <Text style={GlobalStyles.label}>VIN Number</Text>
          <TextInput
            style={[GlobalStyles.input, errors.vinNumber && GlobalStyles.inputError]}
            placeholder="Enter 17-character VIN"
            value={vinNumber}
            onChangeText={handleVinChange}
            autoCapitalize="characters"
            maxLength={17}
          />
          {errors.vinNumber ? <Text style={GlobalStyles.errorText}>{errors.vinNumber}</Text> : null}
        </View>
        
        <View style={GlobalStyles.inputContainer}>
          <Text style={GlobalStyles.label}>VIN Photo</Text>
          <View style={[GlobalStyles.photoContainer, errors.vin && GlobalStyles.inputError]}>
            {vinPhoto ? (
              <Image source={{ uri: vinPhoto }} style={GlobalStyles.photoPreview} />
            ) : (
              <TouchableOpacity 
                style={GlobalStyles.photoUploadButton} 
                onPress={handleUploadVin}
              >
                <Text style={GlobalStyles.photoUploadText}>Take VIN Photo</Text>
              </TouchableOpacity>
            )}
          </View>
          {errors.vin ? <Text style={GlobalStyles.errorText}>{errors.vin}</Text> : null}
        </View>
        
        <View style={GlobalStyles.inputContainer}>
          <Text style={GlobalStyles.label}>License Plate Photo</Text>
          <View style={[GlobalStyles.photoContainer, errors.licensePlate && GlobalStyles.inputError]}>
            {licensePlatePhoto ? (
              <Image source={{ uri: licensePlatePhoto }} style={GlobalStyles.photoPreview} />
            ) : (
              <TouchableOpacity 
                style={GlobalStyles.photoUploadButton} 
                onPress={handleUploadLicensePlate}
              >
                <Text style={GlobalStyles.photoUploadText}>Take License Plate Photo</Text>
              </TouchableOpacity>
            )}
          </View>
          {errors.licensePlate ? <Text style={GlobalStyles.errorText}>{errors.licensePlate}</Text> : null}
        </View>
      </ScrollView>

      <TouchableOpacity style={GlobalStyles.primaryButton} onPress={handleNext}>
        <Text style={GlobalStyles.buttonText}>{hasTrailer ? 'Continue to Trailer Photos' : 'Complete Registration'}</Text>
      </TouchableOpacity>
    </View>
  );
} 