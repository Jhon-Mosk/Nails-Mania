import { styled } from "@mui/material/styles";
import { Box, Card, CardContent, CardMedia, Container, Typography } from "@mui/material";
import { common } from "@mui/material/colors";

const Back = styled(Box)(({ theme }) => ({
    background: common.white,
}));

const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
}));

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
        description:
            "Инструменты проходят все этапы стерилизации, все расходные материалы одноразовые.",
        imgPath: "/img/icons/nail-scissors.png",
        imgAlt: "Инструменты",
    },
    {
        description: "Опыт работы более 2-х лет. Гарантия на покрытие 4 дня.",
        imgPath: "/img/icons/guarantee.png",
        imgAlt: "Опыт",
    },
    {
        description: "Возможность записаться на удобное для Вас время.",
        imgPath: "/img/icons/utility.svg",
        imgAlt: "Удобство",
    },
    {
        description: "Приятные бонусы для постоянных клиентов.",
        imgPath: "/img/icons/giftbox.png",
        imgAlt: "Бонусы",
    },
];

export default function Plus() {
    return (
        <Back>
            <CustomContainer disableGutters={true}>
                {itemConf.map((item) => {
                    return (
                        <Item
                            description={item.description}
                            imgPath={item.imgPath}
                            imgAlt={item.imgAlt}
                        />
                    );
                })}
            </CustomContainer>
        </Back>
    );
}
