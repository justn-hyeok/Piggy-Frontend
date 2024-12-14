import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { AppRoutes } from "./routes/AppRoutes";
import styled from "styled-components";

export const App = () => {
  return (
    <AppContainer>
      <Header />
      <MainContent>
        <AppRoutes />
      </MainContent>
      <Footer />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  padding-bottom: 2rem;
`;