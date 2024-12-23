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
        setError('로그 데이터를 불러오는 데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    loadLogs();
  }, []);

  if (loading) return <Message>로딩 중...</Message>;
  if (error) return <Message>{error}</Message>;

  return (
    <Container>
      <Title>저축 로그</Title>
      <LogList>
        {logs.map((log, index) => (
          <LogItem key={log.id} isLast={index === logs.length - 1}>
            <LogDetail>
              <Label>ID:</Label>
              <Value>{log.id}</Value>
            </LogDetail>
            <LogDetail>
              <Label>목표 ID:</Label>
              <Value>{log.goal_id || '없음'}</Value>
            </LogDetail>
            <LogDetail>
              <Label>날짜:</Label>
              <Value>{new Date(log.date).toLocaleString()}</Value>
            </LogDetail>
            <LogDetail>
              <Label>저축 금액:</Label>
              <Value>{log.coin}원</Value>
            </LogDetail>
          </LogItem>
        ))}
      </LogList>
    </Container>
  );
};

export default LogCheckPage;

const Container = styled.div`
  max-width: 500px;
  margin: 1.5rem auto;
  padding: ${THEME.spacing.padding};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: ${THEME.colors.text};
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
  font-size: 0.8rem;
`;

const Value = styled.span`
  color: ${THEME.colors.text};
  font-size: 0.8rem;
`;

const Message = styled.div`
  text-align: center;
  color: ${THEME.colors.text};
  margin: 2rem 0;
  font-size: 1rem;
`;