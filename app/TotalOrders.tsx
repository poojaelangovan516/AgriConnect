import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { orders } from './pendingOrdersData';

export default function TotalOrdersScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.header}>Total Orders</Text>
      </View>

      {/* Image & Total Count */}
      <Image source={require('../assets/images/totalOrders.jpg')} style={styles.headerImage} />
      <Text style={styles.totalCount}>5</Text>
      <Text style={styles.totalLabel}>Totally</Text>

      {/* Orders List */}
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.orderItem}>
            <View>
              <Text style={styles.orderNumber}>Order#: {item.orderNumber}</Text>
              <Text style={styles.orderedOn}>Ordered on</Text>
              <Text style={styles.orderDate}>{item.date}</Text>
            </View>
            <Image source={item.image} style={styles.image} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
  headerImage: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  totalCount: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  totalLabel: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 20,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  orderNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderedOn: {
    color: 'gray',
  },
  orderDate: {
    fontSize: 14,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});
