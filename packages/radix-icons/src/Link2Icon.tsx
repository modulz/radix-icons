import * as React from 'react';
import { IconProps } from './types';

export const Link2Icon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" {...props}>
      <path
        d="M8.51194 3.00538C9.18829 2.54591 10.0435 2.53691 10.6788 2.95416C10.8231 3.0489 10.9771 3.19927 11.389 3.61116C11.8009 4.02304 11.9513 4.17711 12.046 4.32138C12.4633 4.95672 12.4543 5.81189 11.9948 6.48824C11.8899 6.64261 11.7276 6.80808 11.3006 7.23508L10.6819 7.8538C10.4867 8.04906 10.4867 8.36564 10.6819 8.5609C10.8772 8.75616 11.1938 8.75617 11.389 8.5609L12.0077 7.94218L12.0507 7.89926C12.4203 7.52973 12.6568 7.29327 12.822 7.05017C13.4972 6.05619 13.5321 4.76249 12.8819 3.77244C12.7233 3.53099 12.4922 3.29998 12.1408 2.94868L12.0961 2.90405L12.0515 2.85939C11.7002 2.50796 11.4692 2.27686 11.2277 2.11829C10.2377 1.4681 8.94398 1.50296 7.95001 2.17819C7.70691 2.34333 7.47044 2.57987 7.1009 2.94952L7.058 2.99244L6.43928 3.61116C6.24401 3.80642 6.24401 4.123 6.43928 4.31826C6.63454 4.51352 6.95112 4.51352 7.14638 4.31826L7.7651 3.69954C8.1921 3.27254 8.35757 3.11024 8.51194 3.00538ZM4.31796 7.14669C4.51322 6.95143 4.51322 6.63484 4.31796 6.43958C4.12269 6.24432 3.80611 6.24432 3.61085 6.43958L2.99213 7.0583L2.94922 7.10121C2.57957 7.47074 2.34303 7.70721 2.17788 7.95031C1.50265 8.94429 1.4678 10.238 2.11799 11.228C2.27656 11.4695 2.50766 11.7005 2.8591 12.0518L2.90374 12.0964L2.94837 12.1411C3.29967 12.4925 3.53068 12.7236 3.77214 12.8822C4.76219 13.5324 6.05589 13.4975 7.04986 12.8223C7.29296 12.6572 7.52943 12.4206 7.89896 12.051L7.89897 12.051L7.94188 12.008L8.5606 11.3893C8.75586 11.1941 8.75586 10.8775 8.5606 10.6822C8.36533 10.487 8.04875 10.487 7.85349 10.6822L7.23477 11.3009C6.80777 11.7279 6.6423 11.8902 6.48794 11.9951C5.81158 12.4546 4.95642 12.4636 4.32107 12.0463C4.17681 11.9516 4.02274 11.8012 3.61085 11.3893C3.19896 10.9774 3.0486 10.8234 2.95385 10.6791C2.53661 10.0438 2.54561 9.1886 3.00507 8.51224C3.10993 8.35788 3.27224 8.19241 3.69924 7.76541L4.31796 7.14669ZM9.62172 6.08555C9.81698 5.89029 9.81698 5.5737 9.62172 5.37844C9.42646 5.18318 9.10988 5.18318 8.91461 5.37844L5.37908 8.91398C5.18382 9.10924 5.18382 9.42582 5.37908 9.62108C5.57434 9.81634 5.89092 9.81634 6.08619 9.62108L9.62172 6.08555Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Link2Icon;
