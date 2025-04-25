import React, { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { useTranslation } from "react-i18next";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import { baseUrl } from "@/constants/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AddProduct() {
  const router = useRouter();
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    userId: "",
    name: "",
    price: "",
    discount: "",
    priceType: "",
    availableQuantity: "",
    img: "",
    description: "",
    categoryId: "",
    noOfReviews: 0,
    rating: 0,
  });

  const [category, setCategory] = useState<any[]>([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const response = await await axios.get(baseUrl + "category");
      const data = response.data;
      setCategory(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleChange = (key: string, value: string) => {
    console.log(value);
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const inValidateForm = () => {
    return (
      formData.name === "" ||
      formData.price === "" ||
      formData.priceType === "" ||
      formData.availableQuantity === "" ||
      formData.img === "" ||
      formData.categoryId === "" ||
      formData.description === "" ||
      (formData.priceType === "Offer" && formData.discount === "")
    );
  };

  const handleSubmit = async () => {
    if (inValidateForm()) {
      alert("Please select all fields");
    } else {
      console.log(formData);
      try {
        const userId = await AsyncStorage.getItem("user");
        const validUserId = userId !== null ? userId : "";
        setFormData((prev) => ({ ...prev, userId: validUserId }));
        const res = await axios.post(baseUrl + "product", formData);
        if (res.status === 201) {
          alert("Success");
          router.push("/homePage");
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/logo_img.png")}
          style={{ width: 100, height: 100 }}
        />
        <Text style={styles.title}>{t("agriConnect")}</Text>
      </View>

      <Text style={styles.registerText}>{t("addFarmFreshProducts")}</Text>

      {/* Product Name Field */}
      <Text style={styles.label}>{t("productName")}</Text>
      <TextInput
        style={styles.input}
        placeholder={t("productName")}
        value={formData.name}
        onChangeText={(text) => handleChange("name", text)}
        placeholderTextColor="#555"
      />

      {/* Price Field */}
      <Text style={styles.label}>{t("price")}</Text>
      <TextInput
        style={styles.input}
        placeholder={t("price")}
        value={formData.price}
        onChangeText={(text) => handleChange("price", text)}
        keyboardType="numeric"
        placeholderTextColor="#555"
      />

      {/* Price Type Picker (Fixed or Offer) */}
      <Text style={styles.label}>{t("priceType")}</Text>
      <Picker
        selectedValue={formData.priceType}
        style={styles.picker}
        onValueChange={(itemValue) => handleChange("priceType", itemValue)}
      >
        <Picker.Item label={t("selectPriceType")} value="" />
        <Picker.Item label="Fixed" value="fixed" />
        <Picker.Item label="Offer" value="offer" />
      </Picker>

      {/* Show discount input only if priceType is "Offer" */}
      {formData.priceType === "offer" && (
        <>
          <Text style={styles.label}>{t("discount")}</Text>
          <TextInput
            style={styles.input}
            placeholder={t("discount")}
            value={formData.discount}
            onChangeText={(text) => handleChange("discount", text)}
            keyboardType="numeric"
            placeholderTextColor="#555"
          />
        </>
      )}

      {/* Quantity Field */}
      <Text style={styles.label}>{t("quantity")}</Text>
      <TextInput
        style={styles.input}
        placeholder={t("quantity")}
        value={formData.availableQuantity}
        onChangeText={(text) => handleChange("availableQuantity", text)}
        keyboardType="numeric"
        placeholderTextColor="#555"
      />

      {/* Image URL Field */}
      <Text style={styles.label}>{t("imageUrl")}</Text>
      <TextInput
        style={styles.input}
        placeholder={t("imageUrl")}
        value={formData.img}
        onChangeText={(text) => handleChange("img", text)}
        placeholderTextColor="#555"
      />

      {/* Category Picker */}
      <Text style={styles.label}>{t("category")}</Text>
      <Picker
        selectedValue={formData.categoryId}
        style={styles.picker}
        onValueChange={(itemValue) => handleChange("categoryId", itemValue)}
      >
        {category.length > 0 ? (
          <>
            <Picker.Item label={t("selectCategory")} value="" />
            {category.map((categoryItem) => (
              <Picker.Item
                key={categoryItem.id}
                label={categoryItem.name}
                value={categoryItem.id}
              />
            ))}
          </>
        ) : (
          <Picker.Item label={t("loadingCategories")} value="" />
        )}
      </Picker>

      {/* Description Field */}
      <Text style={styles.label}>{t("description")}</Text>
      <TextInput
        style={styles.description}
        placeholder={t("description")}
        value={formData.description}
        onChangeText={(text) => handleChange("description", text)}
        placeholderTextColor="#555"
        multiline
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.signUpButton} onPress={handleSubmit}>
        <Text style={styles.signUpText}>{t("addProduct")}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-start", // Align content to top
    backgroundColor: "#ffffff",
    paddingBottom: 20, // Add space at the bottom
  },
  logoContainer: {
    backgroundColor: "green",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    marginBottom: 40,
    marginTop: -80,
    height: 250,
  },
  picker: {
    width: "80%",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 10,
    padding: 5,
    color: "#555",
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginTop: 10,
  },
  registerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 15,
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 10,
    marginBottom: 15,
  },
  description: {
    width: "80%",
    padding: 15,
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 10,
    marginBottom: 15,
    height: 140,
    textAlignVertical: "top",
  },
  label: {
    width: "80%",
    fontSize: 16,
    color: "green",
    marginBottom: 5,
    textAlign: "left",
  },
  signUpButton: {
    backgroundColor: "green",
    padding: 15,
    width: "80%",
    alignItems: "center",
    borderRadius: 10,
  },
  signUpText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  signInText: {
    marginTop: 20,
    fontSize: 16,
  },
});
