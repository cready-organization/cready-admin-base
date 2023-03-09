import React, { useMemo, RefObject, createRef } from 'react';

import { TEXTFIELD_TYPE } from 'ultil/enum/app-enum';
import { TextField } from '../textfield';

interface OtpInputProps {
    value: string;
    valueLength: number;
    onChange: (value: string) => void;
}

// define regular expression that checks a string is a digit
const RE_DIGIT = new RegExp(/^\d+$/);

// define class name for TextField
const wrapperClassName = 'ml-2 max-w-16 w-10 max-w-h-16 h-10 xs:w-12 xs:h-12 md:w-16 md:h-16';
const inputCodeClassName =
    'font-normal text-body-dark-color text-center text-[20px] leading-[30px] xs:text-[24px] xs:leading-[24px] md:text-[28px] md:leading-[42px]';

function OtpInput(props: OtpInputProps) {
    const { value, valueLength, onChange } = props;

    // define array to save ref TextField
    const elemRefs: Array<RefObject<HTMLInputElement>> = [];

    // parse string to array and check string is a digit
    const valueItems = useMemo(() => {
        const valueArray = value.split('');
        const items: Array<string> = [];

        for (let i = 0; i < valueLength; i++) {
            const char = valueArray[i];

            if (RE_DIGIT.test(char)) {
                items.push(char);
            } else {
                items.push('');
            }
        }

        return items;
    }, [value, valueLength]);

    // focus input where you want
    const focusInput = (focusIndex: number) => {
        let elem: boolean | React.RefObject<HTMLInputElement> = false;
        elem = elemRefs[focusIndex];

        if (elem) {
            if (elem.current) {
                elem.current.setSelectionRange(0, elem.current.value.length);
                return elem.current.focus();
            }
        }
    };

    // handle change input data
    const inputOnChange = (e: React.SyntheticEvent<HTMLInputElement>, index: number) => {
        const target = e.currentTarget;
        let targetValue = target.value;
        const isTargetValueDigit = RE_DIGIT.test(targetValue);

        if (!isTargetValueDigit && targetValue !== '') {
            return;
        }

        targetValue = isTargetValueDigit ? targetValue : ' ';

        const targetValueLength = targetValue.length;

        if (targetValueLength === 1) {
            const newValue = value.substring(0, index) + targetValue + value.substring(index + 1);

            onChange(newValue);

            if (!isTargetValueDigit) {
                return;
            }

            focusInput(index + 1);
        } else if (targetValueLength === valueLength) {
            onChange(targetValue);
            focusInput(elemRefs.length - 1);
        }
    };

    const inputOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        const tabIndex = Number(e.currentTarget.getAttribute('data-index') || 0);

        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            focusInput(tabIndex + 1);
        }

        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            focusInput(tabIndex - 1);
        }

        if (e.key !== 'Backspace' || target.value !== '') {
            return;
        }

        tabIndex > 0 && focusInput(tabIndex - 1);
    };

    // function define Otp input code
    const inputOtpList = valueItems.map((digit, index) => {
        // define ref and push ref to array
        const ref: React.LegacyRef<HTMLInputElement> = createRef();
        elemRefs.push(ref);
        return (
            <TextField
                key={index}
                value={digit}
                onChange={(e) => inputOnChange(e, index)}
                wrapperClassName={index === 0 ? 'ml-0 ' + wrapperClassName : wrapperClassName}
                inputClassName={inputCodeClassName}
                onKeyDown={inputOnKeyDown}
                type={TEXTFIELD_TYPE.TEXT}
                dataIndex={index}
                maxLength={valueLength}
                autoFocus={index === 0}
                ref={ref}
            />
        );
    });

    return <div className="mt-[42px] flex justify-between">{inputOtpList}</div>;
}

export default OtpInput;
