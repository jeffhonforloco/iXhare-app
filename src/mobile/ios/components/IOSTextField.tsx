import React from 'react';
import { 
  View, 
  TextInput, 
  Text, 
  StyleSheet, 
  TextInputProps,
  Platform
} from 'react-native';

interface IOSTextFieldProps extends TextInputProps {
  label?: string;
  error?: string;
  helper?: string;
}

export function IOSTextField({ 
  label,
  error,
  helper,
  style,
  ...props
}: IOSTextFieldProps) {
  if (Platform.OS !== 'ios') return null;

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[
          styles.input,
          error && styles.inputError,
          style,
        ]}
        placeholderTextColor="#999999"
        {...props}
      />
      {(error || helper) && (
        <Text style={[styles.helper, error && styles.error]}>
          {error || helper}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 8,
  },
  input: {
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#FFFFFF',
  },
  inputError: {
    borderColor: '#FF3B30',
  },
  helper: {
    fontSize: 12,
    color: '#8E8E93',
    marginTop: 4,
  },
  error: {
    color: '#FF3B30',
  },
});