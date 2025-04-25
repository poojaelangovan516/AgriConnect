import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { baseUrl } from "@/constants/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function InventoryScreen() {
  const router = useRouter();
  const { t } = useTranslation();
  const [items, setItems] = useState<
    {
      id: number;
      name: string;
      img: string;
      availableQuantity: number;
    }[]
  >([]);

  const getData = async () => {
    try {
      const userId = await AsyncStorage.getItem("user");
      const response = await axios.get(`${baseUrl}product/user/${userId}`);
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching inventory data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const renderItem = ({ item }: { item: (typeof items)[0] }) => (
    <View style={styles.inventoryItem}>
      <Image
        source={
          item.img
            ? { uri: item.img }
            : require("../assets/images/fallbackProduct.jpg")
        }
        style={styles.image}
      />
      <View>
        <Text style={styles.productName}>
          {t("name")}: {item.name}
        </Text>
        <Text style={styles.quantity}>
          {t("quantity")}: {item.availableQuantity}
        </Text>
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
        <Text style={styles.header}>{t("inventory")}</Text>
      </View>

      <Image
        source={require("../assets/images/inventory_management.jpg")}
        style={styles.headerImage}
      />

      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
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
  },
  headerImage: {
    width: 250,
    height: 250,
    alignSelf: "center",
    marginVertical: 20,
  },
  inventoryItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "semibold",
  },
  quantity: {
    color: "gray",
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginRight: 10,
    borderRadius: 5,
  },
});
