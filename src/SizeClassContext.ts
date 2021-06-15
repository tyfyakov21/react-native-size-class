import React from 'react';
import { SizeClass, SizeClassValue } from './internal/types';

export const SizeClassContext = React.createContext<SizeClass>({
  horizontal: SizeClassValue.unknown,
  vertical: SizeClassValue.unknown,
});
