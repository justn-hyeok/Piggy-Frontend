import React, { useEffect, useState } from 'react';
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

const Kid1: React.FC = () => {
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
      }
    };

    fetchGoalData();
  }, []);

  if (!goalData) {
    return <div>Loading...</div>;
  }

  const { name, saved = 0, amount = 0 } = goalData;
  const percentage = amount > 0 ? Math.floor((saved / amount) * 100) : 0;

  const handleNextPage = () => {
    navigate('/kids/kid2');
  };

  return (
    <PageContainer>
      <BlackContainer>
        <ContentContainer>
          <Title>목표 현황 🎯</Title>
          <MainContent>
            <ProgressBar>
              <ProgressFill style={{ width: `${percentage}%` }} />
              <PercentageText>{percentage}%</PercentageText>
            </ProgressBar>
            <Details>
              <DetailItem>
                <Label>목표</Label>
                <Amount>{name}</Amount>
              </DetailItem>
              <DetailItem>
                <Label>현재 저축액</Label>
                <Amount highlight>{saved.toLocaleString()}원</Amount>
              </DetailItem>
              <DetailItem>
                <Label>목표 금액</Label>
                <Amount>{amount.toLocaleString()}원</Amount>
              </DetailItem>
            </Details>
          </MainContent>
        </ContentContainer>
        <NavigationButton onClick={handleNextPage}>2</NavigationButton>
      </BlackContainer>
    </PageContainer>
  );
};

export default Kid1;

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

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ecc1d7;
`;

const MainContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 40px;
  background: white;
  border-radius: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: #ecc1d7;
  position: absolute;
  left: 0;
  transition: width 0.5s ease;
`;

const PercentageText = styled.div`
  position: relative;
  color: black;
  font-size: 1.5rem;
  font-weight: 700;
  z-index: 1;
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