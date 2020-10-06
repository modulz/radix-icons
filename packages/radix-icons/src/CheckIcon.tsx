import * as React from 'react';
import { IconProps } from './types';

export const CheckIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" {...props}>
      <path
        d="M11.467 3.72684C11.7559 3.91574 11.8369 4.30308 11.648 4.59198L7.39805 11.092C7.29789 11.2452 7.13562 11.3467 6.95408 11.3699C6.77253 11.3931 6.58995 11.3355 6.45452 11.2124L3.70452 8.71241C3.44911 8.48022 3.43029 8.08494 3.66248 7.82953C3.89467 7.57412 4.28995 7.55529 4.54536 7.78749L6.75298 9.79441L10.6018 3.90792C10.7907 3.61902 11.1781 3.53795 11.467 3.72684Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default CheckIcon;
