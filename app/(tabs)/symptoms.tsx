import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft, TrendingUp, Calendar } from 'lucide-react-native';
import Slider from '@react-native-community/slider';

export default function SymptomsTracker() {
  const [painLevel, setPainLevel] = useState(3);
  const [energyLevel, setEnergyLevel] = useState(7);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [notes, setNotes] = useState('');

  const commonSymptoms = [
    'Fever', 'Headache', 'Nausea', 'Dizziness', 'Fatigue',
    'Chest Pain', 'Shortness of Breath', 'Loss of Appetite', 'Insomnia'
  ];

  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptom) 
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
  };

  const submitSymptoms = () => {
    // Handle symptom submission
    console.log({
      painLevel,
      energyLevel,
      symptoms: selectedSymptoms,
      notes,
      timestamp: new Date().toISOString()
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#00B894', '#00A085']} style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity style={styles.backButton}>
            <ArrowLeft size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Symptom Tracker</Text>
          <TouchableOpacity style={styles.historyButton}>
            <TrendingUp size={24} color="white" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.dateCard}>
          <Calendar size={20} color="#0066CC" />
          <Text style={styles.dateText}>Today - {new Date().toLocaleDateString()}</Text>
        </View>

        {/* Pain Level */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pain Level</Text>
          <View style={styles.sliderContainer}>
            <Text style={styles.sliderLabel}>None</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={10}
              value={painLevel}
              onValueChange={setPainLevel}
              step={1}
              minimumTrackTintColor="#FF6B35"
              maximumTrackTintColor="#DDD"
              thumbStyle={{ backgroundColor: '#FF6B35' }}
            />
            <Text style={styles.sliderLabel}>Severe</Text>
          </View>
          <Text style={styles.currentValue}>Current: {Math.round(painLevel)}/10</Text>
        </View>

        {/* Energy Level */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Energy Level</Text>
          <View style={styles.sliderContainer}>
            <Text style={styles.sliderLabel}>Low</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={10}
              value={energyLevel}
              onValueChange={setEnergyLevel}
              step={1}
              minimumTrackTintColor="#00B894"
              maximumTrackTintColor="#DDD"
              thumbStyle={{ backgroundColor: '#00B894' }}
            />
            <Text style={styles.sliderLabel}>High</Text>
          </View>
          <Text style={styles.currentValue}>Current: {Math.round(energyLevel)}/10</Text>
        </View>

        {/* Symptoms */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Symptoms (Select all that apply)</Text>
          <View style={styles.symptomsGrid}>
            {commonSymptoms.map((symptom) => (
              <TouchableOpacity
                key={symptom}
                style={[
                  styles.symptomChip,
                  selectedSymptoms.includes(symptom) && styles.selectedSymptom
                ]}
                onPress={() => toggleSymptom(symptom)}
              >
                <Text style={[
                  styles.symptomText,
                  selectedSymptoms.includes(symptom) && styles.selectedSymptomText
                ]}>
                  {symptom}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Notes */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Additional Notes</Text>
          <TextInput
            style={styles.notesInput}
            multiline
            numberOfLines={4}
            placeholder="Describe any other symptoms or concerns..."
            value={notes}
            onChangeText={setNotes}
            textAlignVertical="top"
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={submitSymptoms}>
          <Text style={styles.submitButtonText}>Log Symptoms</Text>
        </TouchableOpacity>

        {/* Recent Entries */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Entries</Text>
          <View style={styles.historyCard}>
            <View style={styles.historyHeader}>
              <Text style={styles.historyDate}>Yesterday</Text>
              <View style={styles.historyStats}>
                <Text style={styles.historyStat}>Pain: 2/10</Text>
                <Text style={styles.historyStat}>Energy: 8/10</Text>
              </View>
            </View>
            <Text style={styles.historySymptoms}>Mild headache, Good appetite</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  historyButton: {
    padding: 8,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  dateCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  dateText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginLeft: 8,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  sliderContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sliderLabel: {
    fontSize: 14,
    color: '#666',
    minWidth: 40,
  },
  slider: {
    flex: 1,
    marginHorizontal: 16,
  },
  currentValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0066CC',
    textAlign: 'center',
    marginTop: 8,
  },
  symptomsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  symptomChip: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#DDD',
    marginBottom: 8,
  },
  selectedSymptom: {
    backgroundColor: '#0066CC',
    borderColor: '#0066CC',
  },
  symptomText: {
    fontSize: 14,
    color: '#666',
  },
  selectedSymptomText: {
    color: 'white',
  },
  notesInput: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#DDD',
    minHeight: 100,
  },
  submitButton: {
    backgroundColor: '#00B894',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#00B894',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  historyCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  historyDate: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  historyStats: {
    flexDirection: 'row',
    gap: 12,
  },
  historyStat: {
    fontSize: 12,
    color: '#666',
  },
  historySymptoms: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});