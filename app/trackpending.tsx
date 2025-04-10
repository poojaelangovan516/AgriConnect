import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

const OrderTrackingScreen = () => {
  const { t } = useTranslation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>{t('trackOrders')}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          <Text style={styles.bold}>{t('customerName')}:</Text> Suresh
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.bold}>{t('orderNumber')}:</Text> 986427
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.bold}>{t('address')}:</Text> 12A/1, Anna Nagar, Coimbatore
        </Text>
      </View>

      <View style={styles.productContainer}>
        <Image source={require('../assets/images/eggPlant.jpg')} style={styles.productImage} />
        <View>
          <Text style={styles.productName}>{t('tomato')}</Text>
          <Text style={styles.productDetail}>{t('quantity')}: 15kg</Text>
          <Text style={styles.productDetail}>{t('price')}: 24/kg</Text>
          <Text style={styles.totalPrice}>{t('totalPrice')}: 360</Text>
        </View>
      </View>

      <Text style={styles.trackHeader}>{t('track')}</Text>
      <View style={styles.trackContainer}>
        <View style={styles.trackItem}>
          <MaterialIcons name="check-circle" size={24} color="orange" />
          <View>
            <Text style={styles.trackText}>{t('accept')}</Text>
            <Text style={styles.subText}>{t('orderOn')} 28-Feb-2025, 2:00 PM</Text>
          </View>
        </View>
        <View style={styles.trackItem}>
          <MaterialIcons name="inventory" size={24} color="gray" />
          <View>
            <Text style={styles.trackText}>{t('packed')}</Text>
            <Text style={styles.subText}>{t('notYetPacked')}</Text>
          </View>
        </View>
        <View style={styles.trackItem}>
          <MaterialIcons name="local-shipping" size={24} color="gray" />
          <View>
            <Text style={styles.trackText}>{t('inTransit')}</Text>
            <Text style={styles.subText}>{t('notYetShipped')}</Text>
          </View>
        </View>
        <View style={styles.trackItem}>
          <MaterialIcons name="home" size={24} color="gray" />
          <View>
            <Text style={styles.trackText}>{t('delivered')}</Text>
            <Text style={styles.subText}>{t('notYetDelivered')}</Text>
          </View>
        </View>
      </View>

      <Text style={styles.paymentHeader}>{t('paymentDetail')}</Text>
      <Text style={styles.paymentMethod}>{t('onlinePayment')}</Text>
      <Text style={styles.paymentStatus}>
        {t('paymentReceivedOn')} 28-Feb-2025, 2:00 PM
      </Text>
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
  paymentStatus: { fontSize: 14, color: 'green' },
});

export default OrderTrackingScreen;
