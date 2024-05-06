import { Button, Grid, Typography } from '@mui/material';
import { PageWrapper } from './page-wrapper';
import { Hospital } from '../hospital';
import { AppModal } from '../modals';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

export const Management = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpen = () => {
    setIsOpenModal(true);
  };
  const handleClose = (data: boolean) => {
    setIsOpenModal(data);
  };

  return (
    <PageWrapper>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid justifyContent="center" alignItems="center" item xs={6} md={6}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: '#fff', padding: '25px 0' }}
          >
            Manage Hospitals:
          </Typography>
        </Grid>
        <Grid justifyContent="center" alignItems="center" item xs={6} md={6}>
          <Button variant="contained" onClick={handleOpen}>
            <AddIcon />
            Create Hospital
          </Button>
          <AppModal isOpenModal={isOpenModal} handleClose={handleClose} />
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid justifyContent="center" alignItems="center" item xs={6} md={6}>
          <Hospital />
        </Grid>
        <Grid justifyContent="center" alignItems="center" item xs={6} md={6}>
          Form
        </Grid>
      </Grid>
    </PageWrapper>
  );
};
