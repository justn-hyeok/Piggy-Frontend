import styled from "styled-components";
import PiggyLogo from "../../assets/images/logo.svg";
import Home from "../../assets/icons/home.png";

const Header = () => {
    return (
        <Container>
            <a href="/">
                <Logo src={PiggyLogo} alt="Logo" />
            </a>
            <Nav>
                <NavLink href="/log">로그확인</NavLink>
                <NavLink href="/goal">목표관리</NavLink>
                <NavLink href="/"><img src={Home} alt="Home" /></NavLink>
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
`;

const Nav = styled.nav`
    display: flex;
`;

const NavLink = styled.a`
    color: #ffffff;
    margin-left: 1rem;
    text-decoration: none;
    font-size: 1rem;
    padding-left: 1.2rem;
    padding-right: 1.2rem;
`;