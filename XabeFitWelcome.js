import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const XabeFitWelcome = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        {/* Logo + Text Row */}
        <View style={styles.logoRow}>
          <Image
            source={require('./assets/Logo-small.png')} // Adjust path based on your structure
            style={styles.logoImage}
            resizeMode="contain"
          />
          <Text style={styles.title}>XabeFit</Text>
        </View>

        {/* Landing Photo */}
        <Image
          source={require('./assets/landing-photo.png')}
          style={styles.landingImage}
          resizeMode="contain"
        />

        <Text style={styles.subtitle}>
          Reach your true fitness potential with <Text style={styles.highlight}>Xabe</Text>
        </Text>

        <Text style={styles.description}>
          Where Fitness Meets Innovation: Embark on a Journey of Fitness Exploration with XabeFit
        </Text>

        <TouchableOpacity 
          style={styles.emailButton}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={styles.emailButtonText}>Continue with Email</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.emailButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.emailButtonText}>Sign In</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoImage: {
    width: 32,
    height: 32,
    marginRight: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  landingImage: {
    width: '100%',
    height: 250,
    marginBottom: 30,
    borderRadius: 16,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    marginBottom: 15,
    lineHeight: 28,
  },
  highlight: {
    color: '#FFA300',
  },
  description: {
    fontSize: 16,
    color: '#CDCDE0',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  emailButton: {
    backgroundColor: '#FFA300',
    height: 60,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  emailButtonText: {
    color: '#161622',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default XabeFitWelcome;