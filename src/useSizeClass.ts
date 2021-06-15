import { useContext } from 'react';
import type { SizeClass } from './internal/types';
import { SizeClassContext } from './SizeClassContext';

export const useSizeClass = (): SizeClass => {
  return useContext(SizeClassContext);
};
