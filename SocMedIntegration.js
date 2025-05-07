import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const SocMedIntegration = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>SocMed Integration</Text>
        
        <Text style={styles.subHeader}>Social Media Integration</Text>
        
        {/* Facebook Button */}
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="facebook" size={24} color="#3b5998" />
          <Text style={styles.socialButtonText}>Facebook</Text>
        </TouchableOpacity>
        
        {/* Instagram Button */}
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="instagram" size={24} color="#E1306C" />
          <Text style={styles.socialButtonText}>Instagram</Text>
        </TouchableOpacity>
        
        {/* YouTube Button */}
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="youtube" size={24} color="#FF0000" />
          <Text style={styles.socialButtonText}>Youtube</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161622',
    padding: 20,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFA300',
    marginBottom: 10,
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 18,
    color: 'white',
    marginBottom: 30,
    textAlign: 'center',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#232533',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#333',
  },
  socialButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 15,
  },
});

export default SocMedIntegration;