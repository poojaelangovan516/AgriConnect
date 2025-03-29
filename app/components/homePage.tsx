import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function HomePage()  {
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.logo}>AgriConnect</Text>
                <View style={styles.iconContainer}>
                    <FontAwesome name="bell" size={24} color="black" style={styles.icon} />
                    <FontAwesome name="bars" size={24} color="black" style={styles.icon} />
                </View>
            </View>
            
            {/* Banner */}
            <View style={styles.banner}>
                <Text style={styles.bannerText}>The land is not just soil, It's our soul.</Text>
                <Image source={require('../../assets/images/totalOrdersHomepage.png')} style={styles.bannerImage} />
            </View>
            
            {/* Order Status */}
            <Text style={styles.sectionTitle}>Order Status</Text>
            <View style={styles.card}>
                <View>
                <Text style={styles.orderCount}>5</Text>
                <Text style={styles.orderText}>Total Orders</Text>
                </View>
                <Image source={require('../../assets/images/totalOrdersHomepage.png')} style={styles.bannerImage} />
            </View>

            {/* Order Analytics */}
            <Text style={styles.sectionTitle}>Order Analytics</Text>
            <TouchableOpacity style={styles.analyticsCard}>
                <Text style={styles.analyticsText}>Order Analytics</Text>
                <Image source={require('../../assets/images/products/tomato.png')} style={styles.analyticsImage} />
            </TouchableOpacity>

            {/* Floating Button */}
            <TouchableOpacity style={styles.fab}>
                <FontAwesome name="plus" size={24} color="white" />
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    header: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, alignItems: 'center' },
    logo: { fontSize: 24, fontWeight: 'bold', color: '#2C5F2D' },
    iconContainer: { flexDirection: 'row' },
    icon: { marginLeft: 15 },
    banner: { backgroundColor: '#2C5F2D', padding: 20, borderRadius: 10, margin: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    bannerText: { color: '#fff', fontSize: 16, fontWeight: 'bold', width: '70%' },
    bannerImage: { width: 120, height: 100, resizeMode: 'contain' },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', marginLeft: 15, marginTop: 20 },
    card: { backgroundColor: '#DFFFD6', padding: 20, margin: 10, borderRadius: 10, display:'flex',flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    orderCount: { fontSize: 30, fontWeight: 'bold', color: '#2C5F2D' },
    orderText: { fontSize: 16, color: '#555' },
    analyticsCard: { backgroundColor: '#E5F7FF', padding: 20, margin: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    analyticsText: { fontSize: 16, fontWeight: 'bold', color: '#005F99' },
    analyticsImage: { width: 80, height: 60, resizeMode: 'contain' },
    fab: { position: 'absolute', bottom: -120, right: '45%', backgroundColor: '#2C5F2D', padding: 15, borderRadius: 50, alignItems: 'center', justifyContent: 'center'},
});
