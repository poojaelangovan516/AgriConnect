import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function ProductDetails() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <FontAwesome name="arrow-left" size={20} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.editButton}>
        <FontAwesome name="pencil" size={20} color="black" />
      </TouchableOpacity>
      <Image source={require('../../assets/images/products/tomato.jpg')} style={styles.image} />
      <Text style={styles.title}>Tomato</Text>
      <Text style={styles.description}>
        The tomato is a nutrient-rich fruit used as a vegetable, packed with vitamins and antioxidants. It’s versatile, eaten raw or cooked in various dishes worldwide.
      </Text>
      <View style={styles.priceContainer}>
        <Text style={styles.marketPrice}>Market price{"\n"}<Text style={styles.price}>₹30/kg</Text></Text>
        <Text style={styles.yourPrice}>Your price{"\n"}<Text style={styles.price}>₹24/kg</Text></Text>
      </View>
      <Text style={styles.reviewTitle}>Product Reviews</Text>
      <View style={styles.reviewContainer}>
        <View style={styles.reviewerInfo}>
          <View style={styles.profileIcon}>
            <Text style={styles.initial}>K</Text>
          </View>
          <Text style={styles.reviewerName}>Karunan</Text>
        </View>
        <View style={styles.starContainer}>
          {[...Array(4)].map((_, index) => (
            <FontAwesome key={index} name="star" size={16} color="gold" />
          ))}
          <FontAwesome name="star-o" size={16} color="gold" />
        </View>
        <Text style={styles.reviewText}>Fresh and good quality. Clean and well-packed</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
  },
  editButton: {
    position: 'absolute',
    top: 20,
    right: 10,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
  },
  description: {
    fontSize: 18,
    marginVertical: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    height: 50
  },
  marketPrice: {
    fontSize: 14,
    color: 'black',
  },
  yourPrice: {
    fontSize: 14,
    color: 'black',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  reviewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  reviewContainer: {
    marginTop: 10,
  },
  reviewerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  initial: {
    color: 'white',
    fontWeight: 'bold',
  },
  reviewerName: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
  starContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  reviewText: {
    fontSize: 16,
  },
});

