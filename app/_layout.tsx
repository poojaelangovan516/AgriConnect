import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="login" options={{ title: "login" }} />
      <Stack.Screen name="signup" options={{ title: "signup" }} />
      <Stack.Screen name="addProduct" options={{ title: "addProduct" }} />
      <Stack.Screen name="completedOrders" options={{ title: "completedOrders" }} />
      <Stack.Screen name="editProfile" options={{ title: "editProfile" }} />
      <Stack.Screen name="inventory" options={{ title: "inventory" }} />
      <Stack.Screen name="language" options={{ title: "language" }} />
      <Stack.Screen name="menu" options={{ title: "menu" }} />
      <Stack.Screen name="orderDetails" options={{ title: "orderDetails" }} />
      <Stack.Screen name="pendingOrders" options={{ title: "pendingOrders" }} />
      <Stack.Screen name="productList" options={{ title: "productList" }} />
      <Stack.Screen name="settings" options={{ title: "settings" }} />
      <Stack.Screen name="totalOrders" options={{ title: "totalOrders" }} />
      <Stack.Screen name="updateProducts" options={{ title: "updateProducts" }} />
      <Stack.Screen name="productDetails" options={{ title: "productDetails" }} />
    </Stack>
  );
}