import * as React from "react";
import { TEXTFIELD_TYPE } from "src/helpers/app-enum";
import { IInputCommonProps } from "src/helpers/app-interface";

interface ITextFieldProps extends React.PropsWithChildren, IInputCommonProps {
  type?: TEXTFIELD_TYPE;
  prefix?: React.ReactNode;
  wrapperClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  unit?: string;
}

function TextField(props: ITextFieldProps) {
  const {
    prefix,
    label,
    type,
    placeholder,
    wrapperClassName = "",
    labelClassName ="",
    inputClassName = "",
    error,
    unit,
    disabled,
    onFocus,
    onBlur,
    onChange,
    onClickUnit,
  } = props;

  return (
    <div className={wrapperClassName}>
      {label && <label className={`block pb-1.5 text-gray-500 ${labelClassName}`}>{label}</label>}
      {/*text-gray-400 border rounded-md focus-within:outline focus-within:outline-indigo-200 */}
      <div className="flex items-center border border-solid border-input-border-color rounded-default outline-0 ">
        {prefix && (
          <div className="px-3 py-2.5 rounded-l-md bg-gray-50 border-r h-10 ">
            {prefix}
          </div>
        )}
        <input
          className={`w-full p-4 px-2.5 bg-transparent outline-none h-10  ${inputClassName}`}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
        />
        {unit && (
          <div className="px-3 py-2 h-10 cursor-pointer select-none" onClick={onClickUnit}>
            {unit}
          </div>
        )}
      </div>

      {error && (
        <div className="text-right">
          <span className="text-red-500">{error}</span>
        </div>
      )}
    </div>
  );
}

export default TextField;
