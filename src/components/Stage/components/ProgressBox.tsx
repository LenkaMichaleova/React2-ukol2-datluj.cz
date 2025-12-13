import { Box, LinearProgress, Typography } from "@mui/material";

interface ProgressBoxProps {
  wordsCompleted: number;
  progress: number;
}

export const ProgressBox = ({ wordsCompleted, progress }: ProgressBoxProps) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
        <Typography variant="body2">{wordsCompleted}/10 slov</Typography>
      </Box>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
};
