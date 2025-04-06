import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Switch, ScrollView, StyleSheet, Modal, FlatList } from 'react-native';
import { Stack, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { GlobalStyles } from '@/constants/Styles';
import { colors } from '@/constants/Styles';

export default function VehicleInformation() {
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleYear, setVehicleYear] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [hasTrailer, setHasTrailer] = useState(false);
  const [showMakeModal, setShowMakeModal] = useState(false);
  const [errors, setErrors] = useState<{
    make?: string;
    model?: string;
    year?: string;
    licensePlate?: string;
  }>({});

  const vehicleMakes = [
    'Ford', 
    'Chevrolet', 
    'Ram', 
    'Toyota', 
    'GMC', 
    'Nissan', 
    'Freightliner', 
    'International', 
    'Peterbilt', 
    'Kenworth', 
    'Volvo', 
    'Mack'
  ];

  const validate = () => {
    const newErrors: {
      make?: string;
      model?: string;
      year?: string;
      licensePlate?: string;
    } = {};
    
    if (!vehicleMake) {
      newErrors.make = 'Vehicle make is required';
    }
    
    if (!vehicleModel) {
      newErrors.model = 'Vehicle model is required';
    }
    
    if (!vehicleYear) {
      newErrors.year = 'Vehicle year is required';
    } else if (!/^\d{4}$/.test(vehicleYear)) {
      newErrors.year = 'Please enter a valid 4-digit year';
    }
    
    if (!licensePlate) {
      newErrors.licensePlate = 'License plate is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getSelectedMakeLabel = () => {
    return vehicleMake || 'Select vehicle make';
  };

  const handleNext = () => {
    if (validate()) {
      // Navigate to vehicle photos screen
      router.push('/vehicle-photos');
    }
  };

  return (
    <View style={GlobalStyles.container}>
      <StatusBar style="light" />
      
      <ScrollView style={GlobalStyles.scrollContainer} contentContainerStyle={{ paddingBottom: 20 }}>
        <Text style={GlobalStyles.title}>Vehicle Information</Text>
        <Text style={GlobalStyles.subtitle}>Tell us about your vehicle</Text>
        
        <View style={GlobalStyles.inputContainer}>
          <Text style={GlobalStyles.label}>Vehicle Make</Text>
          <TouchableOpacity
            style={[GlobalStyles.input, errors.make && GlobalStyles.inputError, { justifyContent: 'center' }]}
            onPress={() => setShowMakeModal(true)}
          >
            <Text style={{ color: vehicleMake ? colors.text : colors.placeholder }}>
              {getSelectedMakeLabel()}
            </Text>
          </TouchableOpacity>
          {errors.make ? <Text style={GlobalStyles.errorText}>{errors.make}</Text> : null}
        </View>

        <Modal
          visible={showMakeModal}
          animationType="slide"
          transparent={true}
        >
          <View style={{ 
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.7)' 
          }}>
            <View style={{ 
              backgroundColor: colors.card,
              borderRadius: 10,
              padding: 20,
              width: '90%',
              maxHeight: '80%'
            }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 15, textAlign: 'center', color: colors.text }}>
                Select Vehicle Make
              </Text>
              
              <FlatList
                data={vehicleMakes}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={{
                      padding: 15,
                      borderBottomWidth: 1,
                      borderBottomColor: colors.border
                    }}
                    onPress={() => {
                      setVehicleMake(item);
                      setShowMakeModal(false);
                    }}
                  >
                    <Text style={{ 
                      fontSize: 16,
                      color: item === vehicleMake ? colors.primary : colors.text
                    }}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                )}
              />
              
              <TouchableOpacity
                style={{
                  marginTop: 15,
                  padding: 15,
                  backgroundColor: colors.background,
                  borderRadius: 8,
                  alignItems: 'center'
                }}
                onPress={() => setShowMakeModal(false)}
              >
                <Text style={{ fontSize: 16, color: colors.text }}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        
        <View style={GlobalStyles.inputContainer}>
          <Text style={GlobalStyles.label}>Vehicle Model</Text>
          <TextInput
            style={[GlobalStyles.input, errors.model && GlobalStyles.inputError]}
            placeholder="Enter vehicle model"
            placeholderTextColor={colors.placeholder}
            value={vehicleModel}
            onChangeText={setVehicleModel}
          />
          {errors.model ? <Text style={GlobalStyles.errorText}>{errors.model}</Text> : null}
        </View>
        
        <View style={GlobalStyles.inputContainer}>
          <Text style={GlobalStyles.label}>Vehicle Year</Text>
          <TextInput
            style={[GlobalStyles.input, errors.year && GlobalStyles.inputError]}
            placeholder="Enter vehicle year (YYYY)"
            placeholderTextColor={colors.placeholder}
            value={vehicleYear}
            onChangeText={setVehicleYear}
            keyboardType="number-pad"
            maxLength={4}
          />
          {errors.year ? <Text style={GlobalStyles.errorText}>{errors.year}</Text> : null}
        </View>
        
        <View style={GlobalStyles.inputContainer}>
          <Text style={GlobalStyles.label}>License Plate</Text>
          <TextInput
            style={[GlobalStyles.input, errors.licensePlate && GlobalStyles.inputError]}
            placeholder="Enter license plate number"
            placeholderTextColor={colors.placeholder}
            value={licensePlate}
            onChangeText={setLicensePlate}
            autoCapitalize="characters"
          />
          {errors.licensePlate ? <Text style={GlobalStyles.errorText}>{errors.licensePlate}</Text> : null}
        </View>
        
        <View style={[GlobalStyles.inputContainer, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
          <Text style={GlobalStyles.label}>Do you have a trailer?</Text>
          <Switch
            value={hasTrailer}
            onValueChange={setHasTrailer}
            trackColor={{ false: colors.border, true: colors.primary }}
            thumbColor={hasTrailer ? '#ffffff' : '#f4f3f4'}
          />
        </View>
      </ScrollView>

      <TouchableOpacity style={GlobalStyles.primaryButton} onPress={handleNext}>
        <Text style={GlobalStyles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  dropdownButton: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  dropdownPlaceholder: {
    color: '#999',
  },
  dropdownSelectedText: {
    color: '#000',
  },
  dropdownError: {
    borderColor: '#FF3B30',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: 16,
    paddingBottom: 30,
    maxHeight: '70%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    fontSize: 16,
  },
  selectedOptionText: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 15,
    paddingVertical: 12,
    backgroundColor: '#eee',
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 