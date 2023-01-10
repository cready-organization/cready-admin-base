import * as React from "react";
import { TEXTFIELD_TYPE } from "src/ultil/enum/app-enum";
import { IInputCommonProps } from "src/ultil/enum/app-interface";

interface ITextFieldProps extends IInputCommonProps<HTMLInputElement> {
  type?: TEXTFIELD_TYPE;
  prefix?: React.ReactNode;
  wrapperClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  unit?: string;
  autoFocus?: boolean;
  onClickUnit?: (e: React.SyntheticEvent) => void;
}

function TextField(props: ITextFieldProps) {
  const {
    prefix,
    label,
    type,
    placeholder,
    value,
    wrapperClassName = "",
    labelClassName = "",
    inputClassName = "",
    error,
    unit,
    disabled,
    autoFocus,
    onFocus,
    onBlur,
    onChange,
    onClickUnit,
  } = props;

  return (
    <div className={wrapperClassName}>
      {label && (
        <label className={`block pb-1.5 text-gray-500 ${error ? 'text-orange-color' : ''} ${labelClassName}`}>
          {label}
        </label>
      )}
      {/*text-gray-400 border rounded-md focus-within:outline focus-within:outline-indigo-200 */}
      <div className={`flex items-center border border-solid border-input-border-color rounded-default outline-0 focus-within:border-primary-color  ${error ? 'border-orange-color text-orange-color' : ''}`}>
        {prefix && (
          <div className="px-3 py-2.5 rounded-l-md bg-gray-50 border-r h-10 ">
            {prefix}
          </div>
        )}
        <input
          className={`w-full py-4 px-2.5 bg-transparent outline-none h-10  ${inputClassName}`}
          type={type}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          autoFocus={autoFocus}
        />
        {unit && (
          <div
            className="px-3 py-2 h-10 cursor-pointer select-none"
            onClick={onClickUnit}
          >
            {unit}
          </div>
        )}
      </div>

      {error && (
        <div className="text-right">
          <span className="text-orange-color">{error}</span>
        </div>
      )}
    </div>
  );
}

export default TextField;
