import styled from "styled-components";
import { CardComponent } from "./CardComponent";
import { CardType } from "./Card.types";
import { useNavigate } from "react-router-dom";

const CARD_DATA: CardType[] = [
  {
    id: 'log',
    title: "기록 확인",
    text: "자녀의 최근 저축 및 소비 활동을 한눈에 확인해보세요.",
    icon: "📊",
    learnMoreText: "learn more→",
  },
  {
    id: 'goal',
    title: "목표 관리",
    text: "자녀를 위한 재미있는 저축 목표를 만들어 관리해주세요.",
    icon: "🎯",
    learnMoreText: "learn more→",
  },
];

export const Cards: React.FC = () => {
  const navigate = useNavigate();

  const handleLearnMore = (id: string) => {
    if (id === 'log') navigate('/log');
    if (id === 'goal') navigate('/goal');
  };

  return (
    <CardContainer>
      {CARD_DATA.map((card) => (
        <CardComponent
          key={card.id}
          {...card}
          onLearnMore={() => handleLearnMore(card.id)}
        />
      ))}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  margin-top: 2rem;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;