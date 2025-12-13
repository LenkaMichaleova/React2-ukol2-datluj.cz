import { Card, CardContent, Typography } from "@mui/material";

interface BestScoreProps {
    time: number;
    mistakes: number;
}

export const BestScore = ( {time, mistakes} : BestScoreProps) => {
  return (
    <Card sx={{ mb: 3, backgroundColor: "#f5f5f5" }}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Tvé nejlepší skóre
        </Typography>
        <Typography variant="h5" sx={{ mb: 1 }}>
          {time}s, {mistakes} chyb
        </Typography>
      </CardContent>
    </Card>
  );
};
