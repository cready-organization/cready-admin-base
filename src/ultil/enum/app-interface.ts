import * as React from "react";
export interface IInputCommonProps<HTMLTypeElement> extends React.PropsWithChildren {
  label?: string;
  placeholder?: string;
  value?: string;
  error?: string;
  disabled?: boolean;
  onFocus?: (e: React.SyntheticEvent) => void;
  onBlur?: (e: React.SyntheticEvent) => void;
  onChange?: (e: React.SyntheticEvent<HTMLTypeElement>) => void;
}
