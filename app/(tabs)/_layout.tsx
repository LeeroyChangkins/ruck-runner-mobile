import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View } from 'react-native';

import { CustomTabBar } from '@/components/ui/CustomTabBar';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { colors } from '@/constants/Styles';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        headerShown: false,
        tabBarStyle: {
          // Make the tab bar background transparent to allow our custom suspended bar to show
          position: 'absolute',
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
      // @ts-ignore - Tab bar props are compatible but TypeScript can't verify
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          // @ts-ignore - Tab bar icon props are compatible
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="jobs"
        options={{
          title: 'Jobs',
          // @ts-ignore - Tab bar icon props are compatible
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol size={28} name="briefcase.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          // @ts-ignore - Tab bar icon props are compatible
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol size={28} name="person.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
