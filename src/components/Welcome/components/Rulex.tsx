import { Box, Button, Typography } from "@mui/material";

export const Rules = ({
  setShowAbout,
}: {
  setShowAbout: (show: boolean) => void;
}) => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
        O hře
      </Typography>
      <Box sx={{ textAlign: "left", mb: 3 }}>
        <Typography paragraph>
          <strong>Datlování</strong> je hra na procvičování psaní všema deseti.
        </Typography>
        <Typography paragraph>
          Slova se ti objevují v seznamu a ty je máš napsat znak po znaku. Snaž
          se být co nejrychlejší a minimalizovat chyby!
        </Typography>
      </Box>

      <Button variant="contained" onClick={() => setShowAbout(false)} fullWidth>
        ← Zpět
      </Button>
    </>
  );
};
