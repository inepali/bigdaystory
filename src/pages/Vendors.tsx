import { Heading } from '../components/Heading';
import { useAuth } from '../contexts/AuthContext';
import { useLocation } from 'react-router-dom';
import { UserType } from '../types/auth';

const Vendors = () => {

  const auth = useAuth();
  const location = useLocation();

  const currentUser = auth?.currentUser as UserType;
  const { pathname } = location;


  return <Heading>Hello {currentUser.email}</Heading>;
};

export default Vendors;
