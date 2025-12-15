import { Button, Container, Paper, styled, Typography } from "@mui/material";

export const StyledContainer = styled(Container)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2),
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: 500,
  width: "100%",
  textAlign: "center",
  borderRadius: theme.spacing(2),
}));

export const DifficultyButton = styled(Button)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  padding: theme.spacing(2),
  textTransform: "none",
  fontSize: "1rem",
  fontWeight: 600,
  justifyContent: "space-between",
}));

export const LogoBox = styled("h3")({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: 1,
});

export const TitleStyled = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  textWrap: "wrap",
  textTransform: "uppercase",
  letterSpacing: "0.10em",
  color: theme.palette.primary.main,
  textShadow: `
    2px 2px 0px rgba(0,0,0,0.2),
    4px 4px 10px rgba(0,0,0,0.15)
  `,
}));
