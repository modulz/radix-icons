import * as React from 'react';
import { IconProps } from './types';

export const AlignStartIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" {...props}>
      <path
        d="M1.49956 1.05005C1.25103 1.05005 1.04956 1.25152 1.04956 1.50005C1.04956 1.74858 1.25103 1.95005 1.49956 1.95005L13.4996 1.95005C13.7481 1.95005 13.9496 1.74858 13.9496 1.50005C13.9496 1.25152 13.7481 1.05005 13.4996 1.05005H1.49956ZM6 11V4.00002H9V11H6ZM5 3.75002C5 3.33581 5.33579 3.00002 5.75 3.00002H9.25C9.66421 3.00002 10 3.33581 10 3.75002V11.25C10 11.6642 9.66421 12 9.25 12H5.75C5.33579 12 5 11.6642 5 11.25V3.75002Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default AlignStartIcon;
