import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function LanguageScreen() {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language === 'ta' ? 'Tamil' : 'English');

  const handleLanguageChange = (language: 'Tamil' | 'English') => {
    const selectedLangCode = language === 'Tamil' ? 'ta' : 'en';
    i18n.changeLanguage(selectedLangCode);
  };

  // ✅ Listen to language change
  useEffect(() => {
    const currentLang = i18n.language === 'ta' ? 'Tamil' : 'English';
    setSelectedLanguage(currentLang);
  }, [i18n.language]);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{t('settings')}</Text>

      <Text style={styles.chooseText}>{t('chooseLanguage')}</Text>

      <TouchableOpacity
        style={[styles.languageButton, selectedLanguage === 'English' && styles.selectedLanguage]}
        onPress={() => handleLanguageChange('English')}>
        <Text style={styles.languageText}>English</Text>
        <View style={[styles.radioCircle, selectedLanguage === 'English' && styles.radioSelected]} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.languageButton, selectedLanguage === 'Tamil' && styles.selectedLanguage]}
        onPress={() => handleLanguageChange('Tamil')}>
        <Text style={styles.languageText}>தமிழ்</Text>
        <View style={[styles.radioCircle, selectedLanguage === 'Tamil' && styles.radioSelected]} />
      </TouchableOpacity>

      <Text style={styles.infoText}>{t('languageInfo')}</Text>

      <TouchableOpacity style={styles.continueButton} onPress={() => router.push('./homePage')}>
        <Text style={styles.continueText}>{t('continue')}</Text>
      </TouchableOpacity>
    </View>
  );
}

// (your styles here remain same)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  chooseText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    justifyContent: 'space-between',
  },
  selectedLanguage: {
    borderColor: '#007bff',
    backgroundColor: '#e6f0ff',
  },
  languageText: {
    fontSize: 16,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#007bff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    backgroundColor: '#007bff',
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    marginTop: 20,
    textAlign: 'center',
  },
  continueButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    marginTop: 30,
  },
  continueText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
