import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { products } from './product';
import { useTranslation } from 'react-i18next'; // ✅ Added import

export default function ProductsScreen() {
  const router = useRouter();
  const { t } = useTranslation(); // ✅ Hook for translations

  const handleProductPress = (product) => {
    router.push({
      pathname: '/productDetails',
      params: {
        id: product.id,
        name: product.name,
        quantity: product.quantity,
        price: product.price,
        color: product.color,
        image: product.image,
      },
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t('products')}</Text> {/* ✅ Translated */}
      </View>

      {/* Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>{t('freshVegetablesReady')}</Text> {/* ✅ Translated */}
        <Image source={require('../assets/images/banner.jpg')} style={styles.bannerImage} />
      </View>

      {/* Section Title */}
      <Text style={styles.sectionTitle}>{t('sellYourHarvestDirectly')}</Text> {/* ✅ Translated */}

      {/* Product List */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleProductPress(item)} style={styles.card}>
            <View style={[styles.categoryIcon, { backgroundColor: item.color }]} />
            <View style={styles.topRow}>
              <Text style={styles.productName}>{item.name}</Text>
              <TouchableOpacity onPress={() => handleProductPress(item)}>
                <Image source={item.image} style={styles.productImage} />
              </TouchableOpacity>
            </View>
            <View style={styles.bottomRow}>
              <Text style={styles.productInfo}>{t('available')}: {item.quantity}</Text> {/* ✅ Translated */}
              <Text style={styles.productPrice}>{t('price')}: {item.price}</Text> {/* ✅ Translated */}
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  header: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'green', paddingVertical: 15, paddingHorizontal: 20, height: 80 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: 'white', marginLeft: 20 },
  banner: { backgroundColor: 'white', margin: 20, borderRadius: 10, padding: 15, flexDirection: 'row', alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, elevation: 5 },
  bannerText: { fontSize: 20, flex: 1 },
  bannerImage: { width: 150, height: 100, resizeMode: 'contain' },
  sectionTitle: { fontSize: 18, marginLeft: 20, marginBottom: 10 },
  listContainer: { paddingHorizontal: 10, paddingBottom: 80 },
  card: { flex: 1, backgroundColor: 'white', margin: 10, borderRadius: 10, padding: 10, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, elevation: 5, height: 150 },
  topRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' },
  categoryIcon: { width: 15, height: 15, borderRadius: 10, marginRight: 8 },
  productName: { fontSize: 20, fontWeight: 'bold', flex: 1 },
  productImage: { width: 50, height: 50, resizeMode: 'contain' },
  bottomRow: { flexDirection: 'column', justifyContent: 'space-between', width: '100%', marginTop: 5 },
  productInfo: { fontSize: 16 },
  productPrice: { fontSize: 16 },
});
