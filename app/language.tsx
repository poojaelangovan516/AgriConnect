import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function LanguageSelection() {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Languages</Text>
      </View>

      {/* Title */}
      <Text style={styles.chooseText}>Choose Your Language</Text>

      {/* Language Options */}
      <TouchableOpacity
        style={[styles.languageButton, selectedLanguage === 'English' && styles.selectedLanguage]}
        onPress={() => setSelectedLanguage('English')}>
        <Text style={styles.languageText}>English</Text>
        <View style={[styles.radioCircle, selectedLanguage === 'English' && styles.radioSelected]} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.languageButton, selectedLanguage === 'Tamil' && styles.selectedLanguage]}
        onPress={() => setSelectedLanguage('Tamil')}>
        <Text style={styles.languageText}>தமிழ்</Text>
        <View style={[styles.radioCircle, selectedLanguage === 'Tamil' && styles.radioSelected]} />
      </TouchableOpacity>

      {/* Info Text */}
      <Text style={styles.infoText}>
        Your Language Preference Can Be Changed at Any Time in Settings.
      </Text>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton} onPress={() => router.push('./home')}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'green',
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    height: 110,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  chooseText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 30,
  },
  languageButton: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 10,
  },
  selectedLanguage: {
    backgroundColor: '#E6F4EA',
  },
  languageText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  radioCircle: {
    width: 22,
    height: 22,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    backgroundColor: 'green',
    width: 14,
    height: 14,
    borderRadius: 10,
  },
  infoText: {
    textAlign: 'center',
    fontSize: 14,
    color: 'gray',
    marginVertical: 20,
    width: '80%',
  },
  continueButton: {
    backgroundColor: 'green',
    width: '80%',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 20,
  },
  continueText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
