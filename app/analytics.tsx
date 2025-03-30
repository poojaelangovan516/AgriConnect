import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function AnalyticsScreen() {
    const router = useRouter();
    const [activeButton, setActiveButton] = useState("D");

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <FontAwesome name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>Analytics</Text>
            </View>

            <View style={styles.toggleContainer}>
      {["D", "W", "M"].map((label) => (
        <TouchableOpacity
          key={label}
          style={[
            styles.toggleButton,
            activeButton === label && styles.toggleButtonActive, // Apply active style
          ]}
          onPress={() => setActiveButton(label)} // Update state on click
        >
          <Text style={activeButton === label ? styles.activeText : styles.inactiveText}>
            {label}
          </Text>
        </TouchableOpacity>
      ))}
            </View>
            
            {/* Progress Section */}
            <View style={styles.progressCard}>
                <Text style={styles.progressText}>Your Daily Progress</Text>
                <Text style={styles.progressValue}>75%</Text>
            </View>
            
            
            {/* Bar Chart */}
            <BarChart
                data={{
                    labels: ['16', '17', '18', '19', '20', '21', '22'],
                    datasets: [{ data: [50, 25, 35, 28, 55, 40, 30] }]
                }}
                width={300}
                height={250}
                fromZero={true}
                yAxisLabel={''}
                yAxisSuffix={'k'}
                yLabelsOffset={50}
                chartConfig={{
                    backgroundGradientFrom: '#ffffff',
                    backgroundGradientTo: '#ffffff',
                    decimalPlaces: 0,
                    color: () => '#1B5E20',
                    labelColor: () => 'black',
                    style: { borderRadius: 10 },
                    barPercentage: 0.6,
                    propsForBackgroundLines: {
                        strokeWidth: 1,
                        stroke: "#E5E5E5",
                        strokeDasharray: "5 5"
                    }
                }}
                style={styles.chart}
            />

            {/* Total Orders */}
            <View style={styles.orderCard}>
                <Text style={styles.orderTitle}>Total Orders</Text>
                <Text style={styles.orderValue}>50</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', padding: 20 },
    header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
    title: { fontSize: 20, fontWeight: 'bold', marginLeft: 10 },
    progressCard: { backgroundColor: '#C8E6C9', padding: 20, borderRadius: 10, marginBottom: 40, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' },
    progressText: { fontSize: 16, fontWeight: 'bold' },
    progressValue: { fontSize: 18, fontWeight: 'bold' },
    chart: { borderRadius: 10, marginBottom: 20, alignSelf: 'center' },
    orderCard: { borderWidth: 1, borderColor: '#000', padding: 20, borderRadius: 10, alignItems: 'center' },
    orderTitle: { fontSize: 16, fontWeight: 'bold' },
    orderValue: { fontSize: 18, fontWeight: 'bold' },
    toggleContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 10,
      },
      toggleButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 5,
        borderRadius: 5,
        backgroundColor: "#ddd", // Default background
      },
      toggleButtonActive: {
        backgroundColor: "#1B5E20", // Active background color
      },
      activeText: {
        color: "white",
        fontWeight: "bold",
      },
      inactiveText: {
        color: "black",
      },
});
