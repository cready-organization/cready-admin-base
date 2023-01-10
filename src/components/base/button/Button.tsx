import classNames from "classnames";
import React from "react";

interface IButtonProps extends React.PropsWithChildren {
  fullWidth?: boolean;
  customClassName?: string;
  onClick?: (e: React.SyntheticEvent) => void;
}

function Button(props: IButtonProps) {
  const { children, fullWidth = false, customClassName, onClick } = props;

  const buttonClassName = classNames(
    "inline-flex px-6 py-3 bg-primary-color text-white text-center duration-150 rounded-default cursor-pointer shadow-[inset_0px_-2px_0px_rgba(0,0,0,0.25)] hover:shadow-none hover:drop-shadow-[0px_8px_16px_rgba(48,76,253,0.2)]",
    {
      "w-full": fullWidth,
    },
    customClassName
  );

  return (
    <div className={buttonClassName} onClick={onClick}>
      {children}
    </div>
  );
}

export default Button;
