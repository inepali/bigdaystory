import React from 'react';

import { Heading } from '../components/Heading';
import { useAuth } from '../contexts/AuthContext';
import { UserType } from '../types/auth';

export default function Dashboard() {
  const auth = useAuth();

  const currentUser = auth?.currentUser as UserType;

  return <Heading>Good Afternoon, {currentUser.displayName}</Heading>;
}
