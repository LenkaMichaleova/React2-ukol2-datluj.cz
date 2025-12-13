import { useState, useEffect } from "react";
import Wordbox from "../Wordbox";
import Stats from "../Stats";
import { StyledContainer, StyledPaper, WordsContainer } from "./styles";
import { generateWord } from "./utils/generateWord";
import { StageHeader } from "./components/StageHeader";
import { StageStats } from "./components/StageStats";
import { ProgressBox } from "./components/ProgressBox";

interface StageProps {
  difficulty: number;
  onMenuClick: () => void;
  onGameEnd?: (mistakes: number, timeElapsed: number) => void;
}

const Stage = ({ difficulty, onMenuClick, onGameEnd }: StageProps) => {
  const [words, setWords] = useState<string[]>(
    Array.from({ length: 3 }, () => generateWord(difficulty) || "")
  );
  const [mistakes, setMistakes] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [wordsCompleted, setWordsCompleted] = useState(0);
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (!showStats) {
      interval = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [showStats]);

  const handleFinish = () => {
    setWordsCompleted((prev) => prev + 1);
    const newWord = generateWord(difficulty);
    setWords((prev) => {
      const removeFirst = prev.slice(1);
      return newWord ? [...removeFirst, newWord] : removeFirst;
    });

    if (wordsCompleted >= 9) {
      onGameEnd?.(mistakes, timeElapsed);
      setShowStats(true);
    }
  };

  const handleMistake = () => {
    setMistakes((prev) => prev + 1);
  };

  const handleRestart = () => {
    setWords(Array.from({ length: 3 }, () => generateWord(difficulty) || ""));
    setMistakes(0);
    setTimeElapsed(0);
    setWordsCompleted(0);
    setShowStats(false);
  };

  if (showStats) {
    return (
      <Stats
        mistakes={mistakes}
        timeElapsed={timeElapsed}
        onRestart={handleRestart}
        onMenu={onMenuClick}
      />
    );
  }

  const minutes = Math.floor(timeElapsed / 60);
  const seconds = timeElapsed % 60;
  const progress = (wordsCompleted / 10) * 100;

  return (
    <StyledContainer maxWidth="md">
      <StyledPaper>
        <StageHeader onMenuClick={onMenuClick} />
        <StageStats minutes={minutes} seconds={seconds} mistakes={mistakes} />
        <ProgressBox wordsCompleted={wordsCompleted} progress={progress} />
        <WordsContainer>
          {words.map((word, i) => (
            <Wordbox
              word={word}
              onFinish={handleFinish}
              active={i === 0}
              key={`${word}-${i}`}
              onMistake={handleMistake}
            />
          ))}
        </WordsContainer>
      </StyledPaper>
    </StyledContainer>
  );
};

export default Stage;
