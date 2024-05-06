import React, { useState } from 'react';
import {
  FormControl,
  FormHelperText,
  Input as Field,
  InputLabel,
} from '@mui/material';
import styled from '@emotion/styled';

const Input = styled(Field)`
  && {
    color: #fff;
    &::placeholder {
      color: #fff;
    }
  }
`;

export interface FormInputProps {
  value?: string | number | null;
  isError?: boolean;
  errorMessage?: string;
  isDisabled?: boolean;
  name: string;
  fieldType?: string;
  style?: object;
  label?: string;
  id?: string;
  handleChange: ({ name, value }: { name: string; value: string }) => void;
  errorField?: string;
  variant?: 'standard' | 'filled' | 'outlined';
}

export const InputField = (props: FormInputProps) => {
  const {
    value = '',
    isError = false,
    errorMessage = 'This is required.',
    isDisabled,
    name,
    fieldType,
    style,
    label,
    id,
    variant,
    handleChange,
  } = props;

  const [field, setField] = useState('');

  const updateInput = (event: {
    preventDefault: () => void;
    target: { value: React.SetStateAction<string> };
  }) => {
    event.preventDefault();
    setField(event.target.value);
    handleChange({ name, value: event.target.value as string });
  };

  return (
    <>
      <FormControl
        disabled={isDisabled}
        error={isError}
        variant={variant}
        sx={style}
      >
        <InputLabel sx={{ color: '#fff' }}>{label}</InputLabel>
        <Input
          id={id}
          value={value ?? field}
          type={fieldType}
          name={name}
          onChange={updateInput}
        />
        <FormHelperText>{isError && errorMessage}</FormHelperText>
      </FormControl>
    </>
  );
};
