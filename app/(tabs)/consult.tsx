import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Video, MessageCircle, Phone, Search, Filter, Star } from 'lucide-react-native';

export default function TeleConsultation() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Cardiology', 'General', 'Neurology', 'Orthopedic'];

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      rating: 4.9,
      experience: '15 years',
      nextAvailable: '2:00 PM Today',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
      isOnline: true,
      consultationFee: '$75'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'General Medicine',
      rating: 4.8,
      experience: '12 years',
      nextAvailable: '4:30 PM Today',
      image: 'https://images.pexels.com/photos/6749739/pexels-photo-6749739.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
      isOnline: false,
      consultationFee: '$60'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Neurologist',
      rating: 4.9,
      experience: '18 years',
      nextAvailable: 'Tomorrow 10:00 AM',
      image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
      isOnline: true,
      consultationFee: '$90'
    }
  ];

  const consultationMethods = [
    { id: 1, type: 'Video Call', icon: Video, color: '#0066CC', description: 'Face-to-face consultation' },
    { id: 2, type: 'Voice Call', icon: Phone, color: '#00B894', description: 'Audio only consultation' },
    { id: 3, type: 'Chat', icon: MessageCircle, color: '#FF6B35', description: 'Text-based consultation' }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#0066CC', '#004499']} style={styles.header}>
        <Text style={styles.headerTitle}>Tele-Consultation</Text>
        <Text style={styles.headerSubtitle}>Connect with healthcare professionals</Text>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Consultation Methods */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Choose Consultation Type</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.methodsScroll}>
            {consultationMethods.map((method) => (
              <TouchableOpacity key={method.id} style={[styles.methodCard, { borderColor: method.color }]}>
                <View style={[styles.methodIcon, { backgroundColor: method.color }]}>
                  <method.icon size={24} color="white" />
                </View>
                <Text style={styles.methodTitle}>{method.type}</Text>
                <Text style={styles.methodDescription}>{method.description}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Search and Filter */}
        <View style={styles.section}>
          <View style={styles.searchContainer}>
            <View style={styles.searchInputContainer}>
              <Search size={20} color="#666" />
              <TextInput
                style={styles.searchInput}
                placeholder="Search doctors..."
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>
            <TouchableOpacity style={styles.filterButton}>
              <Filter size={20} color="#0066CC" />
            </TouchableOpacity>
          </View>

          {/* Categories */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category}
                style={[
                  styles.categoryChip,
                  selectedCategory === category && styles.selectedCategoryChip
                ]}
                onPress={() => setSelectedCategory(category)}
              >
                <Text style={[
                  styles.categoryText,
                  selectedCategory === category && styles.selectedCategoryText
                ]}>
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Doctors List */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Available Doctors</Text>
          {doctors.map((doctor) => (
            <View key={doctor.id} style={styles.doctorCard}>
              <View style={styles.doctorHeader}>
                <View style={styles.doctorImageContainer}>
                  <Image source={{ uri: doctor.image }} style={styles.doctorImage} />
                  <View style={[styles.onlineStatus, { backgroundColor: doctor.isOnline ? '#00B894' : '#DDD' }]} />
                </View>
                <View style={styles.doctorInfo}>
                  <Text style={styles.doctorName}>{doctor.name}</Text>
                  <Text style={styles.doctorSpecialty}>{doctor.specialty}</Text>
                  <View style={styles.doctorMeta}>
                    <View style={styles.ratingContainer}>
                      <Star size={14} color="#FFD700" fill="#FFD700" />
                      <Text style={styles.ratingText}>{doctor.rating}</Text>
                    </View>
                    <Text style={styles.experience}>{doctor.experience} exp</Text>
                  </View>
                </View>
                <View style={styles.consultationInfo}>
                  <Text style={styles.consultationFee}>{doctor.consultationFee}</Text>
                  <Text style={styles.availability}>{doctor.nextAvailable}</Text>
                </View>
              </View>

              <View style={styles.consultationActions}>
                <TouchableOpacity style={[styles.actionButton, styles.videoButton]}>
                  <Video size={16} color="white" />
                  <Text style={styles.actionButtonText}>Video</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionButton, styles.voiceButton]}>
                  <Phone size={16} color="#00B894" />
                  <Text style={[styles.actionButtonText, { color: '#00B894' }]}>Voice</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionButton, styles.chatButton]}>
                  <MessageCircle size={16} color="#FF6B35" />
                  <Text style={[styles.actionButtonText, { color: '#FF6B35' }]}>Chat</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        {/* Emergency Contact */}
        <View style={styles.emergencySection}>
          <View style={styles.emergencyCard}>
            <Text style={styles.emergencyTitle}>Emergency?</Text>
            <Text style={styles.emergencyText}>For immediate medical attention, contact emergency services</Text>
            <TouchableOpacity style={styles.emergencyButton}>
              <Phone size={20} color="white" />
              <Text style={styles.emergencyButtonText}>Call 911</Text>
            </TouchableOpacity>
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
    paddingVertical: 24,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
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
  methodsScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  methodCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginRight: 12,
    width: 140,
    alignItems: 'center',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  methodIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  methodTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  methodDescription: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginLeft: 8,
  },
  filterButton: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
  },
  categoriesScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  categoryChip: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  selectedCategoryChip: {
    backgroundColor: '#0066CC',
    borderColor: '#0066CC',
  },
  categoryText: {
    fontSize: 14,
    color: '#666',
  },
  selectedCategoryText: {
    color: 'white',
  },
  doctorCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  doctorHeader: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  doctorImageContainer: {
    position: 'relative',
    marginRight: 12,
  },
  doctorImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  onlineStatus: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'white',
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
  },
  doctorSpecialty: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  doctorMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  ratingText: {
    fontSize: 12,
    color: '#333',
    marginLeft: 4,
  },
  experience: {
    fontSize: 12,
    color: '#666',
  },
  consultationInfo: {
    alignItems: 'flex-end',
  },
  consultationFee: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0066CC',
    marginBottom: 2,
  },
  availability: {
    fontSize: 12,
    color: '#00B894',
  },
  consultationActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 8,
    marginHorizontal: 4,
    borderWidth: 1,
  },
  videoButton: {
    backgroundColor: '#0066CC',
    borderColor: '#0066CC',
  },
  voiceButton: {
    backgroundColor: 'transparent',
    borderColor: '#00B894',
  },
  chatButton: {
    backgroundColor: 'transparent',
    borderColor: '#FF6B35',
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 4,
    color: 'white',
  },
  emergencySection: {
    marginBottom: 24,
  },
  emergencyCard: {
    backgroundColor: '#FFE5E5',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF6B35',
  },
  emergencyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#CC0000',
    marginBottom: 8,
  },
  emergencyText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 16,
  },
  emergencyButton: {
    backgroundColor: '#CC0000',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  emergencyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});