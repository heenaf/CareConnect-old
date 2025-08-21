import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Bell, CircleCheck as CheckCircle, TriangleAlert as AlertTriangle, Calendar, Activity, Heart, MessageCircle } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function PatientDashboard() {
  const todayTasks = [
    { id: 1, task: 'Take morning medication', completed: true, time: '8:00 AM' },
    { id: 2, task: 'Light exercise - 15 min walk', completed: false, time: '10:00 AM' },
    { id: 3, task: 'Follow diabetes diet plan', completed: true, time: '12:00 PM' },
    { id: 4, task: 'Evening medication', completed: false, time: '6:00 PM' },
  ];

  const upcomingAppointments = [
    { id: 1, doctor: 'Dr. Sarah Johnson', specialty: 'Cardiologist', date: 'Tomorrow', time: '2:00 PM' },
    { id: 2, doctor: 'Dr. Michael Chen', specialty: 'General Medicine', date: 'Friday', time: '10:30 AM' },
  ];

  const renderTaskCard = (task: any) => (
    <TouchableOpacity key={task.id} style={styles.taskCard}>
      <View style={styles.taskRow}>
        <View style={[styles.taskStatus, { backgroundColor: task.completed ? '#00B894' : '#DDD' }]}>
          {task.completed && <CheckCircle size={16} color="white" />}
        </View>
        <View style={styles.taskContent}>
          <Text style={[styles.taskText, { textDecorationLine: task.completed ? 'line-through' : 'none' }]}>
            {task.task}
          </Text>
          <Text style={styles.taskTime}>{task.time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#0066CC', '#004499']} style={styles.header}>
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.greeting}>Good Morning</Text>
            <Text style={styles.patientName}>John Smith</Text>
          </View>
          <TouchableOpacity style={styles.notificationIcon}>
            <Bell size={24} color="white" />
            <View style={styles.notificationBadge} />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Heart size={24} color="#FF6B35" />
            <Text style={styles.statNumber}>92</Text>
            <Text style={styles.statLabel}>BPM</Text>
          </View>
          <View style={styles.statCard}>
            <Activity size={24} color="#00B894" />
            <Text style={styles.statNumber}>7/10</Text>
            <Text style={styles.statLabel}>Energy</Text>
          </View>
          <View style={styles.statCard}>
            <CheckCircle size={24} color="#0066CC" />
            <Text style={styles.statNumber}>85%</Text>
            <Text style={styles.statLabel}>Adherence</Text>
          </View>
        </View>

        {/* AI Risk Alert */}
        <View style={styles.alertCard}>
          <View style={styles.alertHeader}>
            <AlertTriangle size={20} color="#FF6B35" />
            <Text style={styles.alertTitle}>Attention Needed</Text>
          </View>
          <Text style={styles.alertText}>You missed your evening medication yesterday. Please maintain consistency for optimal recovery.</Text>
          <TouchableOpacity style={styles.alertButton}>
            <Text style={styles.alertButtonText}>Set Reminder</Text>
          </TouchableOpacity>
        </View>

        {/* Today's Care Plan */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Today's Care Plan</Text>
          {todayTasks.map(renderTaskCard)}
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionGrid}>
            <TouchableOpacity style={styles.actionCard}>
              <Activity size={28} color="#0066CC" />
              <Text style={styles.actionText}>Log Symptoms</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionCard}>
              <MessageCircle size={28} color="#00B894" />
              <Text style={styles.actionText}>Consult Doctor</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionCard}>
              <Calendar size={28} color="#FF6B35" />
              <Text style={styles.actionText}>View Calendar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionCard}>
              <Bell size={28} color="#9B59B6" />
              <Text style={styles.actionText}>Reminders</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Upcoming Appointments */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Appointments</Text>
          {upcomingAppointments.map((appointment) => (
            <View key={appointment.id} style={styles.appointmentCard}>
              <View style={styles.appointmentInfo}>
                <Text style={styles.doctorName}>{appointment.doctor}</Text>
                <Text style={styles.specialty}>{appointment.specialty}</Text>
              </View>
              <View style={styles.appointmentTime}>
                <Text style={styles.appointmentDate}>{appointment.date}</Text>
                <Text style={styles.appointmentHour}>{appointment.time}</Text>
              </View>
            </View>
          ))}
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
  greeting: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 4,
  },
  patientName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  notificationIcon: {
    position: 'relative',
    padding: 8,
  },
  notificationBadge: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 8,
    height: 8,
    backgroundColor: '#FF6B35',
    borderRadius: 4,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: -10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  alertCard: {
    backgroundColor: '#FFF3E0',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#FF6B35',
  },
  alertHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6B35',
    marginLeft: 8,
  },
  alertText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 12,
  },
  alertButton: {
    backgroundColor: '#FF6B35',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
  },
  alertButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
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
  taskCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskStatus: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  taskContent: {
    flex: 1,
  },
  taskText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  taskTime: {
    fontSize: 12,
    color: '#666',
  },
  actionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    width: (width - 52) / 2,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionText: {
    fontSize: 14,
    color: '#333',
    marginTop: 8,
    textAlign: 'center',
  },
  appointmentCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  appointmentInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  specialty: {
    fontSize: 14,
    color: '#666',
  },
  appointmentTime: {
    alignItems: 'flex-end',
  },
  appointmentDate: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0066CC',
    marginBottom: 2,
  },
  appointmentHour: {
    fontSize: 12,
    color: '#666',
  },
});