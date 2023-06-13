import { styled } from "@mui/material/styles";
import { Box, Card, CardContent, CardMedia, Container, Typography } from "@mui/material";
import { common, green } from "@mui/material/colors";
import Logotype from "../Logotype";

const Back = styled(Box)(({ theme }) => ({
    background:
        "linear-gradient(142.03deg, rgba(94, 72, 190, 0.71) 34.15%, rgba(226, 69, 144, 0.71) 110.69%)",
    mixBlendMode: "normal",
}));

const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
}));

// const Logo = styled(Box)(({ theme }) => ({
//     background: 'url("./img/icons/logo.svg")',
//     width: "150px",
//     height: "87px",
//     fill: green.A200,
// }));

const Item = ({ description, imgPath, imgAlt }) => {
    return (
        <Card sx={{ maxWidth: 300, height: 450 }}>
            <CardMedia
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 200,
                }}
            >
                <img height={80} src={imgPath} alt={imgAlt} />
            </CardMedia>
            <CardContent>
                <Typography
                    sx={{
                        fontWeight: 400,
                        fontFamily: "Merienda",
                        fontSize: "1.6em",
                    }}
                    component="div"
                >
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

const itemConf = [
    {
        title: "Маникюр комбинированный",
        duration: 40,
        description: ["опил формы ногтя", "обработка кутикулы", "увлажнение маслом"],
        price: 450,
    },
    {
        title: "Маникюр с покрытием однотонный",
        duration: 120,
        description: [
            "опил формы ногтя",
            "обработка кутикулы",
            "покрытие гель лаком",
            "увлажнение маслом",
        ],
        price: 800,
    },
    {
        title: "Маникюр с дизайном френч",
        duration: 120,
        description: [
            "опил формы ногтя",
            "обработка кутикулы",
            "покрытие гель лаком",
            "увлажнение маслом",
        ],
        price: 900,
    },
    {
        title: "Дополнительное укрепление ногтей",
        duration: 20,
        description: ["укрепление акригелем", "укрепление strong base"],
        price: 150,
    },
    {
        title: "Наращивание ногтей на формы",
        duration: 150,
        description: [
            "опил формы ногтя",
            "обработка кутикулы",
            "наращивание на нижние/верхние формы",
            "покрытие гель лаком",
            "увлажнение маслом",
        ],
        price: 1500,
    },
    {
        title: "Наращивание ногтей на гелевые типсы",
        duration: 120,
        description: [
            "опил формы ногтя",
            "обработка кутикулы",
            "наращивание на гелевые типсы",
            "покрытие гель лаком",
            "увлажнение маслом",
        ],
        price: 1300,
    },
    {
        title: "Дизайн до 4 ноготков",
        duration: 10,
        description: ["слайдеры", "стемпинг", "простая ручная роспись"],
        price: 100,
    },
    {
        title: "Дизайн более 4 ноготков",
        duration: 20,
        description: ["слайдеры", "стемпинг", "простая ручная роспись"],
        price: 200,
    },
    {
        title: "Художественная роспись один ноготок",
        duration: 40,
        description: ["нанесение сложных рисунков в ручную"],
        price: 250,
    },
    {
        title: "Снятие материала",
        duration: 25,
        description: ["снятие материала", "опил формы ногтя", "увлажнение маслом"],
        price: 300,
    },
    {
        title: "Снятие чужой работы с последующим покрытием",
        duration: 30,
        description: ["снятие чужой работы"],
        price: 100,
    },
    {
        title: "Массаж рук с кремом",
        duration: 20,
        description: ["увлажнение кожи", "снятие усталости", "омоложение кожи"],
        price: 200,
    },
];

export default function Price() {
    return (
        <Back>
            <CustomContainer disableGutters={true}>
                <div>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 700,
                            fontFamily: "Merienda",
                            fontSize: "3em",
                            fontStyle: "normal",
                            color: common.white,
                            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                            letterSpacing: "0.155em",
                        }}
                    >
                        Стоимость услуг
                    </Typography>
                    <Logotype fill={green.A200} />
                </div>
                <div>
                    {itemConf.map((item) => {
                        return (
                            <Item
                                description={item.description}
                                imgPath={item.imgPath}
                                imgAlt={item.imgAlt}
                            />
                        );
                    })}
                </div>
            </CustomContainer>
        </Back>
    );
}
