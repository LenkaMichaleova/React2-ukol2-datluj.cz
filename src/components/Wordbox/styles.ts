import { Chip, styled } from "@mui/material";

export const StyledChip = styled(Chip)(({ theme }) => ({
  fontSize: "1.1rem",
  fontWeight: 700,
  padding: "20px 12px",
  height: "auto",
  letterSpacing: "1px",
  transition: "all 0.2s",
  "&.active": {
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
  "&.error": {
    backgroundColor: "#f44336",
    color: "white",
    animation: "shake 0.4s ease-out",
  },
  "@keyframes shake": {
    "0%, 100%": { transform: "translateX(0)" },
    "25%": { transform: "translateX(-8px)" },
    "75%": { transform: "translateX(8px)" },
  },
}));
