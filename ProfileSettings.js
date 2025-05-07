import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileSettings = ({ navigation }) => {
  // User data
  const user = {
    name: "Binua, Ralph Gabriel B.",
    handle: "@lrph_blnd",
    avatar: require('./assets/profile.jpg') 
  };

  // Menu items
  const menuItems = [
    { title: "Ralph Gabriel Binua", icon: "person" },
    { title: "Notifications", icon: "notifications" },
    { title: "Sovrad", icon: "lock-closed" },
    { title: "Setting", icon: "settings" }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.pageTitle}>Profile & Settings</Text>
        </View>

        <View style={styles.profileSection}>
          <Image source={user.avatar} style={styles.avatar} />
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userHandle}>{user.handle}</Text>
        </View>

        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.menuItem}
              onPress={() => console.log(item.title + " pressed")}
            >
              <View style={styles.menuIconContainer}>
                <Ionicons name={item.icon} size={20} color="#FF8C00" />
              </View>
              <Text style={styles.menuText}>{item.title}</Text>
              <Ionicons name="chevron-forward" size={18} color="#CDCDE0" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161622',
  },
  scrollContainer: {
    paddingBottom: 30,
  },
  header: {
    padding: 24,
    paddingBottom: 16,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF8C00',
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#232533',
    marginHorizontal: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#FF8C00',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  userHandle: {
    fontSize: 16,
    color: '#CDCDE0',
  },
  menuContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#232533',
  },
  menuIconContainer: {
    width: 30,
    alignItems: 'center',
    marginRight: 16,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: 'white',
  },
});

export default ProfileSettings;