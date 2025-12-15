import { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Box,
  Chip,
  Divider,
  Collapse,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type BestScore = {
  time: number;
  mistakes: number;
};

interface Difficulty {
  level: number;
  label: string;
  range: string;
}

interface BestScoreProps {
  bestScores: Record<number, BestScore>;
  difficulties: Difficulty[];
}

export const BestScore = ({ bestScores, difficulties }: BestScoreProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Card sx={{ mb: 3 }} elevation={1}>
      <CardHeader
        title={
          <Typography fontWeight="bold" variant="h6" color="primary">
            Tvé nejlepší skóre
          </Typography>
        }
        onClick={() => setOpen((s) => !s)}
        sx={{ cursor: "pointer" }}
        action={
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              setOpen((s) => !s);
            }}
            aria-expanded={open}
            aria-label="rozbalit"
            size="small"
          >
            <ExpandMoreIcon
              sx={{
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s",
              }}
            />
          </IconButton>
        }
      />

      <Collapse in={open} timeout="auto" unmountOnExit>
        <CardContent sx={{ overflow: "visible" }}>
          <Grid container spacing={1}>
            {difficulties.map((d) => {
              const score = bestScores?.[d.level];
              return (
                <Grid item xs={12} key={d.level}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 2,
                    }}
                  >
                    <Box>
                      <Typography sx={{ fontWeight: 700 }}>
                        {d.label}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: "text.secondary" }}
                      >
                        {d.range}
                      </Typography>
                    </Box>

                    {score ? (
                      <Box sx={{ textAlign: "right" }}>
                        <Typography sx={{ fontWeight: 700 }}>
                          {score.time}s
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: "text.secondary" }}
                        >
                          {score.mistakes} chyb
                        </Typography>
                      </Box>
                    ) : (
                      <Chip label="Žádné skóre" size="small" color="default" />
                    )}
                  </Box>
                  <Divider />
                </Grid>
              );
            })}
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
};
