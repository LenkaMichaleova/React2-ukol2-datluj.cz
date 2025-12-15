import { useState, useEffect } from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Welcome from "./components/Welcome";
import Stage from "./components/Stage";
import { theme } from "./theme";

interface BestScore {
  time: number;
  mistakes: number;
}

const App = () => {
  const [currentScreen, setCurrentScreen] = useState<"welcome" | "game">(
    "welcome"
  );
  const [difficulty, setDifficulty] = useState(5);
  const [bestScores, setBestScores] = useState<Record<number, BestScore>>({});

  useEffect(() => {
    const saved = localStorage.getItem("bestScores");
    if (saved) {
      setBestScores(JSON.parse(saved));
    }
  }, []);

  const handleStartGame = (selectedDifficulty: number) => {
    setDifficulty(selectedDifficulty);
    setCurrentScreen("game");
  };

  const handleBackToMenu = () => {
    setCurrentScreen("welcome");
  };

  const updateBestScore = (mistakes: number, timeElapsed: number) => {
    const newScore: BestScore = { time: timeElapsed, mistakes };
    const existing = bestScores[difficulty];

    const isBetter =
      !existing ||
      mistakes < existing.mistakes ||
      (mistakes === existing.mistakes && timeElapsed < existing.time);

    if (isBetter) {
      const updated = { ...bestScores, [difficulty]: newScore };
      setBestScores(updated);
      localStorage.setItem("bestScores", JSON.stringify(updated));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        {currentScreen === "welcome" ? (
          <Welcome onStart={handleStartGame} bestScore={bestScores} />
        ) : (
          <Stage
            difficulty={difficulty}
            onMenuClick={handleBackToMenu}
            onGameEnd={updateBestScore}
          />
        )}
      </Box>
    </ThemeProvider>
  );
};

export default App;
