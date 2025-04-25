import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useTranslation } from "react-i18next";

export default function ProductDetails() {
  const router = useRouter();
  const { t } = useTranslation();
  const { id, name, quantity, price, color, image, market } =
    useLocalSearchParams();

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <FontAwesome name="arrow-left" size={20} color="black" />
      </TouchableOpacity>

      {/* Edit Button */}
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

      {/* Product Image */}
      <Image
        source={require("../assets/images/tomato.jpg")}
        style={styles.image}
      />

      {/* Product Name */}
      <Text style={styles.title}>{name}</Text>

      {/* Description */}
      <Text style={styles.description}>
        {t("productDescription", { name })}
      </Text>

      {/* Pricing Section */}
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

      {/* Reviews Section */}
      <Text style={styles.reviewTitle}>{t("productReviews")}</Text>
      <View style={styles.reviewContainer}>
        <View style={styles.reviewerInfo}>
          <View style={styles.profileIcon}>
            <Text style={styles.initial}>K</Text>
          </View>
          <Text style={styles.reviewerName}>Karunan</Text>
        </View>
        <View style={styles.starContainer}>
          {[...Array(4)].map((_, index) => (
            <FontAwesome key={index} name="star" size={16} color="gold" />
          ))}
          <FontAwesome name="star-o" size={16} color="gold" />
        </View>
        <Text style={styles.reviewText}>{t("reviewText")}</Text>
      </View>
    </View>
  );
}

// Styles
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
  reviewTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  reviewContainer: {
    marginTop: 10,
  },
  reviewerInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  initial: {
    color: "white",
    fontWeight: "bold",
  },
  reviewerName: {
    marginLeft: 10,
    fontWeight: "bold",
  },
  starContainer: {
    flexDirection: "row",
    marginVertical: 5,
  },
  reviewText: {
    fontSize: 16,
  },
});
