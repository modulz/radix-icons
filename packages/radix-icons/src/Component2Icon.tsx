import * as React from 'react';
import { IconProps } from './types';

export const Component2Icon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M3.87935 1H3.9H11.1H11.1207C11.5231 0.999994 11.8553 0.999989 12.1259 1.0221C12.407 1.04506 12.6653 1.09434 12.908 1.21799C13.2843 1.40973 13.5903 1.7157 13.782 2.09202C13.9057 2.33469 13.9549 2.59304 13.9779 2.87409C14 3.14468 14 3.47686 14 3.87934V3.9V11.1V11.1207C14 11.5231 14 11.8553 13.9779 12.1259C13.9549 12.407 13.9057 12.6653 13.782 12.908C13.5903 13.2843 13.2843 13.5903 12.908 13.782C12.6653 13.9057 12.407 13.9549 12.1259 13.9779C11.8553 14 11.5231 14 11.1207 14H11.1H3.9H3.87934C3.47686 14 3.14468 14 2.87409 13.9779C2.59304 13.9549 2.33469 13.9057 2.09202 13.782C1.7157 13.5903 1.40973 13.2843 1.21799 12.908C1.09434 12.6653 1.04506 12.407 1.0221 12.1259C0.999989 11.8553 0.999994 11.5231 1 11.1207V11.1207V11.1V3.9V3.87935V3.87934C0.999994 3.47686 0.999989 3.14468 1.0221 2.87409C1.04506 2.59304 1.09434 2.33469 1.21799 2.09202C1.40973 1.7157 1.7157 1.40973 2.09202 1.21799C2.33469 1.09434 2.59304 1.04506 2.87409 1.0221C3.14469 0.999989 3.47687 0.999994 3.87935 1ZM2.95552 2.01878C2.73631 2.03669 2.62421 2.06915 2.54601 2.10899C2.35785 2.20487 2.20487 2.35785 2.10899 2.54601C2.06915 2.62421 2.03669 2.73631 2.01878 2.95552C2.00039 3.18056 2 3.47171 2 3.9V7H7V2H3.9C3.47171 2 3.18056 2.00039 2.95552 2.01878ZM7 8H2V11.1C2 11.5283 2.00039 11.8194 2.01878 12.0445C2.03669 12.2637 2.06915 12.3758 2.10899 12.454C2.20487 12.6422 2.35785 12.7951 2.54601 12.891C2.62421 12.9309 2.73631 12.9633 2.95552 12.9812C3.18056 12.9996 3.47171 13 3.9 13H7V8ZM8 8H13V11.1C13 11.5283 12.9996 11.8194 12.9812 12.0445C12.9633 12.2637 12.9309 12.3758 12.891 12.454C12.7951 12.6422 12.6422 12.7951 12.454 12.891C12.3758 12.9309 12.2637 12.9633 12.0445 12.9812C11.8194 12.9996 11.5283 13 11.1 13H8V8ZM13 7H8V2H11.1C11.5283 2 11.8194 2.00039 12.0445 2.01878C12.2637 2.03669 12.3758 2.06915 12.454 2.10899C12.6422 2.20487 12.7951 2.35785 12.891 2.54601C12.9309 2.62421 12.9633 2.73631 12.9812 2.95552C12.9996 3.18056 13 3.47171 13 3.9V7Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Component2Icon;
