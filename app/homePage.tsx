import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { ProgressBar } from 'react-native-paper'; // Install using: npm install react-native-paper
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Icons for navigation

export default function HomePage() {
  const router = useRouter();

  // Order Counts
  const totalOrders = 9;
  const completedOrders = 6;
  const pendingOrders = 3;

  return (
    <View style={styles.container}>
      {/* 🔹 Top Navigation */}
      <View style={styles.topNav}>
        <TouchableOpacity onPress={() => router.push('./menu')}>
          <Ionicons name="menu" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.navTitle}>AgriConnect</Text>
        <TouchableOpacity>
          <Ionicons name="notifications" size={28} color="black" />
        </TouchableOpacity>
      </View>

      {/* ✅ New UI Section Below Top Navigation */}
      <View style={styles.newSection}>
        <View style={styles.textContainer}>
          <Text style={styles.quoteText}>The land is not just soil, {'\n'}It's our soul.</Text>
        </View>
        <Image source={require('../assets/images/cowfarm.png')} style={styles.cowFarmImage} />
      </View>

      {/* 🔹 Scrollable Content (Vertical Order) */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* ✅ Total Orders */}
        <TouchableOpacity style={styles.orderItem} onPress={() => router.push('./TotalOrders')}>
          <Image source={require('../assets/images/totalorder.png')} style={styles.orderImage} />
          <Text style={styles.orderText}>Total Orders: {totalOrders}</Text>
        </TouchableOpacity>

        {/* ✅ Completed Orders */}
        <TouchableOpacity style={styles.orderItem} onPress={() => router.push('./completedOrders')}>
          <Image source={require('../assets/images/completed.png')} style={styles.orderImage} />
          <Text style={styles.orderText}>Completed Orders: {completedOrders}</Text>
        </TouchableOpacity>

        {/* ✅ Pending Orders */}
        <TouchableOpacity style={styles.orderItem} onPress={() => router.push('./pendingOrders')}>
          <Image source={require('../assets/images/pending.png')} style={styles.orderImage} />
          <Text style={styles.orderText}>Pending Orders: {pendingOrders}</Text>
        </TouchableOpacity>

        {/* ✅ Order Analytics */}
        <TouchableOpacity style={styles.orderItem} onPress={() => router.push('./analytics')}>
          <Image source={require('../assets/images/analytics.jpeg')} style={styles.orderImage} />
          <Text style={styles.orderText}>Order Analytics</Text>
        </TouchableOpacity>

        {/* ✅ Today's Analytics Section */}
        <View style={styles.analyticsSection}>
          <Text style={styles.analyticsTitle}>Today's Analytics</Text>

          {/* Total Orders */}
          <View style={styles.analyticsItem}>
            <Text style={styles.analyticsLabel}>Total Orders</Text>
            <ProgressBar progress={totalOrders / 100} color="#0057D9" style={styles.progressBar} />
            <Text style={styles.analyticsValue}>{totalOrders}%</Text>
          </View>

          {/* Completed Orders */}
          <View style={styles.analyticsItem}>
            <Text style={styles.analyticsLabel}>Completed Orders</Text>
            <ProgressBar progress={completedOrders / totalOrders} color="#0057D9" style={styles.progressBar} />
            <Text style={styles.analyticsValue}>{((completedOrders / totalOrders) * 100).toFixed(0)}%</Text>
          </View>

          {/* Pending Orders */}
          <View style={styles.analyticsItem}>
            <Text style={styles.analyticsLabel}>Pending Orders</Text>
            <ProgressBar progress={pendingOrders / totalOrders} color="#0057D9" style={styles.progressBar} />
            <Text style={styles.analyticsValue}>{((pendingOrders / totalOrders) * 100).toFixed(0)}%</Text>
          </View>
        </View>

      </ScrollView>

       {/* 🔹 Floating Plus Button */}
       <TouchableOpacity style={styles.floatingButton} onPress={() => router.push('./addProduct')}>
        <Ionicons name="add" size={40} color="white" />
      </TouchableOpacity>

      {/* 🔹 Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => router.push('./homePage')}>
          <Ionicons name="home" size={30} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('./productList')}>
          <Image source={require('../assets/images/productlist.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('./pendingOrders')}>
          <Image source={require('../assets/images/pendinglist.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('./completedOrders')}>
          <Image source={require('../assets/images/history.jpg')} style={styles.navIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  topNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    elevation: 4,
  },
  navTitle: { fontSize: 20, fontWeight: 'bold', color: 'black' },
  newSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  textContainer: {
    backgroundColor: '#1B5E20',
    padding: 10,
    borderRadius: 50,
    height: 130,
    width: 250,
  },
  quoteText: { color: 'white', fontSize: 16, textAlign: 'center',marginTop: 30, },
  cowFarmImage: { width: 100, height: 100, resizeMode: 'contain' },
  scrollContainer: { paddingBottom: 80, paddingHorizontal: 10 },
  orderItem: {
    alignItems: 'center',
    backgroundColor: '#F5FFEF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  orderImage: { width: 200, height: 180, marginBottom: 5, marginLeft: 160 },
  orderText: { fontSize: 25, fontWeight: 'bold', marginRight: 200, marginTop: -80 ,},
  floatingButton: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    backgroundColor: 'green',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    elevation: 4,
  },
  navIcon: { width: 30, height: 30 },
});
