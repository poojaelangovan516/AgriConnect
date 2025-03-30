import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function ProductUpdate() {
  const router = useRouter();

  // State to hold input values (Editable)
  const [name, setName] = useState('Tomato');
  const [category, setCategory] = useState('Vegetables');
  const [quantity, setQuantity] = useState('20kg');
  const [marketPrice, setMarketPrice] = useState('30');
  const [yourPrice, setYourPrice] = useState('24');

  // Function to handle "Done" button
  const handleDone = () => {
    router.push({
      pathname: '/productDetails',
      params: {
        name,
        category,
        quantity,
        marketPrice,
        price: yourPrice, // yourPrice becomes price in ProductDetails
      },
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.header}>Update Product</Text>
      </View>

      {/* Product Image */}
      <Image source={require('../assets/images/tomato.png')} style={styles.image} />
      <Text style={styles.productName}>{name}</Text>
      <Text style={styles.subHeader}>Update your product details!</Text>

      {/* Input Fields (Editable) */}
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Product Name" />
      <TextInput style={styles.input} value={category} onChangeText={setCategory} placeholder="Category" />
      <TextInput style={styles.input} value={quantity} onChangeText={setQuantity} placeholder="Quantity (e.g. 20kg)" />
      <TextInput
        style={styles.input}
        value={marketPrice}
        onChangeText={setMarketPrice}
        placeholder="Market Price (e.g. 30/kg)"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={yourPrice}
        onChangeText={setYourPrice}
        placeholder="Your Price (e.g. 24/kg)"
        keyboardType="numeric"
      />

      {/* Done Button */}
      <TouchableOpacity style={styles.button} onPress={handleDone}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles
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
    marginTop: 20,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 16,
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

export default ProductUpdate;
