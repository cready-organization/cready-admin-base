import classNames from 'classnames';
import React from 'react';

interface IButtonProps extends React.PropsWithChildren {
    fullWidth?: boolean;
    buttonType?: 'primary' | 'basic' | 'disabled';
    customClassName?: string;
    onClick?: (e: React.SyntheticEvent) => void;
}

function Button(props: IButtonProps) {
    const { children, fullWidth = false, buttonType = 'primary', customClassName, onClick } = props;
    let buttonTypeClassName;
    if (buttonType === 'basic') {
        buttonTypeClassName =
            'bg-white text-text-color cursor-pointer drop-shadow-[-4px_8px_24px_rgba(44,63,88,0.02)] hover:text-primary-color';
    } else if (buttonType === 'disabled') {
        buttonTypeClassName = 'bg-grey-color cursor-not-allowed';
    } else {
        buttonTypeClassName =
            'bg-primary-color text-white cursor-pointer shadow-[inset_0px_-2px_0px_rgba(0,0,0,0.25)] hover:shadow-none hover:drop-shadow-[0px_8px_16px_rgba(48,76,253,0.2)]';
    }

    const buttonClassName = classNames(
        buttonTypeClassName + ' inline-flex px-6 py-3 justify-center items-center duration-150 rounded-default',
        {
            'w-full': fullWidth,
        },
        customClassName,
    );

    return (
        <div className={buttonClassName} onClick={buttonType === 'disabled' ? undefined : onClick}>
            {children}
        </div>
    );
}

export default Button;
