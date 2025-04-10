import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

const ChangePasswordScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const { t } = useTranslation(); // Initialize translation

  const handleSend = () => {
    if (email.trim() === '') {
      Alert.alert(t('error'), t('email_required'));
      return;
    }
    router.push('./mailotp');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>{'<'} {t('back')}</Text>
      </TouchableOpacity>

      <Image source={require('../assets/images/confirm.png')} style={styles.lockIcon} />

      <Text style={styles.title}>{t('change_password')}</Text>
      <Text style={styles.subtitle}>{t('enter_email')}</Text>

      <TextInput
        style={styles.input}
        placeholder={t('email')}
        placeholderTextColor="#777"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      {/* Navigation to the phone number entry screen */}
      <TouchableOpacity onPress={() => router.push('./mobilepassword')}>
        <Text style={styles.tryAnotherWay}>{t('try_another_way')}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
        <Text style={styles.sendText}>{t('send')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  backText: {
    fontSize: 16,
    color: 'black',
  },
  lockIcon: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  tryAnotherWay: {
    color: 'green',
    marginBottom: 20,
  },
  sendButton: {
    backgroundColor: 'green',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  sendText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChangePasswordScreen;
