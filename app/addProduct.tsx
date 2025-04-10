import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function AddProduct() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/logo_img.png')}
          style={{ width: 100, height: 100 }}
        />
        <Text style={styles.title}>{t('agriConnect')}</Text>
      </View>

      <Text style={styles.registerText}>{t('addFarmFreshProducts')}</Text>

      <TextInput
        style={styles.input}
        placeholder={t('productName')}
        placeholderTextColor="#555"
      />
      <TextInput
        style={styles.input}
        placeholder={t('category')}
        placeholderTextColor="#555"
      />
      <TextInput
        style={styles.input}
        placeholder={t('quantity')}
        placeholderTextColor="#555"
      />
      <TextInput
        style={styles.description}
        placeholder={t('description')}
        placeholderTextColor="#555"
      />

      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpText}>{t('addProduct')}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  logoContainer: {
    backgroundColor: 'green',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    marginBottom: 40,
    marginTop: -80,
    height: 250,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  registerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 15,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 10,
    marginBottom: 15,
  },
  description: {
    width: '80%',
    padding: 15,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 10,
    marginBottom: 15,
    height: 140,
    textAlignVertical: 'top', 
  },
  signUpButton: {
    backgroundColor: 'green',
    padding: 15,
    width: '80%',
    alignItems: 'center',
    borderRadius: 10,
  },
  signUpText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signInText: {
    marginTop: 20,
    fontSize: 16,
  },
});
