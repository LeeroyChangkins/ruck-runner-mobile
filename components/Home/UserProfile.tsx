import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { colors } from '@/constants/Styles';

interface UserProfileProps {
  name: string;
  avatarUrl?: string;
}

export function UserProfile({ name, avatarUrl }: UserProfileProps) {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        {avatarUrl ? (
          <Image source={{ uri: avatarUrl }} style={styles.avatar} />
        ) : (
          <View style={styles.avatarPlaceholder}>
            <Text style={styles.avatarInitial}>{name.charAt(0)}</Text>
          </View>
        )}
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.hello}>Hello</Text>
        <Text style={styles.name}>{name}!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarContainer: {
    marginRight: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  avatarPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarInitial: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  nameContainer: {
    flexDirection: 'column',
  },
  hello: {
    fontSize: 14,
    color: colors.lightTextSecondary,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.lightText,
  },
}); 