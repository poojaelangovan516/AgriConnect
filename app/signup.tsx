import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

export default function SignUpScreen() {
  const router = useRouter();
  
  // State for form inputs
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [category, setCategory] = useState('');
  const { t } = useTranslation(); // Initialize translation

  const handleSignUp = () => {
    if (!username || !email || !mobile || !password || !confirmPassword || !category) {
      Alert.alert(t('error'), t('all_fields_required'));
      return;
    }
    
    if (password !== confirmPassword) {
      Alert.alert(t('error'), t('passwords_do_not_match'));
      return;
    }

    if (category.toLowerCase() !== 'farmer') {
      Alert.alert(t('error'), t('category_must_be_farmer'));
      return;
    }

    // Successful signup, navigate to home page
    router.push('./homePage');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/images/logo_img.png')} style={styles.logo} />
        <Text style={styles.title}>AgriConnect</Text>
      </View>
      
      <Text style={styles.registerText}>
        {t('register')} <Text style={{ color: 'green' }}>{t('your_account')}</Text>
      </Text>

      <TextInput style={styles.input} placeholder={t('username')} placeholderTextColor="#555" value={username} onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder={t('email')} placeholderTextColor="#555" keyboardType="email-address" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder={t('mobile_number')} placeholderTextColor="#555" keyboardType="phone-pad" value={mobile} onChangeText={setMobile} />
      <TextInput style={styles.input} placeholder={t('password')} secureTextEntry placeholderTextColor="#555" value={password} onChangeText={setPassword} />
      <TextInput style={styles.input} placeholder={t('confirm_password')} secureTextEntry placeholderTextColor="#555" value={confirmPassword} onChangeText={setConfirmPassword} />
      <TextInput style={styles.input} placeholder={t('category_farmer')} placeholderTextColor="#555" value={category} onChangeText={setCategory} />

      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpText}>{t('sign_up')}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('./signin')}>
        <Text style={styles.signInText}>
          {t('already_have_account')} <Text style={{ color: 'green' }}>{t('sign_in')}</Text>
        </Text>
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
