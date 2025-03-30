import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { menuItems } from './menufile';

export default function MenuScreen() {
  const router = useRouter();

  const handleNavigation = (route: any) => {
    router.push(route);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
                  <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
        <Text style={styles.headerText}>Menu</Text>
      </View>

      {/* Menu List */}
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigation(item.route)}>
            <View style={styles.textContainer}>
              <Text style={styles.menuTitle}>{item.title}</Text>
              <Text style={styles.menuDescription}>{item.description}</Text>
            </View>
            <Image source={item.icon} style={styles.icon} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'green',
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    height: 110,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 20,
    marginTop: 10,
  },
  textContainer: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuDescription: {
    fontSize: 14,
    color: '#777',
  },
  icon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
});

// Ensure your menuItems array in 'menufile.js' contains the correct routes:
// Example:
// export const menuItems = [
//   { id: '1', title: 'Inventory', description: 'Manage inventory', icon: require('../assets/inventory.png'), route: '/inventory' },
//   { id: '2', title: 'Completed Orders', description: 'View past orders', icon: require('../assets/completed.png'), route: '/completedOrders' },
//   { id: '3', title: 'Settings', description: 'Change app settings', icon: require('../assets/settings.png'), route: '/settings' },
// ];
