import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';

const VerifyEmailScreen = () => {
  const router = useRouter();
  const [code, setCode] = useState('');

  const handleVerify = () => {
    if (code.length !== 4) {
      Alert.alert('Error', 'Please enter a valid 4-digit code');
      return;
    }
    router.push('./confirmpasswrd');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>{'<'} Back</Text>
      </TouchableOpacity>

      <Image source={require('../assets/images/confirm.png')} style={styles.lockIcon} />

      <Text style={styles.title}>Verify Your Email</Text>
      <Text style={styles.subtitle}>Please enter the 4-digit code sent to your email</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Code"
        placeholderTextColor="#777"
        keyboardType="numeric"
        maxLength={4}
        value={code}
        onChangeText={setCode}
        textAlign="center"
      />

      <TouchableOpacity>
        <Text style={styles.resendCode}>Resend Code</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.sendButton} onPress={handleVerify}>
        <Text style={styles.sendText}>Verify</Text>
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
    fontSize: 18,
    letterSpacing: 10,
  },
  resendCode: {
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

export default VerifyEmailScreen;
