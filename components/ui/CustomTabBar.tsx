import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { SuspendedTabBar } from './SuspendedTabBar';
import { HapticTab } from '@/components/HapticTab';
import { router } from 'expo-router';
import { colors } from '@/constants/Styles';

// Define our own simplified version of the tab bar props
interface CustomTabBarProps {
  state: {
    index: number;
    routes: Array<{
      key: string;
      name: string;
    }>;
  };
  descriptors: {
    [key: string]: {
      options: {
        tabBarIcon?: (props: { focused: boolean; color: string; size?: number }) => React.ReactNode;
        tabBarButton?: any;
        tabBarActiveTintColor?: string;
        href?: string | null;
        title?: string;
      };
    };
  };
  navigation: {
    emit: (event: { type: string; target?: string; canPreventDefault?: boolean }) => any;
    navigate: (name: string, params?: any) => void;
  };
}

export function CustomTabBar({ state, descriptors, navigation }: CustomTabBarProps) {
  return (
    <SuspendedTabBar>
      {state.routes.map((route, index) => {
        // Skip rendering hidden tabs
        const { options } = descriptors[route.key];
        if (options.href === null) {
          return null;
        }

        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate(route.name, { merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        // Use the custom HapticTab for wrapping icon and handling haptic feedback
        if (options.tabBarIcon) {
          const TabButton = options.tabBarButton || HapticTab;
          
          return (
            <TabButton
              key={route.key}
              route={route}
              onPress={onPress}
              onLongPress={onLongPress}
              isFocused={isFocused}
            >
              <View style={[
                styles.tabItem,
                isFocused && styles.activeTabItem
              ]}>
                {options.tabBarIcon({
                  focused: isFocused,
                  color: isFocused ? colors.secondary : colors.text,
                  size: 28,
                })}
              </View>
            </TabButton>
          );
        }

        return null;
      })}
    </SuspendedTabBar>
  );
}

const styles = StyleSheet.create({
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: 56,
    height: 40,
    borderRadius: 20,
  },
  activeTabItem: {
    backgroundColor: colors.primary,
  }
}); 