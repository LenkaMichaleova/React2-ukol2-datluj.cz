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
  const [bestScore, setBestScore] = useState<BestScore | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("bestScore");
    if (saved) {
      setBestScore(JSON.parse(saved));
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

    if (
      !bestScore ||
      mistakes < bestScore.mistakes ||
      (mistakes === bestScore.mistakes && timeElapsed < bestScore.time)
    ) {
      setBestScore(newScore);
      localStorage.setItem("bestScore", JSON.stringify(newScore));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        {currentScreen === "welcome" ? (
          <Welcome onStart={handleStartGame} bestScore={bestScore} />
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
