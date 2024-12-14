import React from 'react';
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  ActivityIndicator,
  Platform,
  ViewStyle,
  TextStyle 
} from 'react-native';

interface MaterialButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary';
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export function MaterialButton({ 
  title,
  onPress,
  variant = 'contained',
  color = 'primary',
  disabled = false,
  loading = false,
  style,
  textStyle,
}: MaterialButtonProps) {
  if (Platform.OS !== 'android') return null;

  const buttonStyles = [
    styles.button,
    styles[variant],
    styles[`${variant}${color}`],
    disabled && styles.disabled,
    style,
  ];

  const textStyles = [
    styles.text,
    styles[`${variant}Text`],
    disabled && styles.disabledText,
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled || loading}
      android_ripple={{ color: 'rgba(0, 0, 0, 0.12)' }}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'contained' ? '#FFFFFF' : '#6200EE'} />
      ) : (
        <Text style={textStyles}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 8,
    minWidth: 64,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  contained: {
    backgroundColor: '#6200EE',
  },
  containedprimary: {
    backgroundColor: '#6200EE',
  },
  containedsecondary: {
    backgroundColor: '#03DAC6',
  },
  outlined: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#6200EE',
    elevation: 0,
  },
  outlinedprimary: {
    borderColor: '#6200EE',
  },
  outlinedsecondary: {
    borderColor: '#03DAC6',
  },
  text: {
    backgroundColor: 'transparent',
    elevation: 0,
  },
  textprimary: {
    color: '#6200EE',
  },
  textsecondary: {
    color: '#03DAC6',
  },
  disabled: {
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    elevation: 0,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 1.25,
  },
  containedText: {
    color: '#FFFFFF',
  },
  outlinedText: {
    color: '#6200EE',
  },
  textText: {
    color: '#6200EE',
  },
  disabledText: {
    color: 'rgba(0, 0, 0, 0.38)',
  },
});