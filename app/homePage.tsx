import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { ProgressBar } from "react-native-paper";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { baseUrl } from "@/constants/api";

export default function HomePage() {
  const router = useRouter();
  const { t } = useTranslation();

  const [ordersData, setOrdersData] = useState({
    cancelled: [],
    completed: [],
    pending: [],
    totalOrders: [],
  });

  const [ordersCount, setOrdersCount] = useState({
    pending: 0,
    completed: 0,
    total: 0,
  });

  const getOrderData = async () => {
    try {
      const tempuserId = await AsyncStorage.getItem("user");

      if (tempuserId) {
        const response = await axios.get(
          `${baseUrl}user/order?id=${tempuserId}`
        );
        setOrdersData(response.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getOrderData();
  }, []);

  useEffect(() => {
    setOrdersCount({
      pending: ordersData.pending.length,
      completed: ordersData.completed.length,
      total: ordersData.totalOrders.length,
    });
  }, [ordersData]);

  return (
    <View style={styles.container}>
      {/* Top Navigation */}
      <View style={styles.topNav}>
        <TouchableOpacity onPress={() => router.push("./menu")}>
          <Ionicons name="menu" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.navTitle}>{t("agriConnect")}</Text>
        <TouchableOpacity>
          <Ionicons name="notifications" size={28} color="black" />
        </TouchableOpacity>
      </View>

      {/* Banner Section */}
      <View style={styles.newSection}>
        <View style={styles.textContainer}>
          <Text style={styles.quoteText}>{t("landQuote")}</Text>
        </View>
        <Image
          source={require("../assets/images/cowfarm.png")}
          style={styles.cowFarmImage}
        />
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Total Orders */}
        <TouchableOpacity
          style={styles.orderItem}
          onPress={() => router.push("./TotalOrders")}
        >
          <Image
            source={require("../assets/images/totalorder.png")}
            style={styles.orderImage}
          />
          <Text style={styles.orderText}>
            {t("totalOrders")}: {ordersCount.total}
          </Text>
        </TouchableOpacity>

        {/* Completed Orders */}
        <TouchableOpacity
          style={styles.orderItem}
          onPress={() => router.push("./completedOrders")}
        >
          <Image
            source={require("../assets/images/completed.png")}
            style={styles.orderImage}
          />
          <Text style={styles.orderText}>
            {t("completedOrders")}: {ordersCount.completed}
          </Text>
        </TouchableOpacity>

        {/* Pending Orders */}
        <TouchableOpacity
          style={styles.orderItem}
          onPress={() => router.push("./pendingOrders")}
        >
          <Image
            source={require("../assets/images/pending.png")}
            style={styles.orderImage}
          />
          <Text style={styles.orderText}>
            {t("pendingOrders")}: {ordersCount.pending}
          </Text>
        </TouchableOpacity>

        {/* Order Analytics */}
        {/* <TouchableOpacity
          style={styles.orderItem}
          onPress={() => router.push("./analytics")}
        >
          <Image
            source={require("../assets/images/analytics.jpeg")}
            style={styles.orderImage}
          />
          <Text style={styles.orderText}>{t("orderAnalytics")}</Text>
        </TouchableOpacity> */}

        {/* Today's Analytics */}
        <View style={styles.analyticsSection}>
          <Text style={styles.analyticsTitle}>{t("todaysAnalytics")}</Text>

          {/* Total Orders */}
          <View style={styles.analyticsItem}>
            <Text style={styles.analyticsLabel}>{t("totalOrders")}</Text>
            <ProgressBar
              progress={1}
              color="#0057D9"
              style={styles.progressBar}
            />
            <Text style={styles.analyticsValue}>{ordersCount.total}</Text>
          </View>

          {/* Completed Orders */}
          <View style={styles.analyticsItem}>
            <Text style={styles.analyticsLabel}>{t("completedOrders")}</Text>
            <ProgressBar
              progress={
                ordersCount.total > 0
                  ? Math.min(ordersCount.completed / ordersCount.total, 1)
                  : 0
              }
              color="#2E7D32"
              style={styles.progressBar}
            />
            <Text style={styles.analyticsValue}>
              {ordersCount.total > 0
                ? `${(
                    (ordersCount.completed / ordersCount.total) *
                    100
                  ).toFixed(0)}%`
                : "0%"}
            </Text>
          </View>

          {/* Pending Orders */}
          <View style={styles.analyticsItem}>
            <Text style={styles.analyticsLabel}>{t("pendingOrders")}</Text>
            <ProgressBar
              progress={
                ordersCount.total > 0
                  ? Math.min(ordersCount.pending / ordersCount.total, 1)
                  : 0
              }
              color="#FFA000"
              style={styles.progressBar}
            />
            <Text style={styles.analyticsValue}>
              {ordersCount.total > 0
                ? `${((ordersCount.pending / ordersCount.total) * 100).toFixed(
                    0
                  )}%`
                : "0%"}
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Floating Add Button */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => router.push({ pathname: "./addProduct" })}
      >
        <Ionicons name="add" size={40} color="white" />
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => router.push("./homePage")}>
          <Ionicons name="home" size={30} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("./productList")}>
          <Image
            source={require("../assets/images/productlist.png")}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("./pendingOrders")}>
          <Image
            source={require("../assets/images/pendinglist.png")}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("./completedOrders")}>
          <Image
            source={require("../assets/images/history.jpg")}
            style={styles.navIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  topNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#fff",
    elevation: 4,
  },
  navTitle: { fontSize: 20, fontWeight: "bold", color: "black" },
  newSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
  },
  textContainer: {
    backgroundColor: "#1B5E20",
    padding: 10,
    borderRadius: 50,
    height: 90,
    width: 200,
    alignSelf: "center",
    justifyContent: "center",
  },
  quoteText: { color: "white", fontSize: 16, textAlign: "center" },
  cowFarmImage: { width: 100, height: 100, resizeMode: "contain" },
  scrollContainer: { paddingBottom: 100, paddingHorizontal: 15 },
  orderItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5FFEF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  orderImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginRight: 15,
  },
  orderText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  analyticsSection: {
    backgroundColor: "#F5FFEF",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  analyticsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#1B5E20",
  },
  analyticsItem: {
    marginBottom: 15,
  },
  analyticsLabel: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
  },
  analyticsValue: {
    marginTop: 5,
    fontSize: 14,
    color: "#666",
    textAlign: "right",
  },
  floatingButton: {
    position: "absolute",
    bottom: 80,
    right: 20,
    backgroundColor: "green",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#ffffff",
    position: "absolute",
    bottom: 0,
    width: "100%",
    elevation: 4,
  },
  navIcon: { width: 30, height: 30 },
});
