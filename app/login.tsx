import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { t } = useTranslation(); // Initialize translation

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert(t('error'), t('please_enter_email_password'));
      return;
    }
    router.push('./homePage'); // Redirect only if fields are filled
  };

  return (
    <View style={styles.container}>
      {/* Logo and App Name */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/images/logo_img.png')} style={styles.logo} />
        <Text style={styles.title}>AgriConnect</Text>
      </View>

      {/* Login Text */}
      <Text style={styles.loginText}>
        <Text style={{ color: 'green' }}>{t('log_in')}</Text> {t('to_your_account')}
      </Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder={t('email')}
        placeholderTextColor="#555"
        value={email}
        onChangeText={setEmail} // Capture input value
        keyboardType="email-address"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder={t('password')}
        secureTextEntry
        placeholderTextColor="#555"
        value={password}
        onChangeText={setPassword} // Capture input value
      />

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>{t('forgot_password')}</Text>
      </TouchableOpacity>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
        <Text style={styles.signInText}>{t('sign_in')}</Text>
      </TouchableOpacity>

      {/* Sign Up Navigation */}
      <Text style={styles.signUpText}>
        {t('dont_have_account')}{' '}
        <Text style={styles.signUpLink} onPress={() => router.push('./signup')}>
          {t('sign_up')}
        </Text>
      </Text>
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
    marginBottom: 90,
    marginTop: -150,
    height: 300,
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
  loginText: {
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
  forgotPassword: {
    alignSelf: 'flex-end',
    marginRight: '-38%',
    marginBottom: 20,
    color: 'gray',
  },
  signInButton: {
    backgroundColor: 'green',
    padding: 15,
    width: '80%',
    alignItems: 'center',
    borderRadius: 10,
  },
  signInText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpText: {
    marginTop: 20,
    fontSize: 16,
  },
  signUpLink: {
    color: 'green',
    fontWeight: 'bold',
  },
});
