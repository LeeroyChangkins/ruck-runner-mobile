import React from 'react';
import { View, StyleSheet, Dimensions, Platform, SafeAreaView } from 'react-native';
import { BlurView } from 'expo-blur';
import { colors } from '@/constants/Styles';

interface SuspendedTabBarProps {
  children: React.ReactNode;
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const TAB_BAR_WIDTH = SCREEN_WIDTH * 0.85; // 85% of screen width

export function SuspendedTabBar({ children }: SuspendedTabBarProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.tabBarWrapper}>
          {/* iOS uses BlurView for a frosted glass effect */}
          {Platform.OS === 'ios' ? (
            <BlurView intensity={30} tint="dark" style={styles.tabBar}>
              <View style={styles.content}>{children}</View>
            </BlurView>
          ) : (
            // Android and other platforms use a solid background
            <View style={[styles.tabBar, styles.tabBarAndroid]}>
              <View style={styles.content}>{children}</View>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 0,
  },
  tabBarWrapper: {
    width: TAB_BAR_WIDTH,
    alignItems: 'center',
    // marginBottom: 10,
  },
  tabBar: {
    width: '100%',
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    flexDirection: 'row',
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  tabBarAndroid: {
    backgroundColor: colors.secondary,
    elevation: 8, // Shadow for Android
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
}); 