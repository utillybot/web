import { useContext } from 'react';
import CacheStorageContext from '../components/CacheStorageContext';

export default function useCacheStorage(): Record<string, unknown> {
	return useContext(CacheStorageContext);
}
