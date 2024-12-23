import React from 'react';
import styled from 'styled-components';

export const NotFound:React.FC = () => {
  return (
    <>
        <Container>
            <FourText>4</FourText>
            <ZeroText>0</ZeroText>
            <FourText>4</FourText>
        </Container>
        <Message>잘못 찾아오신 듯 ...</Message>
    </>
  );
};

export default NotFound;

const Container = styled.div`
    padding-top: 14rem;
    text-align: center;
`;

const LargeText = styled.span`
    font-size: 9rem;
    font-weight: normal;
    font-weight: 700;
`;

const FourText = styled(LargeText)`
    color: #ECC1D7  
`;

const ZeroText = styled(LargeText)`
    color: #ffffff;
`;

const Message = styled.div`
    text-align: center;
    color: #ffffff;
    font-size: 1.875rem;
    font-weight: bold;
`;