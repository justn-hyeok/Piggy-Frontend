import React from "react";
import styled from "styled-components";
import THEME from "../../constants/theme";

type CardProps = {
  title: string;
  text: string;
  icon: string;
  learnMoreText: string;
  onLearnMore: () => void; // Learn More 클릭 시 호출될 함수
};

export const CardComponent: React.FC<CardProps> = ({
  title,
  text,
  icon,
  learnMoreText,
  onLearnMore,
}) => (
  <Card>
    <CardContent>
      <CardTitle>
        {icon} {title}
      </CardTitle>
      <CardText>{text}</CardText>
    </CardContent>
    <LearnMore onClick={onLearnMore}>{learnMoreText}</LearnMore>
  </Card>
);

const Card = styled.div`
  width: ${THEME.sizes.cardWidth};
  height: ${THEME.sizes.cardHeight};
  background-color: ${THEME.colors.background};
  border-radius: 1rem;
  padding: ${THEME.spacing.padding};
  display: flex;
  flex-direction: column;
  position: relative;
  border: 2px solid transparent; /* 기본 테두리 색상은 투명 */
  transition: all 0.3s ease; /* 부드러운 효과 추가 */

  &:hover {
    border-color: ${THEME.colors.accent}; /* 호버 시 테두리 색상 변경 */
    transform: scale(1.02); /* 살짝 확대되는 효과 */
  }

  @media (max-width: 768px) {
    width: 90%;
    max-width: ${THEME.sizes.cardWidth};
  }
`;

const CardContent = styled.div`
  flex: 1;
`;

const CardTitle = styled.h2`
  color: ${THEME.colors.text};
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: ${THEME.spacing.gap};
`;

const CardText = styled.p`
  color: ${THEME.colors.text};
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const LearnMore = styled.button`
  color: ${THEME.colors.text};
  font-size: 1.25rem;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  position: absolute;
  bottom: ${THEME.spacing.padding};
  right: ${THEME.spacing.padding};
  transition: color 0.3s ease;

  &:hover {
    color: ${THEME.colors.accent};
    text-decoration: underline;
  }
`;