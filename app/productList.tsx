import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { baseUrl } from "@/constants/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width } = Dimensions.get("window");
const cardWidth = (width - 40) / 2;

type ProductType = {
  id: number;
  userId: number;
  userName: string;
  name: string;
  price: number;
  discount: number;
  offerPrice: number;
  priceType: string;
  noOfReviews: number;
  rating: number;
  availableQuantity: number;
  img: string;
  description: string;
  category: string;
  categoryId: number;
};

export default function ProductsScreen() {
  const router = useRouter();
  const { t } = useTranslation();
  const [productsData, setProductsData] = useState<ProductType[]>([]);

  const getProducts = async () => {
    try {
      const userId = await AsyncStorage.getItem("user");
      const response = await axios.get(`${baseUrl}product/user/${userId}`);
      const data: ProductType[] = response.data;
      setProductsData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleProductPress = (product: ProductType) => {
    router.push({
      pathname: "/productDetails",
      params: {
        id: product.id,
        name: product.name,
        quantity: product.availableQuantity,
        price: product.offerPrice || product.price,
        image: product.img,
        market: product.userId,
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t("products")}</Text>
      </View>

      <View style={styles.banner}>
        <Text style={styles.bannerText}>Fresh Products Ready</Text>
        <Image
          source={require("../assets/images/banner.jpg")}
          style={styles.bannerImage}
        />
      </View>

      <Text style={styles.sectionTitle}>{t("sellYourHarvestDirectly")}</Text>

      <FlatList
        data={productsData}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleProductPress(item)}
            style={styles.card}
          >
            <Image source={{ uri: item.img }} style={styles.productImage} />
            <Text style={styles.productName} numberOfLines={1}>
              {item.name}
            </Text>
            <Text style={styles.productInfo}>
              {t("available")}: {item.availableQuantity}
            </Text>
            <Text style={styles.productPrice}>
              {t("price")}: ₹{item.offerPrice || item.price}
            </Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "green",
    paddingVertical: 15,
    paddingHorizontal: 20,
    height: 80,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginLeft: 20,
  },
  banner: {
    margin: 16,
    borderRadius: 12,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  bannerText: { fontSize: 16, flex: 1, fontWeight: "600" },
  bannerImage: {
    width: 100,
    height: 70,
    resizeMode: "contain",
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 16,
    marginBottom: 8,
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingBottom: 80,
  },
  card: {
    width: cardWidth,
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 8,
    margin: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    height: 160,
  },
  productImage: {
    width: 55,
    height: 55,
    resizeMode: "cover",
    marginBottom: 6,
    borderRadius: 6,
  },
  productName: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 2,
    textAlign: "center",
  },
  productInfo: {
    fontSize: 12,
    color: "#555",
  },
  productPrice: {
    fontSize: 12,
    color: "#000",
    fontWeight: "bold",
  },
});
