import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useTheme } from 'react-native-paper';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const theme = useTheme()
  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarActiveBackgroundColor: theme.colors.primaryContainer,
        tabBarInactiveBackgroundColor: theme.colors.inversePrimary,
        tabBarActiveTintColor: theme.colors.onPrimaryContainer,
        tabBarInactiveTintColor: theme.colors.onPrimaryContainer
      }}>
      <Tabs.Screen
        name="present"
        options={{
          title: 'Present',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'Past',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'time' : 'time-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
          ),
        }}
      />
     
     
     
    </Tabs>
  );
}
