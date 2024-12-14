import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { ArrowLeft, MoreVertical } from 'lucide-react-native';

interface MaterialToolbarProps {
  title: string;
  onBack?: () => void;
  onMenu?: () => void;
  actions?: React.ReactNode;
}

export function MaterialToolbar({ 
  title, 
  onBack, 
  onMenu,
  actions 
}: MaterialToolbarProps) {
  if (Platform.OS !== 'android') return null;

  return (
    <View style={styles.toolbar}>
      {onBack && (
        <TouchableOpacity onPress={onBack} style={styles.iconButton}>
          <ArrowLeft size={24} color="#FFFFFF" />
        </TouchableOpacity>
      )}
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <View style={styles.actions}>
        {actions}
        {onMenu && (
          <TouchableOpacity onPress={onMenu} style={styles.iconButton}>
            <MoreVertical size={24} color="#FFFFFF" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  toolbar: {
    height: 56,
    backgroundColor: '#6200EE',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    elevation: 4,
  },
  iconButton: {
    padding: 12,
  },
  title: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 16,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});