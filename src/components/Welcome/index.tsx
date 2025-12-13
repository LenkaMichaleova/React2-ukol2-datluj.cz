import { useState } from "react";
import { Button } from "@mui/material";
import { StyledContainer, StyledPaper } from "./styles";
import { WelcomeHeader } from "./components/WelcomeHeader";
import { BestScore } from "./components/BestScore";
import { Rules } from "./components/Rulex";
import { Difficulty } from "./components/Difficulty";

interface WelcomeProps {
  onStart: (difficulty: number) => void;
  bestScore: { time: number; mistakes: number } | null;
}

const Welcome = ({ onStart, bestScore }: WelcomeProps) => {
  const [showAbout, setShowAbout] = useState(false);

  const difficulties = [
    { level: 3, label: "Velmi lehké", range: "3-5 znaků" },
    { level: 6, label: "Lehké", range: "6-8 znaků" },
    { level: 10, label: "Střední", range: "9-11 znaků" },
    { level: 15, label: "Těžké", range: "12-17 znaků" },
    { level: 20, label: "Expert", range: "18-20 znaků" },
  ];

  return (
    <StyledContainer maxWidth="sm">
      <StyledPaper>
        {!showAbout ? (
          <>
            <WelcomeHeader />
            {bestScore && (
              <BestScore time={bestScore.time} mistakes={bestScore.mistakes} />
            )}
            <Difficulty onStart={onStart} difficulties={difficulties} />
            <Button onClick={() => setShowAbout(true)} sx={{ mt: 2 }}>
              ℹ️ O hře
            </Button>
          </>
        ) : (
          <Rules setShowAbout={setShowAbout} />
        )}
      </StyledPaper>
    </StyledContainer>
  );
};

export default Welcome;
