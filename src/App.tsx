import './App.scss';
import styled from '@emotion/styled';
import { BasePage } from './components/pages';

const AppContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow-x: hidden;
  background: rgb(42, 51, 66);
`;

function App() {
  return (
    <AppContainer>
      <BasePage />
    </AppContainer>
  );
}

export default App;
