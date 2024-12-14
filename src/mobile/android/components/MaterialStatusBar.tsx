import React from 'react';
import { View, StatusBar, StyleSheet, Platform } from 'react-native';

interface MaterialStatusBarProps {
  backgroundColor?: string;
  barStyle?: 'default' | 'light-content' | 'dark-content';
}

export function MaterialStatusBar({ 
  backgroundColor = '#6200EE',
  barStyle = 'light-content'
}: MaterialStatusBarProps) {
  if (Platform.OS !== 'android') return null;

  return (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <StatusBar
        backgroundColor={backgroundColor}
        barStyle={barStyle}
        translucent
      />
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    height: StatusBar.currentHeight,
  },
});