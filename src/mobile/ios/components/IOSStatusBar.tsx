import React from 'react';
import { View, StatusBar, StyleSheet, Platform } from 'react-native';

interface IOSStatusBarProps {
  backgroundColor?: string;
  barStyle?: 'default' | 'light-content' | 'dark-content';
}

export function IOSStatusBar({ 
  backgroundColor = '#FFFFFF',
  barStyle = 'dark-content'
}: IOSStatusBarProps) {
  if (Platform.OS !== 'ios') return null;

  return (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <StatusBar
        barStyle={barStyle}
        backgroundColor={backgroundColor}
        translucent
      />
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    height: Platform.OS === 'ios' ? 44 : 0,
  },
});