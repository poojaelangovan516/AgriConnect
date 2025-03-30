import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const TrackOrderScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Track Orders</Text>
      
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Customer Name: <Text style={styles.value}>Arun</Text></Text>
        <Text style={styles.label}>Order#: <Text style={styles.value}>824193</Text></Text>
        <Text style={styles.label}>Address: <Text style={styles.value}>12A/1, Anna Nagar, Coimbatore</Text></Text>
      </View>
      
      <View style={styles.productContainer}>
        <View>
          <Text style={styles.productTitle}>EggPlant</Text>
          <Text style={styles.detailText}>Quantity: 10kg</Text>
          <Text style={styles.detailText}>Price: 70/kg</Text>
          <Text style={styles.totalPrice}>Total Price: 700</Text>
        </View>
        <Image source={require('../assets/images/eggplant.png')} style={styles.productImage} />
      </View>

      <Text style={styles.trackTitle}>Track</Text>

      <View style={styles.timeline}>
        <View style={styles.timelineItem}>
          <FontAwesome name="check-square-o" size={24} color="orange" />
          <Text style={styles.timelineText}>Accept</Text>
          <Text style={styles.timeText}>05-Feb-2025, 10:03 AM</Text>
        </View>
        <View style={styles.timelineItem}>
          <MaterialIcons name="inventory" size={24} color="orange" />
          <Text style={styles.timelineText}>Packed</Text>
          <Text style={styles.timeText}>07-Feb-2025, 11:16 AM</Text>
        </View>
        <View style={styles.timelineItem}>
          <MaterialIcons name="local-shipping" size={24} color="green" />
          <Text style={styles.timelineText}>In-Transit</Text>
          <Text style={styles.timeText}>10-Feb-2025, 3:34 PM</Text>
        </View>
        <View style={styles.timelineItem}>
          <MaterialIcons name="check-circle" size={24} color="green" />
          <Text style={styles.timelineText}>Delivered</Text>
          <Text style={styles.timeText}>12-Feb-2025</Text>
        </View>
      </View>

      <Text style={styles.trackTitle}>Payment Detail</Text>
      <Text style={styles.paymentText}>Cash On Delivery</Text>
      <Text style={styles.paymentReceived}>Payment received on 12-Feb-2025, 11:12 AM</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  infoContainer: { marginBottom: 20 },
  label: { fontSize: 16, fontWeight: 'bold' },
  value: { fontWeight: 'normal' },
  productContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  productTitle: { fontSize: 18, fontWeight: 'bold' },
  detailText: { fontSize: 16, color: '#666' },
  totalPrice: { fontSize: 16, fontWeight: 'bold', marginTop: 5 },
  productImage: { width: 80, height: 80, resizeMode: 'contain' },
  trackTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  timeline: { paddingLeft: 10, borderLeftWidth: 2, borderLeftColor: 'green' },
  timelineItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  timelineText: { fontSize: 16, marginLeft: 10, fontWeight: 'bold' },
  timeText: { fontSize: 14, marginLeft: 10, color: '#666' },
  paymentText: { fontSize: 16, fontWeight: 'bold' },
  paymentReceived: { fontSize: 14, color: 'green', marginTop: 5 },
});

export default TrackOrderScreen;