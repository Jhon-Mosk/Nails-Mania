import "./App.css";
import styled from "styled-components";
import { Container } from "@mui/material";
import MainButton from "../Button";

const Header = styled.div`
    height: 100vh;
    background: linear-gradient(
            142.03deg,
            rgba(94, 72, 190, 0.71) 34.15%,
            rgba(226, 69, 144, 0.71) 110.69%
        ),
        url("./img/header_back.jpg") no-repeat;
    background-size: cover;
`;

const Logo = styled.div``;

// const Container = styled.div`
//     height: 100vh;
//     width: 1440px;
//     background: blue;
//     margin: 0 auto;
// `;
//TODO make responsive Container

/*
https://getbootstrap.com/docs/4.6/layout/overview/
xs	screen < 576px
sm	screen ≥ 576px
md	screen ≥ 768px
lg	screen ≥ 992px
xl	screen ≥ 1200px
xxl	screen ≥ 1600px
*/

function App() {
    return (
        <div className="App">
            <Header>
                <Container style={{ background: "lightGreen" }} maxWidth={"lg"}>
                    <div>
                        <Logo>
                            <span>Natalia.Krichuk</span>
                        </Logo>
                        <p>+7(902)192-23-81</p>
                    </div>
                    <div>Кабинет маникюра Вычегодский</div>
                    <MainButton>Записаться</MainButton>
                </Container>
            </Header>
        </div>
    );
}

export default App;
