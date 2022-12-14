import classNames from "classnames";
import React from "react";

interface IBadgeProps extends React.PropsWithChildren {
  customClassName?: string;
  onClose?: (e: React.SyntheticEvent) => void;
}

function Badge(props: IBadgeProps) {
  const { children, customClassName, onClose } = props;

  const badgeClass = classNames(
    "text-xs inline-flex items-center py-1 px-3 text-center whitespace-nowrap font-bold bg-gray-200 dark:bg-red-200 text-gray-700 rounded-full leading-normal ",
    customClassName
  );

  const badgeBtnClass = classNames("w-4 h-4 ml-2", {
    "cursor-pointer": onClose,
  });

  return (
    <span className={badgeClass}>
      {children}
      {onClose && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={badgeBtnClass}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      )}
    </span>
  );
}

export default Badge;
