import { useState } from 'react';

export function useUserRole() {
  // This would typically come from your authentication system
  const [userRole, setUserRole] = useState<'patient' | 'doctor' | 'family'>('patient');
  
  return {
    userRole,
    setUserRole,
  };
}