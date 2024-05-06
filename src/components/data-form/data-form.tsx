import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { InputField } from '../utils';
import { useDispatch } from 'react-redux';
import { updateForm } from '../../reducers';

export interface FormValueProps {
  name: string;
  value: string;
}

export interface FormValueSubmitProps {
  name: string | null;
  email: string | null;
}

export const DataForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<FormValueSubmitProps>({
    name: '',
    email: '',
  });
  const [isError, setIsError] = useState({
    name: false,
    email: false,
  });
  const [hasError, setHasError] = useState<boolean>(false);

  const handleSubmit = () => {
    console.log('trigger handleSubmit');
    console.log('hasError', hasError);
    const id = new Date(Date.now()).getTime();
    dispatch(updateForm({ ...formData, id }));
    setFormData({
      name: '',
      email: '',
    });
    setHasError(false);
  };

  const handleChange = (data: FormValueProps) => {
    const { name, value } = data;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const validateForm = (data: any) => {
    console.log('trigger validateForm');
    for (const key in data) {
      const formVal = data[key].trim();
      console.log('key and value', key, formVal);
      if (!formVal || formVal === '' || formVal === ' ') {
        setIsError({ ...isError, [key]: true });
      }
    }
    for (const key in data) {
      const formVal = data[key].trim();
      if (!formVal || formVal === '' || formVal === ' ') {
        setHasError(true);
        return true;
      }
    }
  };

  const checkValidity = () => {
    const hasErrors = validateForm(formData);
    console.log('hasErrors', hasErrors);
    console.log('trigger checkValidity');
    if (hasErrors) return;
    handleSubmit();
  };

  return (
    <>
      <h2>Add User Here:</h2>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={checkValidity}
      >
        <InputField
          value={formData.name ?? null}
          isDisabled={false}
          name="name"
          fieldType="text"
          label="Name"
          handleChange={handleChange}
          isError={hasError}
        />
        <InputField
          value={formData.email ?? null}
          isDisabled={false}
          name="email"
          fieldType="email"
          label="Email"
          handleChange={handleChange}
          isError={hasError}
        />
      </Box>
      <Button variant="contained" onClick={checkValidity}>
        Submit
      </Button>
    </>
  );
};
