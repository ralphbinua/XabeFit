import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProgressAnalytics = () => {
  // Sample progress data
  const progressData = [
    { metric: 'Workouts Completed', value: '24', change: '+12%' },
    { metric: 'Active Minutes', value: '1,245', change: '+8%' },
    { metric: 'Calories Burned', value: '18,752', change: '+15%' },
    { metric: 'Current Streak', value: '7 days', change: '+3' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Progress & Analytics</Text>
          <Text style={styles.subtitle}>Track your fitness journey</Text>
        </View>

        <View style={styles.statsContainer}>
          {progressData.map((item, index) => (
            <View key={index} style={styles.statCard}>
              <Text style={styles.statMetric}>{item.metric}</Text>
              <View style={styles.statValueContainer}>
                <Text style={styles.statValue}>{item.value}</Text>
                <Text style={styles.statChange}>{item.change}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.chartPlaceholder}>
          <Ionicons name="stats-chart" size={60} color="#FF8C00" />
          <Text style={styles.chartText}>Your progress chart</Text>
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
    padding: 20,
    paddingBottom: 80, // Space for bottom nav
  },
  header: {
    marginBottom: 30,
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
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  statCard: {
    width: '48%',
    backgroundColor: '#232533',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  statMetric: {
    fontSize: 14,
    color: '#CDCDE0',
    marginBottom: 8,
  },
  statValueContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 8,
  },
  statChange: {
    fontSize: 14,
    color: '#4CAF50', // Green for positive change
    marginBottom: 4,
  },
  chartPlaceholder: {
    height: 200,
    backgroundColor: '#232533',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartText: {
    color: '#CDCDE0',
    marginTop: 12,
  },
});

export default ProgressAnalytics;