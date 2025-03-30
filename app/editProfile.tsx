import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function EditProfileScreen() {
  const router = useRouter();
  
  const [editableField, setEditableField] = useState(null);
  const [profile, setProfile] = useState({
    name: 'Sekar',
    gender: 'Male',
    email: 'xxxxx@gmail.com',
    phone: '........',
    location: 'Coimbatore'
  });

  const handleEdit = (field) => {
    setEditableField(field);
  };

  const handleChange = (field, value) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [field]: value
    }));
  };

  const handleDone = () => {
    setEditableField(null); // Exit edit mode
    console.log('Updated Profile:', profile); // Check updated values in console
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
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
        {Object.keys(profile).map((field) => (
          <ProfileField
            key={field}
            label={field.charAt(0).toUpperCase() + field.slice(1)}
            value={profile[field]}
            editable={editableField === field}
            onEdit={() => handleEdit(field)}
            onChange={(text) => handleChange(field, text)}
          />
        ))}
      </View>

      {/* Done Button */}
      <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
        <Text style={styles.doneText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}

// Reusable Profile Field Component
const ProfileField = ({ label, value, editable, onEdit, onChange }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, editable && styles.editableInput]}
        value={value}
        editable={editable}
        onChangeText={onChange}
        autoFocus={editable}
      />
      {!editable && (
        <TouchableOpacity onPress={onEdit}>
          <Ionicons name="pencil" size={20} color="black" />
        </TouchableOpacity>
      )}
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
  editableInput: {
    borderBottomWidth: 2,
    borderBottomColor: 'green',
  },
  doneButton: {
    marginTop: 40,
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  doneText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;
