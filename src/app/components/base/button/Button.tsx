import classNames from 'classnames';
import React from 'react';

interface IButtonProps extends React.PropsWithChildren {
  fullWidth?: boolean;
  block?: boolean;
  customClassName?: string;
  onClick?: (e: React.SyntheticEvent) => void;
}

function Button(props: IButtonProps) {
  const { children, fullWidth = false, block = false, customClassName, onClick } = props;

  const buttonClassName = classNames(
    (block
      ? 'bg-grey-color cursor-not-allowed'
      : 'bg-primary-color text-white cursor-pointer shadow-[inset_0px_-2px_0px_rgba(0,0,0,0.25)] hover:shadow-none hover:drop-shadow-[0px_8px_16px_rgba(48,76,253,0.2)]') +
      ' inline-flex px-6 py-3 text-center duration-150 rounded-default',
    {
      'w-full': fullWidth,
    },
    customClassName,
  );

  return (
    <div className={buttonClassName} onClick={block ? undefined : onClick}>
      {children}
    </div>
  );
}

export default Button;
