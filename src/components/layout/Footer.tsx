import styled from 'styled-components';
import theme from '../../constants/theme';

const Footer = () => {
    return (
        <Container>
            
        </Container>
    );
};

export default Footer;

const Container = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.4rem;
    background-color: #000000;
    color: ${theme.colors.text};
    text-align: center; 
`;
