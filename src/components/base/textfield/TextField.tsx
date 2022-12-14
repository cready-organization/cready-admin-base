import * as React from "react";
import { TEXTFIELD_TYPE } from "../../../helpers/app-enum";
import { IInputCommonProps } from "../../../helpers/app-interface";

interface ITextFieldProps extends React.PropsWithChildren, IInputCommonProps {
  type?: TEXTFIELD_TYPE;
  prefix?: React.ReactNode;
  wrapperClassName?: string;
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
    inputClassName = "",
    error,
    unit,
    disabled,
    onFocus,
    onBlur,
    onChange,
  } = props;

  return (
    <div className={wrapperClassName}>
      {label && <label className="block pb-2 text-gray-500">{label}</label>}
      <div className="flex items-center text-gray-400 border rounded-md focus-within:outline focus-within:outline-indigo-200">
        {prefix && (
          <div className="px-3 py-2.5 rounded-l-md bg-gray-50 border-r h-11">
            {prefix}
          </div>
        )}
        <input
          className={`w-full p-2.5 p-x-4 bg-transparent outline-none h-11 ${inputClassName}`}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
        />
        {unit && (
          <div className="px-3 py-2.5 rounded-r-md bg-gray-50 border-l h-11">
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
