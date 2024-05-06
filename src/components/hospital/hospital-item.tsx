import {
  Box,
  Divider,
  Card,
  Stack,
  Typography,
  CardMedia,
  Grid,
  Link,
  Button,
} from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import styled from '@emotion/styled';

const ItemLinks = styled(Button)`
  border: 0;
  background: none;
  color: #fff;
  font-size: 10px;
`;

export const HospitalItem = (props: any) => {
  const { name, id } = props.data;
  console.log('props', props);
  return (
    <>
      <Card variant="outlined" sx={{ backgroundColor: 'rgb(51,63,81)' }}>
        <Box sx={{ p: 2 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="start"
          >
            <Grid item xs={1}>
              <CardMedia
                sx={{
                  height: '50px',
                  width: '50px',
                }}
                component="img"
                image="https://place-hold.it/50"
                alt="green iguana"
              />
            </Grid>
            <Grid sx={{ padding: '0 0 0 25px', color: '#fff' }} item xs={9}>
              <Typography
                sx={{ fontWeight: 'bold', fontSize: '18px' }}
                gutterBottom
                variant="h5"
                component="p"
              >
                {name}
              </Typography>
              <Typography
                sx={{
                  color: '#DDDDC8',
                  margin: '0',
                  padding: '0',
                  fontSize: '14px',
                }}
              >
                <LocalOfferIcon
                  sx={{
                    height: '10px',
                    width: '10px',
                    transform: 'rotateY(180deg)',
                  }}
                />{' '}
                ID: {id}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Link
                sx={{ color: '#fff', fontSize: '10px', textDecoration: 'none' }}
                href="#"
              >
                <EditIcon
                  sx={{
                    width: '11px',
                    height: '11px',
                    color: '#ddd',
                    margin: '0 10px',
                    padding: '0',
                  }}
                />
                Edit
              </Link>
            </Grid>
          </Stack>
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Grid container>
            <Grid sx={{ textAlign: 'left' }} item xs={6}>
              <ItemLinks>
                Show details <KeyboardArrowDownIcon />
              </ItemLinks>
            </Grid>
            <Grid sx={{ textAlign: 'right' }} item xs={6}>
              <ItemLinks>
                Show details <ArrowRightAltIcon />
              </ItemLinks>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </>
  );
};
