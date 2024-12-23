import { Routes, Route } from 'react-router-dom';
import RoutePaths from './RoutePaths'; // 라우트 경로 상수

import { Home } from '../pages/HomePage';
import GoalPage from '../pages/GoalPage';
import Kid1 from '../pages/kids/Kid1';
import Kid2 from '../pages/kids/Kid2';
import LogCheck from '../pages/LogCheckPage';
import NotFound from '../pages/NotFound';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* 홈 */}
      <Route path={RoutePaths.HOME} element={<Home />} />

      {/* 목표 관리 */}
      <Route path={RoutePaths.GOAL_MANAGEMENT} element={<GoalPage />} />

      {/* 아이들 관리 */}
      <Route path={RoutePaths.KID1} element={<Kid1 />} />
      <Route path={RoutePaths.KID2} element={<Kid2 />} />

      {/* 로그 체크 */}
      <Route path={RoutePaths.LOG_CHECK} element={<LogCheck />} />

      {/* 404 페이지 */}
      <Route path={RoutePaths.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
};