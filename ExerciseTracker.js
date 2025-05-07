import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ExerciseTracker = () => {
  const [activeTab, setActiveTab] = useState('current');
  const [exerciseName, setExerciseName] = useState('');
  const [duration, setDuration] = useState('');

  // Sample exercise data
  const exercises = [
    { id: 1, name: 'Bench Press', duration: '30 min', calories: '250', date: 'Today' },
    { id: 2, name: 'Squats', duration: '25 min', calories: '300', date: 'Today' },
    { id: 3, name: 'Deadlifts', duration: '20 min', calories: '280', date: 'Yesterday' },
    { id: 4, name: 'Pull-ups', duration: '15 min', calories: '200', date: '2 days ago' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Exercise Tracker</Text>
          <Text style={styles.subtitle}>Log and monitor your workouts</Text>
        </View>

        {/* Tabs */}
        <View style={styles.tabContainer}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'current' && styles.activeTab]}
            onPress={() => setActiveTab('current')}
          >
            <Text style={[styles.tabText, activeTab === 'current' && styles.activeTabText]}>Current</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'history' && styles.activeTab]}
            onPress={() => setActiveTab('history')}
          >
            <Text style={[styles.tabText, activeTab === 'history' && styles.activeTabText]}>History</Text>
          </TouchableOpacity>
        </View>

        {activeTab === 'current' ? (
          <View style={styles.currentWorkout}>
            <Text style={styles.sectionTitle}>Log New Exercise</Text>
            
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Exercise Name</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g. Bench Press"
                placeholderTextColor="#7F7F9D"
                value={exerciseName}
                onChangeText={setExerciseName}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Duration (minutes)</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g. 30"
                placeholderTextColor="#7F7F9D"
                keyboardType="numeric"
                value={duration}
                onChangeText={setDuration}
              />
            </View>

            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>Add Exercise</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.historyContainer}>
            {exercises.map((exercise) => (
              <View key={exercise.id} style={styles.exerciseCard}>
                <View style={styles.exerciseInfo}>
                  <Text style={styles.exerciseName}>{exercise.name}</Text>
                  <Text style={styles.exerciseDetail}>Duration: {exercise.duration}</Text>
                  <Text style={styles.exerciseDetail}>Calories: {exercise.calories}</Text>
                </View>
                <Text style={styles.exerciseDate}>{exercise.date}</Text>
              </View>
            ))}
          </View>
        )}
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
    padding: 20,
    paddingBottom: 80,
  },
  header: {
    marginBottom: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF8C00',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#CDCDE0',
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#232533',
    borderRadius: 10,
    padding: 5,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: '#FF8C00',
  },
  tabText: {
    color: '#CDCDE0',
    fontWeight: '600',
  },
  activeTabText: {
    color: '#161622',
  },
  currentWorkout: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    color: '#CDCDE0',
    marginBottom: 8,
    fontSize: 14,
  },
  input: {
    backgroundColor: '#232533',
    borderRadius: 10,
    padding: 14,
    color: 'white',
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#FF8C00',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: '#161622',
    fontWeight: 'bold',
    fontSize: 16,
  },
  historyContainer: {
    marginTop: 10,
  },
  exerciseCard: {
    backgroundColor: '#232533',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  exerciseInfo: {
    flex: 1,
  },
  exerciseName: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  exerciseDetail: {
    color: '#CDCDE0',
    fontSize: 14,
    marginBottom: 4,
  },
  exerciseDate: {
    color: '#FF8C00',
    fontSize: 14,
  },
});

export default ExerciseTracker;