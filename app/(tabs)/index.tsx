import { Image, StyleSheet, Platform } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import LoginScreen from '../components/login';
import SignUpScreen from '../components/signup';
import AddProduct from '../components/add_Product';
import LanguageSelection from '../components/language';
import MenuScreen from '../components/menu';
import ProductsScreen from '../components/productList';
import SettingsScreen from '../components/settings';
import EditProfileScreen from '../components/editProfile';
import PendingOrdersScreen from '../components/pendingOrders';
import TotalOrdersScreen from '../components/TotalOrders';
import CompletedOrdersScreen from '../components/completedOrders';
import React from 'react';
import InventoryScreen from '../components/inventory';
import OrderTrackingScreen from '../components/orderDetails';
import ProductUpdate from '../components/updateProduct';
import ProductDetails from '../components/productDetails';


export default function HomeScreen() {
  return (
  // <LoginScreen/>
  // <SignUpScreen/>
  // <AddProduct/>
  // <LanguageSelection/>
  // <MenuScreen/>
  // <ProductsScreen/>
  // <SettingsScreen/>
  // <EditProfileScreen/>
  // <PendingOrdersScreen/>
  // <TotalOrdersScreen/>
  // <CompletedOrdersScreen/>
  // <InventoryScreen/>
  // <OrderTrackingScreen/>
  // <ProductUpdate/>
  <ProductDetails/>

  
  );
}

