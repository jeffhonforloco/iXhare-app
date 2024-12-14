import React from 'react';
import { 
  View, 
  TextInput, 
  Text, 
  StyleSheet, 
  Platform,
  TextInputProps 
} from 'react-native';

interface MaterialTextFieldProps extends TextInputProps {
  label?: string;
  error?: string;
  helper?: string;
}

export function MaterialTextField({ 
  label,
  error,
  helper,
  style,
  ...props
}: MaterialTextFieldProps) {
  if (Platform.OS !== 'android') return null;

  return (
    <View style={styles.container}>
      {label && <Text style={[styles.label, error && styles.labelError]}>{label}</Text>}
      <TextInput
        style={[
          styles.input,
          error && styles.inputError,
          style,
        ]}
        placeholderTextColor="rgba(0, 0, 0, 0.54)"
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
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.6)',
    marginBottom: 8,
  },
  labelError: {
    color: '#B00020',
  },
  input: {
    height: 56,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.38)',
    paddingHorizontal: 12,
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.87)',
    backgroundColor: '#FFFFFF',
  },
  inputError: {
    borderColor: '#B00020',
  },
  helper: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.6)',
    marginTop: 4,
  },
  error: {
    color: '#B00020',
  },
});