import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { AppRoutes } from "./routes/AppRoutes";
import styled from "styled-components";

const AppContent = () => {
  const location = useLocation();

  // Kid 관련 경로 여부 확인
  const isKidPage = location.pathname.startsWith("/kids");

  return (
    <AppContainer>
      {/* 헤더와 푸터를 Kid 페이지에서 제외 */}
      {!isKidPage && <Header />}
      <MainContent>
        <AppRoutes />
      </MainContent>
      {!isKidPage && <Footer />}
    </AppContainer>
  );
};

const App = () => {
  return (
    <Router>
      {/* Router로 감싼 후 AppContent 렌더링 */}
      <AppContent />
    </Router>
  );
};

export default App;

// 스타일 정의
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