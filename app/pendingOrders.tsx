import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { baseUrl } from "@/constants/api";

type orderType = {
  id: number;
  userId: number;
  productId: number;
  farmerId: number;
  quantity: number;
  totalPrice: number;
  date: string;
  status: string;
};

export default function CompletedOrdersScreen() {
  const router = useRouter();
  const { t } = useTranslation();
  const [orders, setOrders] = useState<orderType[]>([]);

  const getOrderData = async () => {
    try {
      const tempuserId = await AsyncStorage.getItem("user");
      if (tempuserId) {
        const response = await axios.get(
          `${baseUrl}user/order?id=${tempuserId}`
        );
        const completedOrderIds: number[] = response.data.pending;

        const orderPromises = completedOrderIds.map((id: number) =>
          axios.get(`${baseUrl}order/${id}`).then((res) => res.data)
        );

        const ordersData: orderType[] = await Promise.all(orderPromises);
        setOrders(ordersData);
        console.log(ordersData);
      }
    } catch (e) {
      console.error("Error fetching completed orders:", e);
    }
  };

  useEffect(() => {
    getOrderData();
  }, []);

  const renderOrderItem = ({ item }: { item: orderType }) => (
    <View style={styles.orderItem}>
      <View style={styles.orderDetails}>
        <Text style={styles.orderId}>
          {t("Order")}: {item.id}
        </Text>
        <Text style={styles.infoText}>
          {t("Ordered On")}: {new Date(item.date).toLocaleDateString()}
        </Text>
        <Text style={styles.infoText}>
          {t("Quantity")}: {item.quantity}
        </Text>
        <Text style={styles.infoText}>
          {t("Total Price")}: ₹{item.totalPrice}
        </Text>
        <Text style={styles.infoText}>
          {t("status")}: {item.status}
        </Text>
      </View>

      <View style={styles.trackContainer}>
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "./trackpending",
              params: {
                data: item.id,
              },
            })
          }
          style={styles.trackButton}
        >
          <Text style={styles.trackButtonText}>View</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.header}>Pending Orders</Text>
      </View>

      <Image
        source={require("../assets/images/pendingOrders.jpg")}
        style={styles.headerImage}
      />

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderOrderItem}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<Text style={styles.emptyText}>No Orders yet</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  backButton: {
    position: "absolute",
    left: 0,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  headerImage: {
    width: 250,
    height: 250,
    alignSelf: "center",
    marginVertical: 20,
  },
  listContent: {
    paddingBottom: 30,
  },
  orderItem: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 16,
    marginBottom: 15,
    elevation: 3,
  },
  orderDetails: {
    marginBottom: 10,
  },
  orderId: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
  },
  infoText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  trackContainer: {
    alignItems: "flex-end",
  },
  trackButton: {
    backgroundColor: "#007bff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  trackButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  emptyText: {
    textAlign: "center",
    fontSize: 16,
    color: "gray",
    marginTop: 20,
  },
});
