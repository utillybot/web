import { useContext } from 'react';
import CacheStorageContext from './CacheStorageContext';

export default function useCacheStorage(): Record<string, unknown> {
	return useContext(CacheStorageContext);
}
