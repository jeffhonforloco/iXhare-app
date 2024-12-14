import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Logo } from '../components/Logo';
import { ExperienceList } from '../components/ExperienceList';
import { SearchBar } from '../components/SearchBar';
import { CategoryList } from '../components/CategoryList';
import { useExperiences } from '../../hooks/useExperiences';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';

export function ExperiencesScreen({ navigation }) {
  const { experiences, loading, error } = useExperiences();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo size={32} />
      </View>
      <SearchBar />
      <CategoryList />
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <ExperienceList
          experiences={experiences}
          onExperiencePress={(id) => navigation.navigate('ExperienceDetails', { id })}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E5EA',
  },
});