import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import THEME from '../constants/theme';
import { fetchLogs } from '../api/logAPI';

interface Log {
  id: number;
  goal_id: number | null;
  date: string;
  coin: number;
}

const LogCheckPage: React.FC = () => {
  const [logs, setLogs] = useState<Log[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadLogs = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchLogs();
        setLogs(data);
      } catch (err) {
        console.error('로그 로딩 실패:', err);
        setError('API 연결에 실패하여 더미데이터를 표시합니다.');
        setLogs([
          {
            id: 1,
            goal_id: 1,
            date: new Date().toISOString(),
            coin: 50000
          },
          {
            id: 2,
            goal_id: 1,
            date: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
            coin: 30000
          },
          {
            id: 3,
            goal_id: 1,
            date: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
            coin: 20000
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadLogs();
  }, []);

  if (loading) return <Message>로딩 중...</Message>;

  return (
    <Container>
      {error && <ErrorBanner>{error}</ErrorBanner>}
      <Title>저축 로그</Title>
      {logs.length > 0 ? (
        <LogList>
          {logs.map((log, index) => (
            <LogItem key={log.id} isLast={index === logs.length - 1}>
              <LogDetail>
                <Label>날짜:</Label>
                <Value>
                  {new Date(log.date).toLocaleString('ko-KR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </Value>
              </LogDetail>
              <LogDetail>
                <Label>목표 ID:</Label>
                <Value>{log.goal_id || '없음'}</Value>
              </LogDetail>
              <LogDetail>
                <Label>저축 금액:</Label>
                <Value>{log.coin.toLocaleString()}원</Value>
              </LogDetail>
            </LogItem>
          ))}
        </LogList>
      ) : (
        <EmptyMessage>저축 기록이 없습니다.</EmptyMessage>
      )}
    </Container>
  );
};

const Container = styled.div`
  max-width: 500px;
  margin: 1.5rem auto;
  padding: ${THEME.spacing.padding};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: ${THEME.colors.text};
  background: ${THEME.colors.background};
`;

const Title = styled.h1`
  text-align: center;
  font-size: 1.3rem;
  color: ${THEME.colors.text};
  margin-bottom: 1rem;
`;

const LogList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const LogItem = styled.li<{ isLast: boolean }>`
  background: #1f1f23;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #38383d;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: ${(props) => (props.isLast ? '0' : '0.8rem')};
`;

const LogDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.span`
  font-weight: bold;
  color: ${THEME.colors.text};
  font-size: 0.9rem;
`;

const Value = styled.span`
  color: ${THEME.colors.text};
  font-size: 0.9rem;
`;

const Message = styled.div`
  text-align: center;
  color: ${THEME.colors.text};
  margin: 2rem 0;
  font-size: 1rem;
`;

const ErrorBanner = styled.div`
  background: rgba(236, 193, 215, 0.1);
  color: ${THEME.colors.accent};
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  text-align: center;
  margin-bottom: 16px;
`;

const EmptyMessage = styled.p`
  color: ${THEME.colors.text};
  text-align: center;
  margin: 2rem 0;
  font-size: 1rem;
`;

export default LogCheckPage;