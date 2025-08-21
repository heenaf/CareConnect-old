import { Tabs } from 'expo-router';
import { Heart, Calendar, User, MessageCircle, BookOpen } from 'lucide-react-native';
import { useUserRole } from '@/hooks/useUserRole';

export default function TabLayout() {
  const { userRole } = useUserRole();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#0066CC',
        tabBarInactiveTintColor: '#666666',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#E5E5E5',
          height: 80,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}>
      
      {userRole === 'patient' && (
        <>
          <Tabs.Screen
            name="index"
            options={{
              title: 'Dashboard',
              tabBarIcon: ({ size, color }) => (
                <Heart size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="symptoms"
            options={{
              title: 'Symptoms',
              tabBarIcon: ({ size, color }) => (
                <Calendar size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="consult"
            options={{
              title: 'Consult',
              tabBarIcon: ({ size, color }) => (
                <MessageCircle size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="knowledge"
            options={{
              title: 'Knowledge',
              tabBarIcon: ({ size, color }) => (
                <BookOpen size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
              title: 'Profile',
              tabBarIcon: ({ size, color }) => (
                <User size={size} color={color} />
              ),
            }}
          />
        </>
      )}

      {userRole === 'doctor' && (
        <>
          <Tabs.Screen
            name="doctor-dashboard"
            options={{
              title: 'Patients',
              tabBarIcon: ({ size, color }) => (
                <Heart size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="consult"
            options={{
              title: 'Consult',
              tabBarIcon: ({ size, color }) => (
                <MessageCircle size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
              title: 'Profile',
              tabBarIcon: ({ size, color }) => (
                <User size={size} color={color} />
              ),
            }}
          />
        </>
      )}

      {userRole === 'family' && (
        <>
          <Tabs.Screen
            name="family-dashboard"
            options={{
              title: 'Care',
              tabBarIcon: ({ size, color }) => (
                <Heart size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="consult"
            options={{
              title: 'Connect',
              tabBarIcon: ({ size, color }) => (
                <MessageCircle size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
              title: 'Profile',
              tabBarIcon: ({ size, color }) => (
                <User size={size} color={color} />
              ),
            }}
          />
        </>
      )}
    </Tabs>
  );
}