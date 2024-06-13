import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as Splashscreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import {
  Onboarding,
  PlaceDetailsScreen,
  HotelSearchScreen,
  HotelDetailScreen,
  HotelListScreen,
  RecommendationsPage,
  Search,
  CountryDetailes,
  SelectionRoom,
  Payments,
  Settings,
  SuccessBooking,
  FailedBooking,
  SelectedRoom,
} from './screens/index';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='onboarding'
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='BottomTabNavigation'
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Search'
          component={Search}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Detailes'
          component={CountryDetailes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='RecommendationsPage'
          component={RecommendationsPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='PlaceDetailsScreen'
          component={PlaceDetailsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='HotelDetailScreen'
          component={HotelDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='HotelListScreen'
          component={HotelListScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='HotelSearchScreen'
          component={HotelSearchScreen}
          options={{ headerShown: false }}
        />
        {/* Creating Screen inside Stack Navigator
     as we want to navigate to SelectRoom page */}
        <Stack.Screen
          name='RoomSelectionScreen'
          component={SelectionRoom}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Payments'
          component={Payments}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Settings'
          component={Settings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='SuccessBooking'
          component={SuccessBooking}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='FailedBooking'
          component={FailedBooking}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='SelectedRoom'
          component={SelectedRoom}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
