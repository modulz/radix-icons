import * as React from 'react';
import { IconProps } from './types';

export const CaretSortIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" {...props}>
      <path
        d="M4.9318 5.43179C4.75607 5.60753 4.75607 5.89245 4.93181 6.06819C5.10754 6.24392 5.39247 6.24392 5.5682 6.06819L7.5 4.13638L9.4318 6.06819C9.60754 6.24392 9.89247 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.8182 3.18179C7.73381 3.0974 7.61935 3.04999 7.5 3.04999C7.38066 3.04999 7.2662 3.0974 7.1818 3.18179L4.9318 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89247 8.75606 9.60754 8.75606 9.43181 8.93179L7.5 10.8636L5.5682 8.93179C5.39247 8.75606 5.10754 8.75606 4.93181 8.93179C4.75607 9.10753 4.75607 9.39245 4.93181 9.56819L7.18181 11.8182C7.35754 11.9939 7.64247 11.9939 7.8182 11.8182L10.0682 9.56819Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default CaretSortIcon;
