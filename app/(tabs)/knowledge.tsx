import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Search, BookOpen, Play, Volume2, Heart, Activity, Brain, Utensils } from 'lucide-react-native';

export default function KnowledgeHub() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { id: 'all', name: 'All', icon: BookOpen, color: '#0066CC' },
    { id: 'diet', name: 'Diet', icon: Utensils, color: '#00B894' },
    { id: 'exercise', name: 'Exercise', icon: Activity, color: '#FF6B35' },
    { id: 'mental', name: 'Mental Health', icon: Brain, color: '#9B59B6' },
    { id: 'heart', name: 'Heart Care', icon: Heart, color: '#E74C3C' }
  ];

  const featuredContent = [
    {
      id: 1,
      title: 'Post-Surgery Recovery: Essential Steps',
      category: 'Recovery',
      type: 'Article',
      duration: '8 min read',
      thumbnail: 'https://images.pexels.com/photos/3279203/pexels-photo-3279203.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2',
      description: 'Complete guide to recovering from surgery with proper care and precautions.'
    },
    {
      id: 2,
      title: 'Heart-Healthy Diet After Cardiac Surgery',
      category: 'Diet',
      type: 'Video',
      duration: '12 min',
      thumbnail: 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2',
      description: 'Learn about the best foods for heart health and recovery.'
    },
    {
      id: 3,
      title: 'Gentle Exercises for Recovery',
      category: 'Exercise',
      type: 'Video',
      duration: '15 min',
      thumbnail: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2',
      description: 'Safe and effective exercises to aid in your recovery process.'
    }
  ];

  const articles = [
    {
      id: 4,
      title: 'Managing Medication Side Effects',
      category: 'Medication',
      type: 'Article',
      duration: '6 min read',
      description: 'Understanding common side effects and how to manage them effectively.'
    },
    {
      id: 5,
      title: 'Sleep and Recovery: The Connection',
      category: 'Wellness',
      type: 'Article',
      duration: '5 min read',
      description: 'How quality sleep accelerates healing and recovery.'
    },
    {
      id: 6,
      title: 'Mental Health During Recovery',
      category: 'Mental Health',
      type: 'Audio',
      duration: '10 min',
      description: 'Coping strategies for emotional challenges during recovery.'
    }
  ];

  const renderContentCard = (item: any, featured = false) => (
    <TouchableOpacity key={item.id} style={[styles.contentCard, featured && styles.featuredCard]}>
      {featured && item.thumbnail && (
        <View style={styles.thumbnailContainer}>
          <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
          {item.type === 'Video' && (
            <View style={styles.playButton}>
              <Play size={20} color="white" />
            </View>
          )}
          {item.type === 'Audio' && (
            <View style={styles.audioButton}>
              <Volume2 size={20} color="white" />
            </View>
          )}
        </View>
      )}
      
      <View style={styles.contentInfo}>
        <View style={styles.contentHeader}>
          <Text style={styles.contentCategory}>{item.category}</Text>
          <Text style={styles.contentDuration}>{item.duration}</Text>
        </View>
        <Text style={styles.contentTitle}>{item.title}</Text>
        <Text style={styles.contentDescription}>{item.description}</Text>
        
        <View style={styles.contentFooter}>
          <View style={[styles.typeTag, 
            item.type === 'Video' ? styles.videoTag : 
            item.type === 'Audio' ? styles.audioTag : styles.articleTag
          ]}>
            <Text style={styles.typeTagText}>{item.type}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#9B59B6', '#8E44AD']} style={styles.header}>
        <Text style={styles.headerTitle}>Knowledge Hub</Text>
        <Text style={styles.headerSubtitle}>Learn about your health and recovery</Text>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Search */}
        <View style={styles.searchContainer}>
          <Search size={20} color="#666" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search health topics..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryCard,
                  { borderColor: category.color },
                  selectedCategory === category.id && { backgroundColor: category.color }
                ]}
                onPress={() => setSelectedCategory(category.id)}
              >
                <View style={[styles.categoryIcon, { backgroundColor: selectedCategory === category.id ? 'rgba(255,255,255,0.2)' : category.color }]}>
                  <category.icon size={20} color={selectedCategory === category.id ? 'white' : 'white'} />
                </View>
                <Text style={[
                  styles.categoryName,
                  { color: selectedCategory === category.id ? 'white' : '#333' }
                ]}>
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Featured Content */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.featuredScroll}>
            {featuredContent.map((item) => (
              <View key={item.id} style={styles.featuredCardWrapper}>
                {renderContentCard(item, true)}
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Recent Articles */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Articles & Resources</Text>
          {articles.map((item) => renderContentCard(item))}
        </View>

        {/* Quick Tips */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Recovery Tips</Text>
          <View style={styles.tipsContainer}>
            <View style={styles.tipCard}>
              <View style={styles.tipIcon}>
                <Heart size={20} color="#E74C3C" />
              </View>
              <Text style={styles.tipText}>Take medications exactly as prescribed, even if you feel better</Text>
            </View>
            <View style={styles.tipCard}>
              <View style={styles.tipIcon}>
                <Activity size={20} color="#00B894" />
              </View>
              <Text style={styles.tipText}>Start with gentle activities and gradually increase intensity</Text>
            </View>
            <View style={styles.tipCard}>
              <View style={styles.tipIcon}>
                <Brain size={20} color="#9B59B6" />
              </View>
              <Text style={styles.tipText}>Don't hesitate to ask for help when you need it</Text>
            </View>
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginLeft: 12,
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
  categoriesScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  categoryCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
    alignItems: 'center',
    minWidth: 100,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  featuredScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  featuredCardWrapper: {
    width: 280,
    marginRight: 16,
  },
  contentCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 12,
  },
  featuredCard: {
    marginBottom: 0,
  },
  thumbnailContainer: {
    position: 'relative',
  },
  thumbnail: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -20,
    marginLeft: -20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  audioButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -20,
    marginLeft: -20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(155, 89, 182, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentInfo: {
    padding: 16,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  contentCategory: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  contentDuration: {
    fontSize: 12,
    color: '#999',
  },
  contentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    lineHeight: 22,
  },
  contentDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 12,
  },
  contentFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  typeTag: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  videoTag: {
    backgroundColor: '#E3F2FD',
  },
  audioTag: {
    backgroundColor: '#F3E5F5',
  },
  articleTag: {
    backgroundColor: '#E8F5E8',
  },
  typeTagText: {
    fontSize: 10,
    fontWeight: '500',
    color: '#333',
  },
  tipsContainer: {
    gap: 12,
  },
  tipCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  tipIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F8F9FA',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  tipText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
});