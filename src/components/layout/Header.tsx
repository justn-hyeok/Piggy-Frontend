import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PiggyLogo from '../../assets/images/logo.svg';
import Home from '../../assets/icons/home.png';
import theme from '../../constants/theme';

const Header: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Logo src={PiggyLogo} alt="Logo" onClick={() => navigate('/')} />
            <Nav>
                <NavLink onClick={() => navigate('/kids/kid1')}>아이페이지</NavLink>
                <NavLink onClick={() => navigate('/log')}>로그확인</NavLink>
                <NavLink onClick={() => navigate('/goal')}>목표관리</NavLink>
                <NavLink onClick={() => navigate('/')}><img src={Home} alt="Home" /></NavLink>
            </Nav>
        </Container>
    );
};

export default Header;

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.4rem;
    background-color: #000000;
    color: #000000;
`;

const Logo = styled.img`
    width: 100px;
    height: auto;
    cursor: pointer;
`;

const Nav = styled.nav`
    display: flex;
`;

const NavLink = styled.div`
    color: ${theme.colors.text};
    margin-left: 1rem;
    text-decoration: none;
    font-size: 1rem;
    padding-left: 1.2rem;
    padding-right: 1.2rem;
    cursor: pointer;
`;