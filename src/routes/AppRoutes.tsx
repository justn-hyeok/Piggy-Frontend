import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoutePaths from './RoutePaths'; // 라우트 경로 상수
import Home from '../pages/Home';
import GoalManagement from '../pages/GoalManagement';
import Kid1 from '../pages/Kids/Kid1';
import Kid2 from '../pages/Kids/Kid2';
import LogCheck from '../pages/LogCheck';
import NotFound from '../pages/NotFound';

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* 홈 */}
        <Route path={RoutePaths.HOME} element={<Home />} />

        {/* 목표 관리 */}
        <Route path={RoutePaths.GOAL_MANAGEMENT} element={<GoalManagement />} />

        {/* 아이들 관리 */}
        <Route path={RoutePaths.KIDS}>
          <Route path="kid1" element={<Kid1 />} />
          <Route path="kid2" element={<Kid2 />} />
        </Route>

        {/* 로그 체크 */}
        <Route path={RoutePaths.LOG_CHECK} element={<LogCheck />} />

        {/* 404 페이지 */}
        <Route path={RoutePaths.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </Router>
  );
};