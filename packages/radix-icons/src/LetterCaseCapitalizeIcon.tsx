import * as React from 'react';
import { BaseIconProps } from './types';

interface LetterCaseCapitalizeIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const LetterCaseCapitalizeIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: LetterCaseCapitalizeIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M3.69 2.75a.5.5 0 01.467.32l3.21 8.32a.5.5 0 01-.933.36L5.383 9.025H2.01L.967 11.75a.5.5 0 01-.934-.358l3.19-8.32a.5.5 0 01.467-.321zm.002 1.893l1.363 3.532H2.337l1.355-3.532zm7.207.564c-1.64 0-2.89 1.479-2.89 3.403 0 2.024 1.35 3.402 2.89 3.402a3.06 3.06 0 002.255-.99V11.53h.45-.45a.45.45 0 10.9 0h-.45.45V5.72a.45.45 0 00-.9 0V6.223A3.01 3.01 0 0010.9 5.207zm2.255 2.098v-.003c-.39-.721-1.213-1.244-2.067-1.244-.978 0-2.052.908-2.052 2.552 0 1.543.974 2.552 2.052 2.552.883 0 1.685-.667 2.067-1.364V7.305z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M3.69 2.75a.5.5 0 01.467.32l3.21 8.32a.5.5 0 01-.933.36L5.383 9.025H2.01L.967 11.75a.5.5 0 01-.934-.358l3.19-8.32a.5.5 0 01.467-.321zm.002 1.893l1.363 3.532H2.337l1.355-3.532zm7.207.564c-1.64 0-2.89 1.479-2.89 3.403 0 2.024 1.35 3.402 2.89 3.402a3.06 3.06 0 002.255-.99V11.53h.45-.45a.45.45 0 10.9 0h-.45.45V5.72a.45.45 0 00-.9 0V6.223A3.01 3.01 0 0010.9 5.207zm2.255 2.098v-.003c-.39-.721-1.213-1.244-2.067-1.244-.978 0-2.052.908-2.052 2.552 0 1.543.974 2.552 2.052 2.552.883 0 1.685-.667 2.067-1.364V7.305z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`LetterCaseCapitalizeIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default LetterCaseCapitalizeIcon;
