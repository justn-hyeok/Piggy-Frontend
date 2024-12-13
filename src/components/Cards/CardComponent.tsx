import React from "react";
import styled from "styled-components";

type CardProps = {
  title: string;
  text: string;
  icon: string;
  learnMoreText: string;
};

const THEME = {
  colors: {
    background: '#27272a',
    text: '#ffffff',
    accent: '#fda4af'
  },
  sizes: {
    cardWidth: '28rem',
    cardHeight: '11rem'
  },
  spacing: {
    padding: '1.5rem',
    gap: '0.5rem'
  }
} as const;

const Card = styled.div`
  width: ${THEME.sizes.cardWidth};
  height: ${THEME.sizes.cardHeight};
  background-color: ${THEME.colors.background};
  border-radius: 1rem;
  padding: ${THEME.spacing.padding};
  display: flex;
  flex-direction: column;
  position: relative;
  
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
  color: ${THEME.colors.accent};
  font-size: 1.25rem;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  position: absolute;
  bottom: ${THEME.spacing.padding};
  right: ${THEME.spacing.padding};

  &:hover {
    text-decoration: underline;
  }
`;

const CardComponent: React.FC<CardProps> = ({
  title,
  text,
  icon,
  learnMoreText
}) => (
  <Card>
    <CardContent>
      <CardTitle>
        {icon} {title}
      </CardTitle>
      <CardText>{text}</CardText>
    </CardContent>
    <LearnMore>{learnMoreText}</LearnMore>
  </Card>
);

export default CardComponent;