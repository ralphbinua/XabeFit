import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';

const WorkoutPlansPage = ({ navigation }) => {
  // Sample workout plans data
  const workoutPlans = [
    {
      id: 1,
      title: 'Beginner Full Body',
      duration: '4 weeks',
      difficulty: 'Easy',
      image: require('./assets/beginner-workout.png') // Replace with your image
    },
    {
      id: 2,
      title: 'Intermediate Strength',
      duration: '6 weeks',
      difficulty: 'Medium',
      image: require('./assets/intermediate-workout.jpg') // Replace with your image
    },
    {
      id: 3,
      title: 'Advanced HIIT',
      duration: '8 weeks',
      difficulty: 'Hard',
      image: require('./assets/advanced-workout.jpg') // Replace with your image
    },
    {
      id: 4,
      title: 'Yoga & Mobility',
      duration: '4 weeks',
      difficulty: 'Easy',
      image: require('./assets/yoga-workout.jpg') // Replace with your image
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.pageTitle}>Workout Plans</Text>
          <Text style={styles.pageSubtitle}>Choose your fitness journey</Text>
        </View>

        <View style={styles.plansContainer}>
          {workoutPlans.map((plan) => (
            <TouchableOpacity 
              key={plan.id} 
              style={styles.planCard}
              onPress={() => navigation.navigate('WorkoutPlanDetail', { plan })}
            >
              <Image source={plan.image} style={styles.planImage} />
              <View style={styles.planInfo}>
                <Text style={styles.planTitle}>{plan.title}</Text>
                <View style={styles.planMeta}>
                  <Text style={styles.planMetaText}>{plan.duration}</Text>
                  <Text style={styles.planMetaText}>•</Text>
                  <Text style={styles.planMetaText}>{plan.difficulty}</Text>
                </View>
              </View>
              <View style={styles.planOverlay} />
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
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 16,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF8C00',
    marginBottom: 8,
  },
  pageSubtitle: {
    fontSize: 16,
    color: '#CDCDE0',
  },
  plansContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  planCard: {
    height: 180,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    position: 'relative',
  },
  planImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  planInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    zIndex: 2,
  },
  planTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  planMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  planMetaText: {
    fontSize: 14,
    color: '#CDCDE0',
    marginRight: 8,
  },
  planOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 1,
  },
});

export default WorkoutPlansPage;