import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useTranslation } from "react-i18next";

export default function ProductDetails() {
  const router = useRouter();
  const { t } = useTranslation();
  const { id, name, quantity, price, color, image, market } =
    useLocalSearchParams();

  useEffect(() => {
    console.log(name);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <FontAwesome name="arrow-left" size={20} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.editButton}
        onPress={() =>
          router.push({
            pathname: "/updateProduct",
            params: { id, name, quantity, price, color, image },
          })
        }
      >
        <FontAwesome name="pencil" size={20} color="black" />
      </TouchableOpacity>

      <Image
        source={require("../assets/images/fallbackProduct.jpg")}
        style={styles.image}
      />

      <Text style={styles.title}>{name}</Text>

      <Text style={styles.description}>
        {t("productDescription", { name })}
      </Text>

      <View style={styles.priceContainer}>
        <Text style={styles.marketPrice}>
          {t("marketPrice")}
          {"\n"}
          <Text style={styles.price}>₹{market}/kg</Text>
        </Text>
        <Text style={styles.yourPrice}>
          {t("yourPrice")}
          {"\n"}
          <Text style={styles.price}>₹{price}/kg</Text>
        </Text>
      </View>

      <Text style={styles.quantityText}>
        {t("availableQuantity")}: {quantity} kg
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 10,
    zIndex: 10,
  },
  editButton: {
    position: "absolute",
    top: 20,
    right: 10,
    zIndex: 10,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    marginVertical: 20,
    color: "#555",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  marketPrice: {
    fontSize: 14,
    color: "black",
  },
  yourPrice: {
    fontSize: 14,
    color: "black",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  quantityText: {
    fontSize: 16,
    color: "#333",
    marginTop: 10,
  },
});
