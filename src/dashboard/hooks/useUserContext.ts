import { useContext } from 'react';
import UserContext from '../components/UserContext';
import type { User } from '../types';

export default function useUserContext(): User | undefined {
	return useContext(UserContext);
}
