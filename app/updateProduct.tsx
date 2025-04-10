import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function ProductUpdate() {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [marketPrice, setMarketPrice] = useState('');
  const [yourPrice, setYourPrice] = useState('');

  // Set initial state when language changes
  useEffect(() => {
    setName(t('productNameDefault', 'Tomato'));
    setCategory(t('categoryDefault', 'Vegetables'));
    setQuantity('20kg');
    setMarketPrice('30');
    setYourPrice('24');
  }, [i18n.language]); // dependency on language change

  const handleDone = () => {
    router.push({
      pathname: '/productDetails',
      params: {
        name,
        category,
        quantity,
        marketPrice,
        price: yourPrice,
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
        <Text style={styles.header}>{t('updateProduct')}</Text>
      </View>

      {/* Product Image */}
      <Image source={require('../assets/images/tomato.png')} style={styles.image} />
      <Text style={styles.productName}>{name}</Text>
      <Text style={styles.subHeader}>{t('updateProductDetails')}</Text>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder={t('productName')}
      />
      <TextInput
        style={styles.input}
        value={category}
        onChangeText={setCategory}
        placeholder={t('category')}
      />
      <TextInput
        style={styles.input}
        value={quantity}
        onChangeText={setQuantity}
        placeholder={t('quantityExample')}
      />
      <TextInput
        style={styles.input}
        value={marketPrice}
        onChangeText={setMarketPrice}
        placeholder={t('marketPriceExample')}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={yourPrice}
        onChangeText={setYourPrice}
        placeholder={t('yourPriceExample')}
        keyboardType="numeric"
      />

      {/* Done Button */}
      <TouchableOpacity style={styles.button} onPress={handleDone}>
        <Text style={styles.buttonText}>{t('done')}</Text>
      </TouchableOpacity>
    </View>
  );
}

// styles remain the same
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
