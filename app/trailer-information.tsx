import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, ScrollView, Modal, FlatList } from 'react-native';
import { Stack, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { GlobalStyles } from '@/constants/Styles';
import { colors } from '@/constants/Styles';

export default function TrailerInformation() {
  const [trailerType, setTrailerType] = useState('');
  const [trailerLength, setTrailerLength] = useState('');
  const [numAxles, setNumAxles] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [showTypeModal, setShowTypeModal] = useState(false);
  const [showLengthModal, setShowLengthModal] = useState(false);
  const [showAxlesModal, setShowAxlesModal] = useState(false);
  const [errors, setErrors] = useState<{
    trailerType?: string;
    trailerLength?: string;
    numberOfAxles?: string;
    licensePlate?: string;
  }>({});

  const trailerTypes = [
    'Flatbed',
    'Enclosed',
    'Refrigerated',
    'Lowboy',
    'Step Deck',
    'Double Drop',
    'Car Hauler',
    'Dump',
    'Tank',
    'Livestock',
    'Other'
  ];

  const trailerLengths = [
    '5 feet',
    '8 feet',
    '10 feet',
    '12 feet',
    '14 feet',
    '16 feet',
    '20 feet',
    '24 feet',
    '28 feet',
    '32 feet',
    '36 feet',
    '40+ feet'
  ];

  const axlesOptions = ['1', '2', '3', '4'];

  const getSelectedTrailerTypeLabel = () => {
    return trailerType || 'Select trailer type';
  };

  const getSelectedLengthLabel = () => {
    return trailerLength || 'Select trailer length';
  };

  const getSelectedAxlesLabel = () => {
    return numAxles || 'Select number of axles';
  };

  const validate = () => {
    const newErrors: {
      trailerType?: string;
      trailerLength?: string;
      numberOfAxles?: string;
      licensePlate?: string;
    } = {};
    
    if (!trailerType) {
      newErrors.trailerType = 'Trailer type is required';
    }
    
    if (!trailerLength) {
      newErrors.trailerLength = 'Trailer length is required';
    }
    
    if (!numAxles) {
      newErrors.numberOfAxles = 'Number of axles is required';
    }
    
    if (!licensePlate) {
      newErrors.licensePlate = 'License plate is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleComplete = () => {
    if (validate()) {
      // In a real app, this would save the trailer information
      router.push('/');
    }
  };

  return (
    <ScrollView contentContainerStyle={GlobalStyles.scrollContainer}>
      <View style={GlobalStyles.container}>
        <Stack.Screen 
          options={{ 
            title: 'Trailer Information',
            headerBackVisible: false,
            gestureEnabled: false
          }} 
        />
        <StatusBar style="auto" />
        
        <Text style={GlobalStyles.title}>Trailer Information</Text>
        <Text style={GlobalStyles.subtitle}>Tell us about your trailer</Text>
        
        <View style={GlobalStyles.inputContainer}>
          <Text style={GlobalStyles.label}>Trailer Type</Text>
          <TouchableOpacity
            style={[GlobalStyles.input, errors.trailerType && GlobalStyles.inputError, { justifyContent: 'center' }]}
            onPress={() => setShowTypeModal(true)}
          >
            <Text style={{ color: trailerType ? '#000000' : '#999999' }}>
              {getSelectedTrailerTypeLabel()}
            </Text>
          </TouchableOpacity>
          {errors.trailerType && <Text style={GlobalStyles.errorText}>{errors.trailerType}</Text>}
        </View>

        <Modal
          visible={showTypeModal}
          animationType="slide"
          transparent={true}
        >
          <View style={{ 
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)' 
          }}>
            <View style={{ 
              backgroundColor: 'white',
              borderRadius: 10,
              padding: 20,
              width: '90%',
              maxHeight: '80%'
            }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 15, textAlign: 'center' }}>
                Select Trailer Type
              </Text>
              
              <FlatList
                data={trailerTypes}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={{
                      padding: 15,
                      borderBottomWidth: 1,
                      borderBottomColor: '#EEEEEE'
                    }}
                    onPress={() => {
                      setTrailerType(item);
                      setShowTypeModal(false);
                    }}
                  >
                    <Text style={{ 
                      fontSize: 16,
                      color: item === trailerType ? '#007AFF' : '#000000'
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
                  backgroundColor: '#EEEEEE',
                  borderRadius: 8,
                  alignItems: 'center'
                }}
                onPress={() => setShowTypeModal(false)}
              >
                <Text style={{ fontSize: 16 }}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        
        <View style={GlobalStyles.inputContainer}>
          <Text style={GlobalStyles.label}>Trailer Length</Text>
          <TouchableOpacity
            style={[GlobalStyles.input, errors.trailerLength && GlobalStyles.inputError, { justifyContent: 'center' }]}
            onPress={() => setShowLengthModal(true)}
          >
            <Text style={{ color: trailerLength ? '#000000' : '#999999' }}>
              {getSelectedLengthLabel()}
            </Text>
          </TouchableOpacity>
          {errors.trailerLength && <Text style={GlobalStyles.errorText}>{errors.trailerLength}</Text>}
        </View>

        <Modal
          visible={showLengthModal}
          animationType="slide"
          transparent={true}
        >
          <View style={{ 
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)' 
          }}>
            <View style={{ 
              backgroundColor: 'white',
              borderRadius: 10,
              padding: 20,
              width: '90%',
              maxHeight: '80%'
            }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 15, textAlign: 'center' }}>
                Select Trailer Length
              </Text>
              
              <FlatList
                data={trailerLengths}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={{
                      padding: 15,
                      borderBottomWidth: 1,
                      borderBottomColor: '#EEEEEE'
                    }}
                    onPress={() => {
                      setTrailerLength(item);
                      setShowLengthModal(false);
                    }}
                  >
                    <Text style={{ 
                      fontSize: 16,
                      color: item === trailerLength ? '#007AFF' : '#000000'
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
                  backgroundColor: '#EEEEEE',
                  borderRadius: 8,
                  alignItems: 'center'
                }}
                onPress={() => setShowLengthModal(false)}
              >
                <Text style={{ fontSize: 16 }}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        
        <View style={GlobalStyles.inputContainer}>
          <Text style={GlobalStyles.label}>Number of Axles</Text>
          <TouchableOpacity
            style={[GlobalStyles.input, errors.numberOfAxles && GlobalStyles.inputError, { justifyContent: 'center' }]}
            onPress={() => setShowAxlesModal(true)}
          >
            <Text style={{ color: numAxles ? '#000000' : '#999999' }}>
              {getSelectedAxlesLabel()}
            </Text>
          </TouchableOpacity>
          {errors.numberOfAxles && <Text style={GlobalStyles.errorText}>{errors.numberOfAxles}</Text>}
        </View>

        <Modal
          visible={showAxlesModal}
          animationType="slide"
          transparent={true}
        >
          <View style={{ 
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)' 
          }}>
            <View style={{ 
              backgroundColor: 'white',
              borderRadius: 10,
              padding: 20,
              width: '90%',
              maxHeight: '80%'
            }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 15, textAlign: 'center' }}>
                Select Number of Axles
              </Text>
              
              <FlatList
                data={axlesOptions}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={{
                      padding: 15,
                      borderBottomWidth: 1,
                      borderBottomColor: '#EEEEEE'
                    }}
                    onPress={() => {
                      setNumAxles(item);
                      setShowAxlesModal(false);
                    }}
                  >
                    <Text style={{ 
                      fontSize: 16,
                      color: item === numAxles ? '#007AFF' : '#000000'
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
                  backgroundColor: '#EEEEEE',
                  borderRadius: 8,
                  alignItems: 'center'
                }}
                onPress={() => setShowAxlesModal(false)}
              >
                <Text style={{ fontSize: 16 }}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Text style={GlobalStyles.label}>Trailer License Plate</Text>
        <TextInput
          style={[GlobalStyles.input, errors.licensePlate && GlobalStyles.inputError]}
          placeholder="License Plate"
          value={licensePlate}
          onChangeText={setLicensePlate}
          autoCapitalize="characters"
        />
        {errors.licensePlate && <Text style={GlobalStyles.errorText}>{errors.licensePlate}</Text>}
      </View>

      <TouchableOpacity style={GlobalStyles.primaryButton} onPress={handleComplete}>
        <Text style={GlobalStyles.buttonText}>Complete Registration</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
  pickerError: {
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