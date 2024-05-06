import { CssBaseline } from '@mui/material';
import { NavBar } from '../navigation';

import styled from '@emotion/styled';

const ContentContainer = styled.div`
  position: relative;
  padding: 0 16em;
`;

export const PageWrapper = ({ children }: any) => {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <ContentContainer>{children}</ContentContainer>
    </>
  );
};
