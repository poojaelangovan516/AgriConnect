import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function ProductUpdate() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
       <View style={styles.headerContainer}>
              <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.header}>Pending Orders</Text>
            </View>
      <Image source={require('../../assets/images/products/tomato.jpg')} style={styles.image} />
      <Text style={styles.productName}>Tomato</Text>
      <Text style={styles.subHeader}>Update your product details!</Text>
      <TextInput style={styles.input} value="Tomato" />
      <TextInput style={styles.input} value="Vegetables" />
      <TextInput style={styles.input} value="20kg" />
      <TextInput style={styles.input} value="30/kg" />
      <TextInput style={styles.input} value="24/kg" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  backButton: {
    position: 'absolute',
    left: 0,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 20
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


