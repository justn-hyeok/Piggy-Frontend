import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { fetchGoals } from '../../api/goalAPI';

interface GoalData {
  id: number;
  name: string;
  description: string;
  amount: number;
  saved: number;
}

const dummyData: GoalData = {
  id: 1,
  name: 'Dummy Goal',
  description: 'This is a dummy goal description',
  amount: 100000,
  saved: 50000,
};

const Kid2: React.FC = () => {
  const [goalData, setGoalData] = useState<GoalData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGoalData = async () => {
      try {
        const goals = await fetchGoals();
        if (goals.length > 0) {
          setGoalData(goals[0]); // 첫 번째 목표 데이터를 사용
        }
      } catch (error) {
        console.error('Error fetching goal data:', error);
        setGoalData(dummyData); // 에러 발생 시 더미 데이터 사용
      }
    };

    fetchGoalData();
  }, []);

  if (!goalData) {
    return <div>Loading...</div>;
  }

  const handleNextPage = () => {
    navigate('/kids/kid1');
  };

  const { saved: weeklySavedAmount = 0, amount: goalAmount = 0 } = goalData;
  const totalSavedAmount = goalData.saved ?? 0;
  const remainingAmount = Math.max(goalAmount - totalSavedAmount, 0);

  return (
    <PageContainer>
      <BlackContainer>
        <ContentContainer>
          <Title>축하드려요! 🎉</Title>
          <MainContent>
            <Subtitle>
              이번 주에 <Highlight>{(weeklySavedAmount ?? 0).toLocaleString()}원</Highlight> 저축했어요!
            </Subtitle>
            <Details>
              <DetailItem>
                <Label>목표 금액</Label>
                <Amount>{(goalAmount ?? 0).toLocaleString()}원</Amount>
              </DetailItem>
              <DetailItem>
                <Label>총 저축 금액</Label>
                <Amount highlight>{(totalSavedAmount ?? 0).toLocaleString()}원</Amount>
              </DetailItem>
              <DetailItem>
                <Label>남은 금액</Label>
                <Amount>{(remainingAmount ?? 0).toLocaleString()}원</Amount>
              </DetailItem>
            </Details>
          </MainContent>
        </ContentContainer>
        <NavigationButton onClick={handleNextPage}>1</NavigationButton>
      </BlackContainer>
    </PageContainer>
  );
};

export default Kid2;

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: black;
`;

const BlackContainer = styled.div`
  width: 800px;
  height: 480px;
  border: 2px solid #ecc1d7;
  border-radius: 20px;
  background: black;
  color: white;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1;
`;

const MainContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ecc1d7;
`;

const Subtitle = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
`;

const Highlight = styled.span`
  color: #ecc1d7;
  font-weight: bold;
`;

const Details = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #333;
`;

const Label = styled.span`
  font-size: 1.2rem;
  color: #a4a4a4;
`;

const Amount = styled.span<{ highlight?: boolean }>`
  font-size: 1.4rem;
  font-weight: ${props => props.highlight ? '700' : '500'};
  color: ${props => props.highlight ? '#ecc1d7' : 'white'};
`;

const NavigationButton = styled.div`
  width: 60px;
  height: 60px;
  border: 2px solid #ecc1d7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  color: #ecc1d7;
  cursor: pointer;
  margin-left: 2rem;
`;