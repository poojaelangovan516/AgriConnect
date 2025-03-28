import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';


export default function SignUpScreen() {
    const navigation = useNavigation();
    
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/images/logo_img.png')} style={styles.logo} />
        <Text style={styles.title}>AgriConnect</Text>
      </View>
      <Text style={styles.registerText}>Register <Text style={{ color: 'green' }}>your account</Text></Text>
      <TextInput style={styles.input} placeholder="User name" placeholderTextColor="#555" />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#555" />
      <TextInput style={styles.input} placeholder="Mobile number" placeholderTextColor="#555" keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry placeholderTextColor="#555" />
      <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry placeholderTextColor="#555" />
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpText}>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity > 
        <Text style={styles.signInText}>Already have an account? <Text style={{ color: 'green' }}>Sign in</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

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

