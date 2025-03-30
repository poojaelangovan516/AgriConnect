import { Stack } from "expo-router";
// import { NavigationContainer } from "@react-navigation/native";

export default function Layout() {
  return (
    // <NavigationContainer>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Home", headerShown: false }} />
        <Stack.Screen name="login" options={{ title: "Login", headerShown: false }} />
        <Stack.Screen name="signup" options={{ title: "Signup", headerShown: false }} />
        <Stack.Screen name="addProduct" options={{ title: "Add Product", headerShown: false }} />
        <Stack.Screen name="completedOrders" options={{ title: "Completed Orders", headerShown: false }} />
        <Stack.Screen name="editProfile" options={{ title: "Edit Profile", headerShown: false }} />
        <Stack.Screen name="inventory" options={{ title: "Inventory", headerShown: false }} />
        <Stack.Screen name="language" options={{ title: "Language", headerShown: false }} />
        <Stack.Screen name="menu" options={{ title: "Menu", headerShown: false }} />
        <Stack.Screen name="orderDetails" options={{ title: "Order Details", headerShown: false }} />
        <Stack.Screen name="pendingOrders" options={{ title: "Pending Orders", headerShown: false }} />
        <Stack.Screen name="productList" options={{ title: "Product List", headerShown: false }} />
        <Stack.Screen name="settings" options={{ title: "Settings", headerShown: false }} />
        <Stack.Screen name="TotalOrders" options={{ title: "Total Orders", headerShown: false }} />
        <Stack.Screen name="updateProduct" options={{ title: "Update Products", headerShown: false }} />
        <Stack.Screen name="productDetails" options={{ title: "Product Details", headerShown: false }} />
        <Stack.Screen name="homePage" options={{ title: "homePage", headerShown: false }} />
        <Stack.Screen name="analytics" options={{ title: "analytics", headerShown: false }} />
        <Stack.Screen name="mobilepassword" options={{ title: "mobilepassword", headerShown: false }} />
        <Stack.Screen name="emailpassword" options={{ title: "emailpassword", headerShown: false }} />
        <Stack.Screen name="trackpending" options={{ title: "trackpending", headerShown: false }} />
        <Stack.Screen name="trackcompleted" options={{ title: "trackcompleted", headerShown: false }} />
        <Stack.Screen name="mailotp" options={{ title: "mailotp", headerShown: false }} />
        <Stack.Screen name="mobileotp" options={{ title: "mobileotp", headerShown: false }} />
        <Stack.Screen name="confirmpasswrd" options={{ title: "confirmpasswrd", headerShown: false }} />
      </Stack>
    // </NavigationContainer>
  );
}
