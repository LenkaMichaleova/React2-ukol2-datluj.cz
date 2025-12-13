import { Typography } from "@mui/material";

export const WelcomeHeader = () => {
  return (
    <>
      <Typography variant="h3" sx={{ mb: 1, fontWeight: 700 }}>
        ⌨️ Datlování
      </Typography>
      <Typography
        variant="h6"
        sx={{ mb: 3, color: "text.secondary", fontWeight: 400 }}
      >
        Procvičuj psaní všema deseti
      </Typography>
    </>
  );
};
