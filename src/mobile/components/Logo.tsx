import React from 'react';
import { Image, StyleSheet, ViewStyle } from 'react-native';

interface LogoProps {
  size?: number;
  style?: ViewStyle;
}

export function Logo({ size = 40, style }: LogoProps) {
  return (
    <Image
      source={{ uri: 'https://raw.githubusercontent.com/yourusername/ixhare/main/public/logo.png' }}
      style={[styles.logo, { width: size, height: size }, style]}
    />
  );
}

const styles = StyleSheet.create({
  logo: {
    resizeMode: 'contain',
  },
});