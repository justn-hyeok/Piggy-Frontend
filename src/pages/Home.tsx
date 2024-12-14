import styled from "styled-components";
import { Cards } from "../components/Cards/Cards";
import { COLORS } from "../constants/colors";

export const Home:React.FC = () => {
  return (
    <>
      <Container>
        <TextLine>
          <Text color={COLORS.primary}>WELCOME </Text>
          <Text color={COLORS.secondary}>to </Text>
          <Text color={COLORS.primary}>PIGGY!</Text>
        </TextLine>
        <TextLine>
          <Text color={COLORS.secondary} bold>
            즐겁게 배우는{" "}
          </Text>
          <Text color={COLORS.primary} bold>
            첫 저축 이야기
          </Text>
        </TextLine>
      </Container>

      <WelcomeText>
        Piggy에 오신 걸 환영합니다! 여기서 자녀의 저축 기록과 목표를 관리할 수 있습니다!
      </WelcomeText>

      <Cards />
    </>
  );
};

// 스타일 정의
const Container = styled.div`
  text-align: center;
  padding-top: 8rem;
`;

const TextLine = styled.div`
  margin: 10px 0;
`;

const Text = styled.span<{ color: string; bold?: boolean }>`
  color: ${(props) => props.color};
  font-size: 40px;
  font-weight: ${(props) => (props.bold ? "700" : "400")};
  word-wrap: break-word;
`;

const WelcomeText = styled.div`
  color: ${COLORS.textPrimary};
  font-size: 1.25rem;
  font-family: "Pretendard";
  font-weight: 500;
  text-align: center;
  margin-top: 2rem;
`;