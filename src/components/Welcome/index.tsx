import { useState } from "react";
import { Button } from "@mui/material";
import { StyledContainer, StyledPaper } from "./styles";
import { WelcomeHeader } from "./components/WelcomeHeader";
import { BestScore } from "./components/BestScore";
import { Rules } from "./components/Rulex";
import { Difficulty } from "./components/Difficulty";

interface WelcomeProps {
  onStart: (difficulty: number) => void;
  bestScore: Record<number, { time: number; mistakes: number }>;
}

const Welcome = ({ onStart, bestScore }: WelcomeProps) => {
  const [showAbout, setShowAbout] = useState(false);

  const difficulties = [
    { level: 3, label: "Lehká", range: "3-5 znaků" },
    { level: 10, label: "Střední", range: "6-11 znaků" },
    { level: 20, label: "Těžká", range: "12-20 znaků" },
  ];

  return (
    <StyledContainer maxWidth="sm">
      <StyledPaper>
        {!showAbout ? (
          <>
            <WelcomeHeader />
            <BestScore bestScores={bestScore} difficulties={difficulties} />
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
