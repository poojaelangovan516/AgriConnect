import React from 'react';
import { useRouter } from 'expo-router';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { inventoryData } from './inventoryfile';

export default function InventoryScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.header}>Inventory</Text>
      </View>
      <Image source={require('../assets/images/inventory_management.jpg')} style={styles.headerImage} />
      <FlatList
        data={inventoryData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.inventoryItem}>
            <Image source={item.image} style={styles.image} />
            <View>
              <Text style={styles.productName}>Product Name: {item.productName}</Text>
              <Text style={styles.quantity}>Quantity Available: {item.quantity}</Text>
            </View>
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
    marginTop: 20,
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
  inventoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantity: {
    color: 'gray',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },
});
