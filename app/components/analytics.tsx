import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function AnalyticsScreen()  {
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FontAwesome name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>Analytics</Text>
            </View>
            
            {/* Progress Section */}
            <View style={styles.progressCard}>
                <Text style={styles.progressText}>Your Daily Progress</Text>
                <Text style={styles.progressValue}>75%</Text>
            </View>

            {/* Toggle Buttons */}
            <View style={styles.toggleContainer}>
                <TouchableOpacity style={styles.toggleButtonActive}><Text>D</Text></TouchableOpacity>
                <TouchableOpacity style={styles.toggleButton}><Text>W</Text></TouchableOpacity>
                <TouchableOpacity style={styles.toggleButton}><Text>M</Text></TouchableOpacity>
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
                yAxisSuffix={'k'}  // ✅ Added this to fix the error
                yLabelsOffset={50}
                chartConfig={{
                    backgroundGradientFrom: '#ffffff',
                    backgroundGradientTo: '#ffffff',
                    decimalPlaces: 0,
                    color: () => `#005F99`,
                    labelColor: () => `black`,
                    style: {
                        borderRadius: 10
                    },
                    barPercentage: 0.6, // Increase bar thickness
                    propsForBackgroundLines: {
                        strokeWidth: 1,
                        stroke: "#E5E5E5", // Lighter gridlines
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
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', padding: 20 },
    header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
    title: { fontSize: 20, fontWeight: 'bold', marginLeft: 10 },
    progressCard: { backgroundColor: '#CFE7FF', padding: 20, borderRadius: 10, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between' },
    progressText: { fontSize: 16, fontWeight: 'bold' },
    progressValue: { fontSize: 18, fontWeight: 'bold' },
    toggleContainer: { flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 10 },
    toggleButton: { backgroundColor: '#EEE', padding: 10, borderRadius: 5, marginLeft: 5 },
    toggleButtonActive: { backgroundColor: '#005F99', padding: 10, borderRadius: 5, marginLeft: 5, color: 'white' },
    chart: { borderRadius: 10, marginBottom: 20, alignSelf: 'center',},
    orderCard: { borderWidth: 1, borderColor: '#000', padding: 20, borderRadius: 10, alignItems: 'center' },
    orderTitle: { fontSize: 16, fontWeight: 'bold' },
    orderValue: { fontSize: 18, fontWeight: 'bold' },
});

