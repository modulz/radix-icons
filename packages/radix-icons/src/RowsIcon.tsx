import * as React from 'react';
import { IconProps } from './types';

export const RowsIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" {...props}>
      <path
        d="M14 12.85L1 12.85L1 14.15L14 14.15L14 12.85ZM14 8.84999L1 8.84999L1 10.15L14 10.15L14 8.84999ZM1 4.84999L14 4.84999L14 6.14999L1 6.14999L1 4.84999ZM14 0.849995L1 0.849995L1 2.14999L14 2.14999L14 0.849995Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default RowsIcon;
