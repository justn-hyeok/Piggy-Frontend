import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Kid1: React.FC = () => {
  const goalName = "아이 학습비";
  const savedAmount = 23123;
  const goalAmount = 100000;
  const percentage = Math.floor((savedAmount / goalAmount) * 100);
  const navigate = useNavigate();

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
                <Amount>{goalName}</Amount>
              </DetailItem>
              <DetailItem>
                <Label>현재 저축액</Label>
                <Amount highlight>{savedAmount.toLocaleString()}원</Amount>
              </DetailItem>
              <DetailItem>
                <Label>목표 금액</Label>
                <Amount>{goalAmount.toLocaleString()}원</Amount>
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