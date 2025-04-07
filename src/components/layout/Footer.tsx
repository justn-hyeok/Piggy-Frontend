import styled from 'styled-components';
import theme from '../../constants/theme';

const Footer = () => {
    return (
        <Container>
            {/* TODO: Footer에 실제 콘텐츠 추가 */}
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
    /* FIXME: Footer 스타일을 반응형으로 개선 */
`;
