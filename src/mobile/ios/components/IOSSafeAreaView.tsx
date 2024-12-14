import React from 'react';
import { SafeAreaView, StyleSheet, ViewStyle } from 'react-native';

interface IOSSafeAreaViewProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export function IOSSafeAreaView({ children, style }: IOSSafeAreaViewProps) {
  return (
    <SafeAreaView style={[styles.container, style]}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});