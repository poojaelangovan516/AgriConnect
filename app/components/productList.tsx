import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // For icons
import { products } from '../data/product'; // Ensure your product data is correctly imported

export default function ProductsScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Products</Text>
      </View>

      {/* Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Fresh Vegetables are ready!</Text>
        <Image source={require('../../assets/images/products/banner.jpg')} style={styles.bannerImage} />
      </View>

      {/* Section Title */}
      <Text style={styles.sectionTitle}>Sell Your Harvest Directly!</Text>

      {/* Product List */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2} // Grid Layout
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* Top Row: Icon, Name, and Image */}
           
              <View style={[styles.categoryIcon, { backgroundColor: item.color }]} />
              <View style={styles.topRow}>
              <Text style={styles.productName}>{item.name}</Text>
              <Image source={item.image} style={styles.productImage} />
            </View>

            {/* Bottom Row: Quantity & Price */}
            <View style={styles.bottomRow}>
              <Text style={styles.productInfo}> Available kg : {item.quantity}</Text>
              <Text style={styles.productPrice}> Item Price : {item.price}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={styles.listContainer}
      />
 </TouchableOpacity>
      {/* Bottom Navigation Placeholder */}
      {/* <View style={styles.bottomNav}>
        <Ionicons name="home" size={24} color="green" />
      </View> */}
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'green',
    paddingVertical: 15,
    paddingHorizontal: 20,
    height: 80,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 20,
  },
  banner: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  bannerText: {
    fontSize: 20,
    flex: 1,
  },
  bannerImage: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
  },
  sectionTitle: {
    fontSize: 18,
    marginLeft: 20,
    marginBottom: 10,
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingBottom: 80, // Adjust for bottom navigation
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    height:150,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  categoryIcon: {
    width: 15,
    height: 15,
    borderRadius: 10,
    marginRight: 8,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1, // Pushes image to the right
  },
  productImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  bottomRow: {
    flexDirection: 'column',
    justifyContent: 'space-between', // Align weight & price
    width: '100%',
    marginTop: 5,
  },
  productInfo: {
    fontSize: 16,
  },
  productPrice: {
    fontSize: 16,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 10,
    left: '50%',
    transform: [{ translateX: -12 }],
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
    elevation: 10,
  },
});

