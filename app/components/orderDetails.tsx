import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function OrderTrackingScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.header}>Track Orders</Text>
      </View>
      
      {/* Order Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Customer Name: <Text style={styles.value}>Suresh</Text></Text>
        <Text style={styles.label}>Order#: <Text style={styles.value}>986427</Text></Text>
        <Text style={styles.label}>Address: <Text style={styles.value}>12A/1, Anna Nagar, Coimbatore</Text></Text>
      </View>

      {/* Product Details */}
      <View style={styles.productContainer}>
        <View>
          <Text style={styles.productName}>Tomato</Text>
          <Text style={styles.label}>Quantity: <Text style={styles.value}>15kg</Text></Text>
          <Text style={styles.label}>Price: <Text style={styles.value}>24/kg</Text></Text>
          <Text style={styles.totalPrice}>Total Price: 360</Text>
        </View>
        <Image source={require('../../assets/images/products/tomato.jpg')} style={styles.productImage} />
      </View>

      {/* Order Tracking */}
      <Text style={styles.trackHeader}>Track</Text>
      <View style={styles.trackContainer}>
        <View style={styles.trackStep}>
          <Ionicons name="checkmark-circle" size={24} color="orange" />
          <View style={styles.trackText}>
            <Text style={styles.trackTitle}>Accept</Text>
            <Text style={styles.trackSubText}>Order on 28-Feb-2025, 2:00 PM</Text>
          </View>
        </View>
        <View style={styles.trackStep}>
          <Ionicons name="cube" size={24} color="gray" />
          <View style={styles.trackText}>
            <Text style={styles.trackTitle}>Packed</Text>
            <Text style={styles.trackSubText}>Not Yet Packed</Text>
          </View>
        </View>
        <View style={styles.trackStep}>
          <Ionicons name="car" size={24} color="gray" />
          <View style={styles.trackText}>
            <Text style={styles.trackTitle}>In-Transit</Text>
            <Text style={styles.trackSubText}>Not Yet Shipped</Text>
          </View>
        </View>
        <View style={styles.trackStep}>
          <Ionicons name="home" size={24} color="gray" />
          <View style={styles.trackText}>
            <Text style={styles.trackTitle}>Delivered</Text>
            <Text style={styles.trackSubText}>Not Yet Delivered</Text>
          </View>
        </View>
      </View>

      {/* Payment Details */}
      <Text style={styles.paymentHeader}>Payment Detail</Text>
      <Text style={styles.label}>Online Payment</Text>
      <Text style={styles.paymentStatus}>Payment received on 28-Feb-2025, 2:00 PM</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 30
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 90,
  },
  detailsContainer: {
    marginBottom: 10,
    marginTop: 30
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  value: {
    fontWeight: 'normal',
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 20
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  trackHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  trackContainer: {
    marginTop: 10,
  },
  trackStep: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  trackText: {
    marginLeft: 10,
  },
  trackTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  trackSubText: {
    fontSize: 14,
    color: 'gray',
  },
  paymentHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  paymentStatus: {
    fontSize: 14,
    color: 'green',
    fontWeight: 'bold',
  },
});

