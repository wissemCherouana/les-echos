import React, { FC } from 'react';
import { Dropdown, DropdownProps } from 'semantic-ui-react';
import { userOptions } from '../data';

type UserSelectorProps = {
  value: string;
  onChange: (value: string) => void;
};

export const UserSelector: FC<UserSelectorProps> = ({ value, onChange }) => {
  return (
    <Dropdown
      search
      selection
      fluid
      options={userOptions}
      value={value}
      onChange={(_e, data: DropdownProps) => onChange(data.value! as string)}
    />
  );
};
