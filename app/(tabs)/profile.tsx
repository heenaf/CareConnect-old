import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { User, Bell, Shield, Globe, Heart, Calendar, Phone, Mail, Settings, LogOut, ChevronRight, CreditCard as Edit3 } from 'lucide-react-native';

export default function Profile() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [smsAlertsEnabled, setSmsAlertsEnabled] = useState(false);
  const [familyUpdatesEnabled, setFamilyUpdatesEnabled] = useState(true);

  const patientInfo = {
    name: 'John Smith',
    age: 45,
    condition: 'Post Cardiac Surgery',
    dischargeDate: 'March 15, 2024',
    nextAppointment: 'March 22, 2024',
    primaryDoctor: 'Dr. Sarah Johnson',
    emergencyContact: '+1 (555) 123-4567',
    email: 'john.smith@email.com',
    profileImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2'
  };

  const menuItems = [
    {
      id: 1,
      title: 'Medical Information',
      icon: Heart,
      color: '#E74C3C',
      subtitle: 'View your medical records and history'
    },
    {
      id: 2,
      title: 'Discharge Plan',
      icon: Calendar,
      color: '#0066CC',
      subtitle: 'Review your recovery plan and milestones'
    },
    {
      id: 3,
      title: 'Family & Caregivers',
      icon: User,
      color: '#00B894',
      subtitle: 'Manage family access and permissions'
    },
    {
      id: 4,
      title: 'Privacy & Security',
      icon: Shield,
      color: '#9B59B6',
      subtitle: 'Control your data and privacy settings'
    },
    {
      id: 5,
      title: 'Language & Accessibility',
      icon: Globe,
      color: '#FF6B35',
      subtitle: 'Change language and accessibility options'
    },
    {
      id: 6,
      title: 'App Settings',
      icon: Settings,
      color: '#666',
      subtitle: 'General app preferences and settings'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#667eea', '#764ba2']} style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity style={styles.editButton}>
            <Edit3 size={20} color="white" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.profileHeader}>
            <Image source={{ uri: patientInfo.profileImage }} style={styles.profileImage} />
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>{patientInfo.name}</Text>
              <Text style={styles.profileAge}>Age {patientInfo.age}</Text>
              <Text style={styles.profileCondition}>{patientInfo.condition}</Text>
            </View>
          </View>
          
          <View style={styles.profileDetails}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Discharge Date</Text>
              <Text style={styles.detailValue}>{patientInfo.dischargeDate}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Primary Doctor</Text>
              <Text style={styles.detailValue}>{patientInfo.primaryDoctor}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Next Appointment</Text>
              <Text style={styles.detailValue}>{patientInfo.nextAppointment}</Text>
            </View>
          </View>
        </View>

        {/* Quick Contact */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Contact</Text>
          <View style={styles.contactRow}>
            <TouchableOpacity style={styles.contactButton}>
              <Phone size={20} color="#0066CC" />
              <Text style={styles.contactText}>{patientInfo.emergencyContact}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contactButton}>
              <Mail size={20} color="#00B894" />
              <Text style={styles.contactText}>{patientInfo.email}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Notifications */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notifications</Text>
          <View style={styles.notificationCard}>
            <View style={styles.notificationItem}>
              <View style={styles.notificationInfo}>
                <Bell size={20} color="#0066CC" />
                <View style={styles.notificationText}>
                  <Text style={styles.notificationTitle}>Push Notifications</Text>
                  <Text style={styles.notificationSubtitle}>Medication and appointment reminders</Text>
                </View>
              </View>
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
                trackColor={{ false: '#DDD', true: '#0066CC' }}
                thumbColor={notificationsEnabled ? 'white' : '#f4f3f4'}
              />
            </View>

            <View style={styles.notificationItem}>
              <View style={styles.notificationInfo}>
                <Phone size={20} color="#00B894" />
                <View style={styles.notificationText}>
                  <Text style={styles.notificationTitle}>SMS Alerts</Text>
                  <Text style={styles.notificationSubtitle}>Critical health alerts via text</Text>
                </View>
              </View>
              <Switch
                value={smsAlertsEnabled}
                onValueChange={setSmsAlertsEnabled}
                trackColor={{ false: '#DDD', true: '#00B894' }}
                thumbColor={smsAlertsEnabled ? 'white' : '#f4f3f4'}
              />
            </View>

            <View style={styles.notificationItem}>
              <View style={styles.notificationInfo}>
                <User size={20} color="#FF6B35" />
                <View style={styles.notificationText}>
                  <Text style={styles.notificationTitle}>Family Updates</Text>
                  <Text style={styles.notificationSubtitle}>Share progress with family members</Text>
                </View>
              </View>
              <Switch
                value={familyUpdatesEnabled}
                onValueChange={setFamilyUpdatesEnabled}
                trackColor={{ false: '#DDD', true: '#FF6B35' }}
                thumbColor={familyUpdatesEnabled ? 'white' : '#f4f3f4'}
              />
            </View>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Settings</Text>
          {menuItems.map((item) => (
            <TouchableOpacity key={item.id} style={styles.menuItem}>
              <View style={[styles.menuIcon, { backgroundColor: `${item.color}15` }]}>
                <item.icon size={20} color={item.color} />
              </View>
              <View style={styles.menuContent}>
                <Text style={styles.menuTitle}>{item.title}</Text>
                <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
              </View>
              <ChevronRight size={20} color="#999" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout */}
        <TouchableOpacity style={styles.logoutButton}>
          <LogOut size={20} color="#CC0000" />
          <Text style={styles.logoutText}>Sign Out</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Smart Post-Discharge Care v1.0</Text>
          <Text style={styles.footerSubtext}>Your health, our priority</Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  editButton: {
    padding: 8,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  profileCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginTop: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  profileAge: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  profileCondition: {
    fontSize: 14,
    color: '#0066CC',
    fontWeight: '500',
  },
  profileDetails: {
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingTop: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  detailLabel: {
    fontSize: 14,
    color: '#666',
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
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
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contactButton: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  contactText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 8,
    flex: 1,
  },
  notificationCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  notificationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  notificationText: {
    marginLeft: 12,
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 2,
  },
  notificationSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  menuItem: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  menuContent: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 2,
  },
  menuSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  logoutButton: {
    backgroundColor: '#FFE5E5',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#FFD5D5',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#CC0000',
    marginLeft: 8,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#999',
    marginBottom: 4,
  },
  footerSubtext: {
    fontSize: 12,
    color: '#BBB',
  },
});