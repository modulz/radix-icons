import * as React from 'react';
import { BaseIconProps } from './types';

interface FontSizeIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const FontSizeIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: FontSizeIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M3.782 2.217a.4.4 0 00-.565 0l-2 2a.4.4 0 10.565.566L3.1 3.466v8.068l-1.317-1.317a.4.4 0 00-.565.566l2 2a.4.4 0 00.565 0l2-2a.4.4 0 00-.565-.566l-1.318 1.317V3.466l1.318 1.317a.4.4 0 10.565-.566l-2-2zm7.718.533a.5.5 0 01.47.33l3 8.32a.5.5 0 11-.94.34l-.982-2.724H9.952l-.982 2.723a.5.5 0 11-.94-.34l3-8.319a.5.5 0 01.47-.33zm0 1.974l1.241 3.442H10.26l1.24-3.442z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`FontSizeIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default FontSizeIcon;
