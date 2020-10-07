import * as React from 'react';
import { IconProps } from './types';

export const SymbolIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" {...props}>
      <path
        d="M1.90324 7.29677C1.90324 10.341 4.11044 12.4147 6.58895 12.8439C6.87257 12.893 7.06269 13.1627 7.01358 13.4464C6.96447 13.73 6.69473 13.9201 6.41111 13.871C3.49944 13.3668 0.860863 10.9127 0.860862 7.29677C0.860862 5.76009 1.55998 4.55245 2.37642 3.63377C2.96126 2.97568 3.63036 2.44135 4.16848 2.03202L2.53207 2.03202C2.25593 2.03202 2.03207 1.80816 2.03207 1.53202C2.03207 1.25588 2.25593 1.03202 2.53207 1.03202L5.53207 1.03202C5.80822 1.03202 6.03207 1.25588 6.03207 1.53202L6.03207 4.53202C6.03207 4.80816 5.80822 5.03202 5.53207 5.03202C5.25593 5.03202 5.03207 4.80816 5.03207 4.53202L5.03207 2.68645L5.03056 2.68759L5.03048 2.68766L5.03046 2.68767L5.03045 2.68767C4.45898 3.11868 3.76061 3.64538 3.15557 4.3262C2.44104 5.13021 1.90324 6.10154 1.90324 7.29677ZM13.0109 7.70321C13.0109 4.69115 10.8505 2.6296 8.40386 2.17029C8.12096 2.11718 7.93467 1.84479 7.98778 1.56188C8.04089 1.27898 8.31329 1.0927 8.59619 1.14581C11.4705 1.68541 14.0533 4.12605 14.0533 7.70321C14.0533 9.23988 13.3541 10.4475 12.5377 11.3662C11.9529 12.0243 11.2838 12.5586 10.7456 12.968L12.3821 12.968C12.6582 12.968 12.8821 13.1918 12.8821 13.468C12.8821 13.7441 12.6582 13.968 12.3821 13.968L9.38207 13.968C9.10593 13.968 8.88207 13.7441 8.88207 13.468L8.88207 10.468C8.88207 10.1918 9.10593 9.96796 9.38207 9.96796C9.65822 9.96796 9.88207 10.1918 9.88207 10.468L9.88207 12.3135L9.88364 12.3123C10.4551 11.8813 11.1535 11.3546 11.7585 10.6738C12.4731 9.86976 13.0109 8.89844 13.0109 7.70321Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default SymbolIcon;
