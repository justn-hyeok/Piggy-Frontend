import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding-top: 8rem;
`;

const TextLine = styled.div`
  margin: 10px 0;
`;

const Text = styled.span<{ color: string; bold?: boolean }>`
  color: ${props => props.color};
  font-size: 40px;
  font-weight: ${props => props.bold ? '700' : '400'};
  word-wrap: break-word;
`;

const Welcome = () => {
    return (
        <Container>
            <TextLine>
                <Text color="#ECC1D7">WELCOME  </Text>
                <Text color="white">to  </Text>
                <Text color="#ECC1D7">PIGGY!</Text>
            </TextLine>
            <TextLine>
                <Text color="white" bold>즐겁게 배우는  </Text>
                <Text color="#ECC1D7" bold>첫 저축 이야기</Text>
            </TextLine>
        </Container>
    );
}

export default Welcome;