import { Typography } from "@mui/material";
import { LogoBox, TitleStyled } from "../styles";

export const WelcomeHeader = () => {
  return (
    <>
      <LogoBox>
        <Typography variant="h3">⌨️</Typography>
        <TitleStyled variant="h3">Datlování</TitleStyled>
      </LogoBox>
      <Typography
        variant="h6"
        sx={{ mb: 3, color: "text.secondary", fontWeight: 400 }}
      >
        Procvičuj psaní všema deseti
      </Typography>
    </>
  );
};
