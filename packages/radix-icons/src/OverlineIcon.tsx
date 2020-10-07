import * as React from 'react';
import { IconProps } from './types';

export const OverlineIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" {...props}>
      <path
        d="M3.4999 1.09998C3.27899 1.09998 3.0999 1.27906 3.0999 1.49998C3.0999 1.72089 3.27899 1.89998 3.4999 1.89998H11.4999C11.7208 1.89998 11.8999 1.72089 11.8999 1.49998C11.8999 1.27906 11.7208 1.09998 11.4999 1.09998H3.4999ZM5 4.24998C5 3.97384 4.77614 3.74998 4.5 3.74998C4.22385 3.74998 4 3.97384 4 4.24998V9.54998C4 11.483 5.567 13.05 7.5 13.05C9.43299 13.05 11 11.483 11 9.54998V4.24998C11 3.97384 10.7761 3.74998 10.5 3.74998C10.2239 3.74998 10 3.97384 10 4.24998V9.54998C10 10.9307 8.88071 12.05 7.5 12.05C6.11929 12.05 5 10.9307 5 9.54998V4.24998Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default OverlineIcon;
