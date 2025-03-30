import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const OrderTrackingScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Track Orders</Text>
      
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}><Text style={styles.bold}>Customer Name:</Text> Suresh</Text>
        <Text style={styles.infoText}><Text style={styles.bold}>Order#:</Text> 986427</Text>
        <Text style={styles.infoText}><Text style={styles.bold}>Address:</Text> 12A/1, Anna Nagar, Coimbatore</Text>
      </View>
      
      <View style={styles.productContainer}>
        <Image source={{ uri: 'C:\Users\k3799\Downloads\AgriConnect-main (1)\AgriConnect-main\assets\images\eggPlant.jpg' }} style={styles.productImage} />
        <View>
          <Text style={styles.productName}>Tomato</Text>
          <Text style={styles.productDetail}>Quantity: 15kg</Text>
          <Text style={styles.productDetail}>Price: 24/kg</Text>
          <Text style={styles.totalPrice}>Total Price: 360</Text>
        </View>
      </View>

      <Text style={styles.trackHeader}>Track</Text>
      <View style={styles.trackContainer}>
        <View style={styles.trackItem}>
          <MaterialIcons name="check-circle" size={24} color="orange" />
          <Text style={styles.trackText}>Accept</Text>
          <Text style={styles.subText}>Order on 28-Feb-2025, 2:00 PM</Text>
        </View>
        <View style={styles.trackItem}>
          <MaterialIcons name="inventory" size={24} color="gray" />
          <Text style={styles.trackText}>Packed</Text>
          <Text style={styles.subText}>Not Yet Packed</Text>
        </View>
        <View style={styles.trackItem}>
          <MaterialIcons name="local-shipping" size={24} color="gray" />
          <Text style={styles.trackText}>In-Transit</Text>
          <Text style={styles.subText}>Not Yet Shipped</Text>
        </View>
        <View style={styles.trackItem}>
          <MaterialIcons name="home" size={24} color="gray" />
          <Text style={styles.trackText}>Delivered</Text>
          <Text style={styles.subText}>Not Yet Delivered</Text>
        </View>
      </View>

      <Text style={styles.paymentHeader}>Payment Detail</Text>
      <Text style={styles.paymentMethod}>Online Payment</Text>
      <Text style={styles.paymentStatus}>Payment received on 28-Feb-2025, 2:00 PM</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  infoContainer: { marginBottom: 15 },
  infoText: { fontSize: 16, color: '#333' },
  bold: { fontWeight: 'bold' },
  productContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  productImage: { width: 60, height: 60, marginRight: 10 },
  productName: { fontSize: 18, fontWeight: 'bold' },
  productDetail: { fontSize: 14, color: '#555' },
  totalPrice: { fontSize: 16, fontWeight: 'bold', color: '#000' },
  trackHeader: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  trackContainer: { marginBottom: 20 },
  trackItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  trackText: { fontSize: 16, marginLeft: 10, fontWeight: 'bold' },
  subText: { fontSize: 14, color: '#777', marginLeft: 10 },
  paymentHeader: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  paymentMethod: { fontSize: 16, color: '#333' },
  paymentStatus: { fontSize: 14, color: 'green' }
});

export default OrderTrackingScreen;
