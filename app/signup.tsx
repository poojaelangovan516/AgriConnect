import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';

export default function SignUpScreen() {
  const router = useRouter();
  
  // State for form inputs
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [category, setCategory] = useState('');

  const handleSignUp = () => {
    if (!username || !email || !mobile || !password || !confirmPassword || !category) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }
    
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match!');
      return;
    }

    if (category.toLowerCase() !== 'farmer') {
      Alert.alert('Error', 'Category must be "farmer" to sign up.');
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
        Register <Text style={{ color: 'green' }}>your account</Text>
      </Text>

      <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#555" value={username} onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#555" keyboardType="email-address" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Mobile Number" placeholderTextColor="#555" keyboardType="phone-pad" value={mobile} onChangeText={setMobile} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry placeholderTextColor="#555" value={password} onChangeText={setPassword} />
      <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry placeholderTextColor="#555" value={confirmPassword} onChangeText={setConfirmPassword} />
      <TextInput style={styles.input} placeholder="Category (Farmer)" placeholderTextColor="#555" value={category} onChangeText={setCategory} />

      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpText}>Sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('./signin')}>
        <Text style={styles.signInText}>
          Already have an account? <Text style={{ color: 'green' }}>Sign in</Text>
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

