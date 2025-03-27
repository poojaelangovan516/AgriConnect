import { router } from 'expo-router';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import productList from './productList';

export default function LoginScreen(){
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/images/logo_img.png')} style={styles.logo} />
        <Text style={styles.title}>AgriConnect</Text>
      </View>
      <Text style={styles.loginText}> <Text style={{ color: 'green' }}>Log in</Text> to your account</Text>
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#555" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry placeholderTextColor="#555" />
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signInButton} onPress={() => router.push("./productList")}>
        <Text style={styles.signInText}>Sign in</Text>
      </TouchableOpacity>
      <Text  style={styles.signUpText}>Don’t have an account? <Text style={{ color: 'green' }}>Sign up</Text></Text>
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
});


