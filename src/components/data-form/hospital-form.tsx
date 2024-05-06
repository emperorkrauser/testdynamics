import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from '@mui/material';
import { useState } from 'react';
import { InputField } from '../utils';
import { useDispatch } from 'react-redux';
import { updateHospitals } from '../../reducers';
import styled from '@emotion/styled';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const HospitalNameContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: start;
  padding: 15px;
  color: #fff;
  background: rgb(51, 63, 81);
`;

const HospitalFormHeader = styled.h2`
  color: #fff;
`;

const HospitalFormRule = styled.p`
  color: #fff;
`;

interface HospitalValueSubmitProps {
  name: string;
  id: string;
  active: boolean;
  manager: string;
  plan: string;
}

export const HospitalForm = (props) => {
  const { handleCloseModal } = props;
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<HospitalValueSubmitProps>({
    name: '',
    id: '',
    active: false,
    manager: '',
    plan: '',
  });
  const [isError, setIsError] = useState({
    name: false,
    id: false,
    active: false,
    manager: false,
    plan: false,
  });
  const [hasError, setHasError] = useState<boolean>(false);

  const handleSubmit = () => {
    dispatch(updateHospitals({ ...formData }));
    setFormData({
      name: '',
      id: '',
      active: false,
      manager: '',
      plan: '',
    });
    setHasError(false);
    handleCloseModal(true);
  };

  const handleChange = (data) => {
    const { name, value } = data;
    setFormData({
      ...formData,
      [name ?? data.target.name]: value ?? data.target.value,
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const validateForm = (data: any) => {
    for (const key in data) {
      const formVal =
        typeof data[key] === 'string' ? data[key].trim() : data[key];
      if (
        (typeof formVal === 'string' && !formVal) ||
        formVal === '' ||
        formVal === ' '
      ) {
        setIsError({ ...isError, [key]: true });
      }
    }
    for (const key in data) {
      const formVal =
        typeof data[key] === 'string' ? data[key].trim() : data[key];
      if (
        (typeof formVal === 'string' && !formVal) ||
        formVal === '' ||
        formVal === ' '
      ) {
        setHasError(true);
        return true;
      }
    }
  };

  const checkValidity = () => {
    const hasErrors = validateForm(formData);
    if (hasErrors) return;
    handleSubmit();
  };

  return (
    <>
      <HospitalFormHeader>New Hospital Info</HospitalFormHeader>
      <HospitalFormRule>
        Fill in the info of the Hospital. You can change this at any time by
        reaching the Hospital management page.
      </HospitalFormRule>
      <HospitalNameContainer>
        <LocalHospitalIcon />
        {formData.name ? formData.name : 'Hospital Name'}
      </HospitalNameContainer>
      <Divider />
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          '& input::placeholder': { color: '#fff' },
          backgroundColor: 'rgb(51,63,81)',
          padding: '15px',
          margin: '15px 0',
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
          label="Hospital name"
          handleChange={handleChange}
          isError={hasError}
          variant="outlined"
        />
        <InputField
          value={formData.id ?? null}
          isDisabled={false}
          name="id"
          fieldType="text"
          label="Hospital Id"
          handleChange={handleChange}
          isError={hasError}
          variant="outlined"
        />

        <FormControl>
          <FormLabel
            sx={{ color: '#fff' }}
            id="demo-row-radio-buttons-group-label"
          >
            Status
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="active"
          >
            <FormControlLabel
              sx={{ color: '#fff' }}
              value="true"
              control={<Radio />}
              label="Active"
            />
            <FormControlLabel
              sx={{ color: '#fff' }}
              value="false"
              control={<Radio />}
              label="Inactive"
              name="active"
            />
          </RadioGroup>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="manager" sx={{ color: '#fff' }}>
            TestDynamics account manager
          </InputLabel>
          <Select
            name="manager"
            labelId="manager"
            value={formData.manager}
            onChange={handleChange}
            sx={{ color: '#fff' }}
          >
            <MenuItem value="John">John</MenuItem>
            <MenuItem value="Brad">Brad</MenuItem>
            <MenuItem value="Andrew">Andrew</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel sx={{ color: '#fff' }} id="demo-simple-select-label">
            Plan
          </InputLabel>
          <Select
            name="plan"
            labelId="plan"
            id="plan"
            value={formData.plan}
            onChange={handleChange}
            sx={{ color: '#fff' }}
          >
            <MenuItem value="Plan A">Plan A</MenuItem>
            <MenuItem value="Plan B">Plan B</MenuItem>
            <MenuItem value="Plan C">Plan C</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button variant="contained" onClick={checkValidity}>
        Submit
      </Button>
    </>
  );
};
