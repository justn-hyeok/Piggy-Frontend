import styled from "styled-components";

const StyledText = styled.div`
  color: #71717a;
  font-size: 1.25rem;
  font-family: 'Pretendard';
  font-weight: 500;
  text-align: center;
`;

const WelcomeText = () => {
  return (
    <StyledText>
      Piggy 에 오신걸 환영합니다! 여기서 자녀의 저축 기록과 목표를 관리할 수 있습니다!
    </StyledText>
  );
};

export default WelcomeText;