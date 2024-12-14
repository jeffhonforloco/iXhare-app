import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';
import { AuthProvider } from '../context/AuthContext';
import { BookingProvider } from '../context/BookingContext';
import { ExperiencesScreen } from './screens/ExperiencesScreen';
import { ExperienceDetailsScreen } from './screens/ExperienceDetailsScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { BookingScreen } from './screens/BookingScreen';

// Platform-specific components
import { IOSStatusBar } from './ios/components/IOSStatusBar';
import { MaterialStatusBar } from './android/components/MaterialStatusBar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <BookingProvider>
        <NavigationContainer>
          {Platform.OS === 'ios' ? <IOSStatusBar /> : <MaterialStatusBar />}
          <Stack.Navigator initialRouteName="Experiences">
            <Stack.Screen name="Experiences" component={ExperiencesScreen} />
            <Stack.Screen name="ExperienceDetails" component={ExperienceDetailsScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Booking" component={BookingScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </BookingProvider>
    </AuthProvider>
  );
}