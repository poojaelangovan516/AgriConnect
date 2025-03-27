import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // For icons

export default function EditProfileScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
      </View>

      {/* Profile Image with Camera Icon */}
      <View style={styles.profileImageContainer}>
        <TouchableOpacity style={styles.profileImage}>
          <Ionicons name="camera" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Profile Fields */}
      <View style={styles.formContainer}>
        <ProfileField label="Name" value="Sekar" />
        <ProfileField label="Gender" value="Male" />
        <ProfileField label="Email" value="xxxxx@gmail.com" />
        <ProfileField label="Phone no" value="........" />
        <ProfileField label="Location" value="Coimbatore" />
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

/* Reusable Profile Field Component */
/* Reusable Profile Field Component */
const ProfileField: React.FC<{ label: string; value: string }> = ({ label, value }) => {
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput style={styles.input} value={value} editable={false} />
        <TouchableOpacity>
          <Ionicons name="pencil" size={20} color="black" />
        </TouchableOpacity>
      </View>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'green',
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    height: 80,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 20,
  },
  profileImageContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '90%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
    marginBottom: 10,
  },
  label: {
    flex: 1,
    fontSize: 16,
    color: '#777',
  },
  input: {
    flex: 2,
    fontSize: 16,
    color: 'black',
  },
  logoutButton: {
    marginTop: 40,
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


