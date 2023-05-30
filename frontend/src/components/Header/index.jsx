import { styled } from "@mui/material/styles";
import { Box, Container, Stack } from "@mui/material";
import MainButton from "../Button";
import { common, yellow } from "@mui/material/colors";

const Back = styled(Box)(({ theme }) => ({
    height: "100vh",
    background: `linear-gradient(
            142.03deg,
            rgba(94, 72, 190, 0.71) 34.15%,
            rgba(226, 69, 144, 0.71) 110.69%
        ),
        url("./img/header_back.jpg") no-repeat`,
    backgroundSize: "cover",
}));

const CustomContainer = styled(Container)(({ theme }) => ({
    height: "100vh",
    padding: "50px",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "space-between",
}));

const Logo = styled(Box)(({ theme }) => ({
    background: 'url("./img/icons/logo.svg")',
    width: "150px",
    height: "87px",
}));

const LogoText = styled(Box)(({ theme }) => ({
    color: common.white,
    fontWeight: 700,
    fontFamily: "Merienda",
    fontSize: "2em",
}));

const Phone = styled(Box)(({ theme }) => ({
    fontSize: "2em",
    color: common.white,
    fontWeight: 700,
    fontFamily: "Merienda",
}));

const Slogan = styled(Box)(({ theme }) => ({
    fontFamily: "Marck Script",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "6em",
    lineHeight: "120px",
    textAlign: "center",
    color: yellow.A200,
}));

const ButtonWrap = styled(Box)(({ theme }) => ({
    alignSelf: "center",
}));

export default function Header() {
    return (
        <Back>
            <CustomContainer disableGutters={true} maxWidth={"lg"}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Logo />
                        <LogoText>Nails-Mania</LogoText>
                    </Stack>
                    <Phone>+7(902)192-23-81</Phone>
                </Stack>
                <Slogan>
                    <div>И пусть выбор лака станет вашей единственной проблемой</div>
                </Slogan>
                <ButtonWrap>
                    <MainButton>Записаться</MainButton>
                </ButtonWrap>
            </CustomContainer>
        </Back>
    );
}
