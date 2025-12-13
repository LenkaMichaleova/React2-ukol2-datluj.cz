import { Button, Container, Paper, styled } from "@mui/material";

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
