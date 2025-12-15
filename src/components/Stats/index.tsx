import { Button, Typography, Grid } from "@mui/material";
import { StatBox, StyledCard, StyledOverlay } from "./styles";

interface StatsProps {
  mistakes: number;
  timeElapsed: number;
  onRestart: () => void;
  onMenu: () => void;
}

const Stats = ({ mistakes, timeElapsed, onRestart, onMenu }: StatsProps) => {
  const minutes = Math.floor(timeElapsed / 60);
  const seconds = timeElapsed % 60;

  return (
    <StyledOverlay>
      <StyledCard>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
          Hotovo! 🎉
        </Typography>

        <StatBox>
          <Typography
            color="primary.contrastText"
            variant="body2"
            sx={{ mb: 0.5 }}
          >
            Čas
          </Typography>
          <Typography
            color="primary.contrastText"
            variant="h5"
            sx={{ fontWeight: 700 }}
          >
            {minutes}m {seconds}s
          </Typography>
        </StatBox>

        <StatBox>
          <Typography
            color="primary.contrastText"
            variant="body2"
            sx={{ mb: 0.5 }}
          >
            Chyb
          </Typography>
          <Typography
            color="primary.contrastText"
            variant="h5"
            sx={{ fontWeight: 700 }}
          >
            {mistakes}
          </Typography>
        </StatBox>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={6}>
            <Button
              variant="contained"
              fullWidth
              onClick={onRestart}
              sx={{ fontWeight: 600 }}
            >
              Znovu
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              fullWidth
              onClick={onMenu}
              sx={{ fontWeight: 600 }}
            >
              Menu
            </Button>
          </Grid>
        </Grid>
      </StyledCard>
    </StyledOverlay>
  );
};

export default Stats;
