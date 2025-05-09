import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { orders } from '../data/pendingOrdersData';

export default function CompletedOrdersScreen(){
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.header}>Completed Orders</Text>
      </View>
      <Image source={require('../../assets/images/completed.jpg')} style={styles.headerImage} />
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
};

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
    marginTop: 20
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


