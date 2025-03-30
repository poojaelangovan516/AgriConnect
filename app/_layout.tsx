import { Stack } from "expo-router";
// import { NavigationContainer } from "@react-navigation/native";

export default function Layout() {
  return (
    // <NavigationContainer>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="login" options={{ title: "Login" }} />
        <Stack.Screen name="signup" options={{ title: "Signup" }} />
        <Stack.Screen name="addProduct" options={{ title: "Add Product" }} />
        <Stack.Screen name="completedOrders" options={{ title: "Completed Orders" }} />
        <Stack.Screen name="editProfile" options={{ title: "Edit Profile" }} />
        <Stack.Screen name="inventory" options={{ title: "Inventory" }} />
        <Stack.Screen name="language" options={{ title: "Language" }} />
        <Stack.Screen name="menu" options={{ title: "Menu" }} />
        <Stack.Screen name="orderDetails" options={{ title: "Order Details" }} />
        <Stack.Screen name="pendingOrders" options={{ title: "Pending Orders" }} />
        <Stack.Screen name="productList" options={{ title: "Product List" }} />
        <Stack.Screen name="settings" options={{ title: "Settings" }} />
        <Stack.Screen name="TotalOrders" options={{ title: "Total Orders" }} />
        <Stack.Screen name="updateProduct" options={{ title: "Update Products" }} />
        <Stack.Screen name="productDetails" options={{ title: "Product Details" }} />
        <Stack.Screen name="homePage" options={{ title: "homePage" }} />
        <Stack.Screen name="analytics" options={{ title: "analytics" }} />
        <Stack.Screen name="mobilepassword" options={{ title: "mobilepassword" }} />
        <Stack.Screen name="emailpassword" options={{ title: "emailpassword" }} />
        <Stack.Screen name="trackpending" options={{ title: "trackpending" }} />
        <Stack.Screen name="trackcompleted" options={{ title: "trackcompleted" }} />
        <Stack.Screen name="mailotp" options={{ title: "mailotp" }} />
        <Stack.Screen name="mobileotp" options={{ title: "mobileotp" }} />
        <Stack.Screen name="confirmpasswrd" options={{ title: "confirmpasswrd" }} />
      </Stack>
    // </NavigationContainer>
  );
}
