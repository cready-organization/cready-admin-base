import * as React from "react";
import classNames from "classnames";
import { IInputCommonProps } from "src/ultil/enum/app-interface";

interface ITextareaProps extends IInputCommonProps<HTMLInputElement> {
  prefix?: React.ReactNode;
  wrapperClassName?: string;
  inputClassName?: string;
}

function Textarea(props: ITextareaProps) {
  const {
    prefix,
    label,
    placeholder,
    wrapperClassName = "",
    inputClassName = "",
    error,
    disabled,
    onFocus,
    onBlur,
    onChange,
  } = props;

  const wrapperClass = classNames(wrapperClassName);
  const inputClass = classNames(
    "w-full p-2.5 p-x-4 bg-transparent outline-none min-h-[100px]",
    inputClassName,
  );

  return (
    <div className={wrapperClass}>
      {label && <label className="block pb-2 text-gray-500">{label}</label>}
      <div className="flex items-center text-gray-400 border rounded-md focus-within:outline focus-within:outline-indigo-200">
        {prefix && (
          <div className="px-3 py-2.5 rounded-l-md bg-gray-50 border-r h-11">
            {prefix}
          </div>
        )}
        <textarea
          className={inputClass}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={() => onChange}
        />
      </div>
      {error && (
        <div className="text-right">
          <span className="text-red-500">{error}</span>
        </div>
      )}
    </div>
  );
}

export default Textarea;
