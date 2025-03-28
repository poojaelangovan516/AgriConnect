import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // For navigation icons
import { FontAwesome5 } from '@expo/vector-icons'; // For camera and edit icon

export default function SettingsScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        {/* Profile Image with Edit Pen */}
        <TouchableOpacity style={styles.profileImageContainer}>
          <FontAwesome5 name="camera" size={24} color="white" />
          <View style={styles.editIcon}>
            <FontAwesome5 name="pen" size={12} color="white" />
          </View>
        </TouchableOpacity>

        {/* Username */}
        <Text style={styles.username}>Sekar</Text>
      </View>

      {/* Account Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <TouchableOpacity style={styles.option}>
          <FontAwesome5 name="user-edit" size={18} color="green" />
          <Text style={styles.optionText}>Edit Profile</Text>
          <Ionicons name="chevron-forward" size={20} color="green" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Ionicons name="lock-closed-outline" size={20} color="green" />
          <Text style={styles.optionText}>Change Password</Text>
          <Ionicons name="chevron-forward" size={20} color="green" />
        </TouchableOpacity>
      </View>

      {/* Preferences Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        <TouchableOpacity style={styles.option}>
          <FontAwesome5 name="language" size={18} color="green" />
          <Text style={styles.optionText}>Languages</Text>
          <Ionicons name="chevron-forward" size={20} color="green" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Ionicons name="notifications-outline" size={20} color="green" />
          <Text style={styles.optionText}>Notification</Text>
          <Ionicons name="chevron-forward" size={20} color="green" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Ionicons name="chatbubble-ellipses-outline" size={20} color="green" />
          <Text style={styles.optionText}>Messages</Text>
          <Ionicons name="chevron-forward" size={20} color="green" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Ionicons name="shield-checkmark-outline" size={20} color="green" />
          <Text style={styles.optionText}>Privacy</Text>
          <Ionicons name="chevron-forward" size={20} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'green',
    paddingVertical: 15,
    paddingHorizontal: 20,
    height: 100,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  profileImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',

  },
  editIcon: {
    position: 'absolute',
    top: 30,
    left: '60%',
    width: 25,
    height: 25,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  section: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
    paddingTop: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#eee',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  optionText: {
    flex: 1,
    fontSize: 14,
    marginLeft: 10,
  },
});
