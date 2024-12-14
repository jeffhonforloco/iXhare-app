import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Star } from 'lucide-react-native';
import type { Experience } from '../../types/experience';

interface ExperienceCardProps {
  experience: Experience;
  onPress: () => void;
}

export function ExperienceCard({ experience, onPress }: ExperienceCardProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={{ uri: experience.images[0] }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{experience.title}</Text>
        <Text style={styles.location}>{experience.location}</Text>
        <View style={styles.footer}>
          <View style={styles.rating}>
            <Star size={16} color="#FCD34D" />
            <Text style={styles.ratingText}>{experience.rating}</Text>
          </View>
          <Text style={styles.price}>${experience.price}/person</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  location: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#4B5563',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
});