import * as React from 'react';
import { IconProps } from './types';

export const QuestionMarkCircledIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" {...props}>
      <path
        d="M0.877014 7.49972C0.877014 3.84204 3.84216 0.876892 7.49985 0.876892C11.1575 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1575 14.1226 7.49985 14.1226C3.84216 14.1226 0.877014 11.1574 0.877014 7.49972ZM7.49985 1.82689C4.36683 1.82689 1.82701 4.36671 1.82701 7.49972C1.82701 10.6327 4.36683 13.1726 7.49985 13.1726C10.6328 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6328 1.82689 7.49985 1.82689ZM8.24987 10.5C8.24987 10.9142 7.91408 11.25 7.49987 11.25C7.08565 11.25 6.74987 10.9142 6.74987 10.5C6.74987 10.0858 7.08565 9.75 7.49987 9.75C7.91408 9.75 8.24987 10.0858 8.24987 10.5ZM6.04997 6.25C6.04997 5.57211 6.63505 4.925 7.49997 4.925C8.3649 4.925 8.94997 5.57211 8.94997 6.25C8.94997 6.74118 8.67996 6.99212 8.21441 7.27494C8.16244 7.30651 8.10252 7.34131 8.03841 7.37854L8.03835 7.37858C7.85515 7.48497 7.63782 7.61119 7.47443 7.73849C7.23208 7.92732 6.94997 8.23198 6.94997 8.7C6.94997 9.00376 7.19622 9.25 7.49997 9.25C7.80234 9.25 8.04772 9.00601 8.04996 8.70417L8.0505 8.7033C8.05918 8.6896 8.08487 8.65735 8.15052 8.6062C8.25201 8.52712 8.36502 8.46163 8.51561 8.37436L8.51565 8.37433C8.59416 8.32883 8.68289 8.27741 8.78553 8.21506C9.31998 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93505 3.825 7.49997 3.825C6.0649 3.825 4.94997 4.92789 4.94997 6.25C4.94997 6.55376 5.19622 6.8 5.49997 6.8C5.80373 6.8 6.04997 6.55376 6.04997 6.25Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default QuestionMarkCircledIcon;
