import * as React from 'react';
import {
  Button,
  CssBaseline,
  TextField,
  Paper,
  Box,
  Grid,
} from '@mui/material';
import styled from '@emotion/styled';
import loginbg from '../../assets/loginbg.png';

const Input = styled(TextField)`
  &&&& {
    label {
      color: rgba(255, 255, 255, 0.5);
      font-weight: 100;
    }

    input {
      color: #fff;
      &:hover,
      &:focus {
        border-color: #fff;
        outline-color: #fff;
      }
    }

    fieldset {
      border-color: #fff;
      color: #fff;
      &:hover,
      &:focus {
        border-color: #fff;
        outline-color: #fff;
      }
    }
  }
`;

import logo from '../../assets/header-logo-white.svg';
import { useDispatch } from 'react-redux';
import { isAuth, isLogout } from '../../reducers';

export const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    const credentials = {
      email: data.get('email'),
      password: data.get('password'),
    };
    /*
      lets assume that your credentials are
      - testdynamics@email.com
      - password
    */
    if (
      credentials.email === 'testdynamics@email.com' &&
      credentials.password === 'password'
    ) {
      dispatch(isLogout(false));
      dispatch(isAuth(true));
    }
  };

  return (
    <Grid
      container
      component="main"
      sx={{ height: '100vh', backgroundColor: 'rgb(42,51,66)' }}
    >
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={6}
        md={6}
        sx={{
          backgroundImage: `url(${loginbg})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'rgb(51,63,81)',
          backgroundSize: 'auto',
          backgroundPosition: 'center',
        }}
      />
      <Grid
        sx={{ backgroundColor: 'rgb(42,51,66)' }}
        item
        xs={12}
        sm={6}
        md={6}
        component={Paper}
        elevation={6}
        square
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={logo} alt="logo" />
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <Input
              sx={{ borderColor: '#fff', color: '#fff' }}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Input
              sx={{ borderColor: '#fff', color: '#fff' }}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
