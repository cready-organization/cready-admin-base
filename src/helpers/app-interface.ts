export interface IInputCommonProps {
  label?: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  onFocus?: (e: React.SyntheticEvent) => void;
  onBlur?: (e: React.SyntheticEvent) => void;
  onChange?: (e: React.SyntheticEvent) => void;
  onClickUnit?: (e: React.SyntheticEvent) => void;
}
