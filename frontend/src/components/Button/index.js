import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { green, grey } from "@mui/material/colors";

const CustomButton = styled(Button)(({ theme }) => ({
    fontFamily: "Merienda, cursive",
    fontWeight: 700,
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green.A200,
    textShadow: `0 -1px 1px ${green[600]}`,
    outline: "none",
    border: `2px solid ${green[900]}`,
    borderRadius: "5px",
    boxShadow: `0 0 0 60px rgba(0, 0, 0, 0) inset, .1em .1em .2em ${grey[900]}`,
    background: `linear-gradient(${green[300]}, ${green[500]} 48%, ${green[700]} 52%, ${green[600]})`,
    "&:hover": {
        boxShadow: "0 0 0 60px rgba(0, 0, 0, .05) inset",
    },
}));

export default function MainButton({ children }) {
    return (
        <CustomButton variant="contained" href="#">
            {children}
        </CustomButton>
    );
}
