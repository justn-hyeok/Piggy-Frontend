import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";

// 페이지 컴포넌트 임포트
import Home from "./pages/Home";
// import Dashboard from "./pages/Dashboard";
import Log from "./pages/LogCheck";
import GoalManagementPage from "./pages/GoalManagement";
import Kid from "./pages/Kid";
import NotFound from "./pages/NotFound";

// 레이아웃
import Header from "./layout/Header";
import Footer from "./layout/Footer";

// 전체 앱 컨테이너
const AppContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

// 메인 컨텐츠 영역
const MainContent = styled.main`
  flex: 1;
  padding-bottom: 2rem;
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/log" element={<Log />} />
            <Route path="/goal" element={<GoalManagementPage />} />
            <Route path="/kids" element={<Kid />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;