import { Box, Typography } from "@mui/material";
import { DifficultyButton } from "../styles";

type difficulties = {
  level: number;
  label: string;
  range: string;
};

interface DifficultyProps {
  onStart: (difficulty: number) => void;
  difficulties: difficulties[];
}

export const Difficulty = ({ onStart, difficulties }: DifficultyProps) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography
        variant="subtitle1"
        sx={{ mb: 2, fontWeight: 600, textAlign: "left" }}
      >
        Vyber obtížnost:
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {difficulties.map((diff) => (
          <DifficultyButton
            key={diff.level}
            variant="outlined"
            fullWidth
            onClick={() => onStart(diff.level)}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              textAlign: "left",
            }}
          >
            <Box>
              <Typography sx={{ fontWeight: 700 }}>{diff.label}</Typography>
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                {diff.range}
              </Typography>
            </Box>
            <Typography>→</Typography>
          </DifficultyButton>
        ))}
      </Box>
    </Box>
  );
};
