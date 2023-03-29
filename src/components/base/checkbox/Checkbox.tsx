import React from 'react';

import './style.scss';

interface ICheckboxProps extends React.PropsWithChildren {
  id?: string;
  name?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Checkbox(props: ICheckboxProps) {
  const { id, name, checked, onChange } = props;
  return (
    <div className="relative block">
      <input
        className="absolute opacity-0 -z-10 peer/custom-input"
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label className={`custom-input`} htmlFor={id}></label>
    </div>
  );
}

export default Checkbox;
