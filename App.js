import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import all your screens
import SplashScreen from './SplashScreen'; // 👈 ADD THIS
import XabeFitWelcome from './XabeFitWelcome';
import XabeFitSignup from './XabeFitSignup';
import XabeFitLogin from './XabeFitLogin';
import SocMedIntegration from './SocMedIntegration';
import WorkoutPlansPage from './WorkoutPlansPage';
import ProfileSettings from './ProfileSettings';
import ExerciseTracker from './ExerciseTracker';
import ProgressAnalytics from './ProgressAnalytics';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainAppTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Workout') iconName = focused ? 'barbell' : 'barbell-outline';
          else if (route.name === 'Tracker') iconName = focused ? 'fitness' : 'fitness-outline';
          else if (route.name === 'Progress') iconName = focused ? 'stats-chart' : 'stats-chart-outline';
          else if (route.name === 'Profile') iconName = focused ? 'person' : 'person-outline';
          else if (route.name === 'Social') iconName = focused ? 'people' : 'people-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FF8C00',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarStyle: {
          backgroundColor: '#161622',
          borderTopColor: '#232533',
          paddingTop: 10,
          height: 70,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Workout" component={WorkoutPlansPage} />
      <Tab.Screen name="Tracker" component={ExerciseTracker} />
      <Tab.Screen name="Progress" component={ProgressAnalytics} />
      <Tab.Screen name="Profile" component={ProfileSettings} />
      <Tab.Screen name="Social" component={SocMedIntegration} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash" // 👈 Start with splash screen
        screenOptions={{
          gestureEnabled: true,
          cardStyle: { backgroundColor: '#161622' },
        }}
      >
        {/* Splash Screen */}
        <Stack.Screen 
          name="Splash" 
          component={SplashScreen} 
          options={{ headerShown: false }} 
        />

        {/* Auth Screens */}
        <Stack.Screen 
          name="Welcome" 
          component={XabeFitWelcome} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Signup" 
          component={XabeFitSignup} 
          options={{ headerShown: false, gestureDirection: 'horizontal' }} 
        />
        <Stack.Screen 
          name="Login" 
          component={XabeFitLogin} 
          options={{ headerShown: false, gestureDirection: 'horizontal' }} 
        />

        {/* Main Tabs */}
        <Stack.Screen 
          name="MainApp" 
          component={MainAppTabs} 
          options={{ headerShown: false, gestureEnabled: false }} 
        />

        {/* Extra Screens */}
        <Stack.Screen 
          name="ProgressAnalytics" 
          component={ProgressAnalytics} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="ExerciseTracker" 
          component={ExerciseTracker} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
