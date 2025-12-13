import { Typography } from "@mui/material";
import { StatItem, StatsBadge } from "../styles";

interface StageStatsProps {
  minutes: number;
  seconds: number;
  mistakes: number;
}

export const StageStats = ({ minutes, seconds, mistakes }: StageStatsProps) => {
  return (
    <StatsBadge>
      <StatItem>
        <Typography variant="caption" sx={{ color: "primary.contrastText" }}>
          Čas
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, color: "primary.contrastText" }}
        >
          {minutes}:{seconds < 10 ? "0" : ""}
          {seconds}
        </Typography>
      </StatItem>
      <StatItem>
        <Typography variant="caption" sx={{ color: "primary.contrastText" }}>
          Chyb
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, color: "primary.contrastText" }}
        >
          {mistakes}
        </Typography>
      </StatItem>
    </StatsBadge>
  );
};
