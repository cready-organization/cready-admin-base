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
    "inline-flex px-6 py-3 text-white text-center duration-150 bg-indigo-600 rounded-md hover:bg-indigo-700 active:shadow-xl cursor-pointer",
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
